package com.codeclan.example.jurassic.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name="herbivore")
@DiscriminatorValue("herbivore")
public class Herbivore extends Dinosaur {

    public Herbivore(int stomachCapacity, String name, char sex, Species species, Paddock paddock) {
        super(stomachCapacity, name, sex, species, paddock);
    }

    public Herbivore(){

    }
}
