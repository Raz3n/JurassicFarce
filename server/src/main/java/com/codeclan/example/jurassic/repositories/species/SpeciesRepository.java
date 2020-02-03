package com.codeclan.example.jurassic.repositories.species;

import com.codeclan.example.jurassic.models.Species;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SpeciesRepository extends JpaRepository<Species, Long> {
}
