package com.codeclan.example.jurassic.projections;

import com.codeclan.example.jurassic.models.Dinosaur;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPaddocks", types = Dinosaur.class)
public interface EmbedPaddocks {

    long getId();
    String getName();
    String getSpecies();
    String getImage();

}
