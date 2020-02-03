package com.codeclan.example.jurassic.repositories.paddocks;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.projections.EmbedDinosaurs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

//@RepositoryRestResource
@RepositoryRestResource(excerptProjection = EmbedDinosaurs.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom {


}
