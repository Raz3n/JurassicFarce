package com.codeclan.example.jurassic.repositories.dinosaurs;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Paddock;

import java.util.List;

public interface DinosaurRepositoryCustom {

    List<Dinosaur> allDinosaurs();

    List<Dinosaur> getDinosaurByPaddock(Paddock paddock);

    List<Dinosaur> getDinosaurByName(String name);

}
