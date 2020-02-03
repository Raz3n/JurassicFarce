package com.codeclan.example.jurassic.projections;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.models.Species;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedDinosaurs", types= {Paddock.class, Species.class})
public interface EmbedDinosaurs {

    long getId();
    String getName();
    List<Dinosaur> getDinosaurs();

}
