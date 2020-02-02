package com.codeclan.example.jurassic.repositories.paddocks;

import com.codeclan.example.jurassic.models.Paddock;

import java.util.List;

public interface PaddockRepositoryCustom {

    List<Paddock> allPaddocks();

    List<Paddock> getPaddockByCapacity(int capacity);

    List<Paddock> getPaddockByName(String name);
}
