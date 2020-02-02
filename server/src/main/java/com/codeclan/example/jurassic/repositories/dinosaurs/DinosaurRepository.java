package com.codeclan.example.jurassic.repositories.dinosaurs;

import com.codeclan.example.jurassic.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}
