import React, { Component } from "react";
import Request from "../../helpers/Request";
import SpeciesList from "../species/SpeciesList";

class DinosaurCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddocks: [],
      name: "",
      sex: "",
      selected_paddock: "",
      species: [],
      selected_species: {}
    };
    this.handleName = this.handleName.bind(this);
    this.handleSelectedSex = this.handleSelectedSex.bind(this);
    this.handlePaddockChange = this.handlePaddockChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedSpecies = this.handleSelectedSpecies.bind(this);
    this.filterPaddocks = this.filterPaddocks.bind(this);
  }

  componentDidMount() {
    this.fetchSpecies();
    this.fetchPaddocks();
  }

  fetchSpecies() {
    const request = new Request();
    request.get("/species").then(data => {
      this.setState({
        species: data._embedded.species
      });
    });
  }

  fetchPaddocks() {
    const request = new Request();
    request.get("/paddocks").then(data => {
      this.setState({
        paddocks: data._embedded.paddocks
      });
    });
  }

  handleSelectedSex(event) {
    this.setState({ sex: event.target.value });
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handlePaddockChange(event) {
    this.setState({ selected_paddock: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newDinosaur = {
      name: this.state.name,
      sex: this.state.sex,
      stomach: 3,
      paddock: this.state.selected_paddock,
      species: this.state.selected_species._links.self.href
    };
    const request = new Request();
    request.post("/dinosaurs", newDinosaur).then(() => {
      window.location = "/dinosaurs";
    });
  }

  handleSelectedSpecies(species) {
    this.setState({ selected_species: species });
  }

  filterPaddocks() {
    const isHerbFriendly = this.state.selected_species.diet === "Herbivore";

    return this.state.paddocks
      .filter(
        paddock =>
          paddock.herbFriendly === isHerbFriendly &&
          paddock.available === "true" &&
          paddock.capacity > paddock.dinosaurs.length
      )
      .map((paddock, index) => {
        return (
          <option
            key={index}
            value={paddock._links.self.href}
            selected={paddock._links.self.href === this.state.selected_paddock}
          >
            {paddock.name}
          </option>
        );
      });
  }

  render() {
    return (
      <div>
        <SpeciesList
          handleSelectedSpecies={this.handleSelectedSpecies}
          species={this.state.species}
        />

        <div className="form-dino-container">
          <div className="dino-form-img">
            <img
              src={this.state.selected_species.image}
              alt={this.state.selected_species.type}
            />
            <p>{this.state.selected_species.type}</p>
          </div>

          <form className="dino-form" onSubmit={this.handleSubmit}>
            <input
              className="dino-input-text"
              type="text"
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.handleName}
              required
            />
            <div className="sex-form-wrap">
              <input
                type="radio"
                name="sex"
                value="F"
                onChange={this.handleSelectedSex}
                required
              />
              <span>Female</span>
              <input
                type="radio"
                name="sex"
                value="M"
                onChange={this.handleSelectedSex}
                required
              />
              <span>Male</span>
            </div>
            <select
              className="select-paddock-menu"
              name="paddocks"
              required
              onChange={this.handlePaddockChange}
            >
              <option selected disabled value="">
                Select a paddock
              </option>
              {this.filterPaddocks()}
            </select>
            <button className="create-dino" type="submit">
              Save new dinosaur{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DinosaurCreateForm;
