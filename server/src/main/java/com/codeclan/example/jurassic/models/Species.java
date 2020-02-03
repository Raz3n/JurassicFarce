package com.codeclan.example.jurassic.models;

import javax.persistence.*;

@Entity
@Table(name="species")
public class Species {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "type")
    private String type;

    @Column(name = "diet")
    private String diet;

    @Column(name = "image")
    private String image;

    public Species() {

    }

    public Species(String type, String diet, String image) {
        this.type = type;
        this.diet = diet;
        this.image = image;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDiet() {
        return diet;
    }

    public void setDiet(String diet) {
        this.diet = diet;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }
}

