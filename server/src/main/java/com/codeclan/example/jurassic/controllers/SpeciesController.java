package com.codeclan.example.jurassic.controllers;

import com.codeclan.example.jurassic.repositories.species.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/species")
public class SpeciesController {

    @Autowired
    SpeciesRepository speciesRepository;
}
