package com.codeclan.example.jurassic.repositories;

import com.codeclan.example.jurassic.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaddockRepository extends JpaRepository<Paddock, Long> {
}
