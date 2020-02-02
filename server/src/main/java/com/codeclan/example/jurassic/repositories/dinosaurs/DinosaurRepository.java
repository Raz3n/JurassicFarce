package com.codeclan.example.jurassic.repositories.dinosaurs;

import com.codeclan.example.jurassic.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {
}
