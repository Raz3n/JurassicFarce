package com.codeclan.example.jurassic.controllers;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.repositories.dinosaurs.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dinosaurs")
public class DinosaurController {

    @Autowired
    DinosaurRepository dinosaurRepository;

}
