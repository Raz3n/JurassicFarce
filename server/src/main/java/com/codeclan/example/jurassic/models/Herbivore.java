package com.codeclan.example.jurassic.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name="herbivore")
@DiscriminatorValue("herbivore")
public class Herbivore extends Dinosaur {

    public Herbivore(int stomachCapacity, String species, String name, char sex, String image, Paddock paddock) {
        super(stomachCapacity, species, name, sex, image, paddock);
    }

    public Herbivore(){

    }
}
