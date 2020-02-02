package com.codeclan.example.jurassic.controllers;

import com.codeclan.example.jurassic.repositories.paddocks.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/paddocks")
public class PaddockController {

    @Autowired
    PaddockRepository paddockRepository;
}
