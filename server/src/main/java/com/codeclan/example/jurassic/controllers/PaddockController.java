package com.codeclan.example.jurassic.controllers;

import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.repositories.paddocks.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/paddocks")
public class PaddockController {

    @Autowired
    PaddockRepository paddockRepository;
//
//    @GetMapping(value = "/paddocks/dinosaur/{id}")
//    public List<Paddock> findPaddockByDinosaurId(@PathVariable Long id) {
//        return paddockRepository.fin(id);
//    }
}
