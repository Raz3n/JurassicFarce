package com.codeclan.example.jurassic.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name="carnivore")
@DiscriminatorValue("carnivore")

public class Carnivore extends Dinosaur {

    public Carnivore (int stomachCapacity, String name, char sex, Species species, Paddock paddock) {
        super(stomachCapacity, name, sex, species, paddock);
    }

    public Carnivore(){

    }
}
