package com.codeclan.example.jurassic.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "dinosaurs")
public abstract class Dinosaur {

    @Column(name = "stomach")
    private int stomach;

    @Column(name = "stomach_capacity")
    private int stomachCapacity;

    @Column(name="species")
    private String species;

    @Column(name="name")
    private String name;

    @Column(name="sex")
    private char sex;

    @Column(name="image")
    private String image;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name="paddock_id", nullable = false)
    private Paddock paddock;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    public Dinosaur(int stomachCapacity, String species, String name, char sex, String image, Paddock paddock) {
        this.stomachCapacity = stomachCapacity;
        this.stomach = 4;
        this.species = species;
        this.name = name;
        this.sex = 'F';
        this.image = image;
        this.paddock = paddock;
    }
    public Dinosaur(){
    }

    public int getStomachCapacity() {
        return this.stomachCapacity;
    }

    public void setStomachCapacity(int stomachCapacity) {
        this.stomachCapacity = stomachCapacity;
    }

    public int getStomach() {
        return this.stomach;
    }

    public void setStomach(int stomach) {
        this.stomach = stomach;
    }

    public String getSpecies() {
        return this.species;
    }

    public void setSpecies(String species) {
        this.species = species;
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

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
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
}