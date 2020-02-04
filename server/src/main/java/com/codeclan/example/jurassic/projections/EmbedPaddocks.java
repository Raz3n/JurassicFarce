package com.codeclan.example.jurassic.projections;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.models.Species;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPaddocks", types = Dinosaur.class)
public interface EmbedPaddocks {

    long getId();
    String getName();
    char getSex();
    int getStomach();
    int getStomachCapacity();

    Species getSpecies();
    Paddock getPaddock();
}
