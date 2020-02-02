package com.codeclan.example.jurassic.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name="carnivore")
@DiscriminatorValue("carnivore")

public class Carnivore extends Dinosaur {

    public Carnivore (int stomachCapacity, String species, String name, char sex, String image, Paddock paddock) {
        super(stomachCapacity, species, name, sex, image, paddock);
    }

    public Carnivore(){

    }
}
