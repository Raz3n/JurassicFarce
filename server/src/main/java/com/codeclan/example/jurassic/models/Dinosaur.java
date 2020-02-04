package com.codeclan.example.jurassic.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="dinosaurs")
public class Dinosaur {

    @Column(name = "stomach")
    private int stomach;


    @Column(name="name")
    private String name;

    @Column(name="sex")
    private char sex;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name="species_id", nullable = false)
    private Species species;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name="paddock_id", nullable = false)
    private Paddock paddock;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    public Dinosaur(String name, char sex, Species species, Paddock paddock) {
        this.stomach = 4;
        this.name = name;
        this.sex = sex;
        this.species = species;
        this.paddock = paddock;
    }
    public Dinosaur(){
    }
    
    public int getStomach() {
        return this.stomach;
    }

    public void setStomach(int stomach) {
        this.stomach = stomach;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public char getSex() {
        return this.sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public Paddock getPaddock() {
        return this.paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }

    public Long getId(){
        return this.Id;
    }

    public void setId(Long Id){
        this.Id = Id;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }
}