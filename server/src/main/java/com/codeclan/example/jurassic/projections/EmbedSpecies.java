package com.codeclan.example.jurassic.projections;


import com.codeclan.example.jurassic.models.Dinosaur;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedSpecies", types=Dinosaur.class)
public interface EmbedSpecies {

    long getId();
    int getStomachCapacity();
    Dinosaur getDinosaur();
}
