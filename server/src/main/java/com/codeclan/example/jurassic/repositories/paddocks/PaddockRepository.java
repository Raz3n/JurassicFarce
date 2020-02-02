package com.codeclan.example.jurassic.repositories.paddocks;

import com.codeclan.example.jurassic.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom {
}
