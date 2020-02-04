package com.codeclan.example.jurassic.components;

import com.codeclan.example.jurassic.models.*;
import com.codeclan.example.jurassic.repositories.dinosaurs.DinosaurRepository;
import com.codeclan.example.jurassic.repositories.paddocks.PaddockRepository;
import com.codeclan.example.jurassic.repositories.species.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    SpeciesRepository speciesRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Paddock catrinCanyon = new Paddock("Catrin Canyon", true, "./paddock_01.svg");
        paddockRepository.save(catrinCanyon);

        Paddock morgaineMeadows = new Paddock("Morgaine Meadows", true, "./paddock_02.svg");
        paddockRepository.save(morgaineMeadows);

        Paddock nelsonNubbin = new Paddock("Nelson's Nubbin", true, "./paddock_03.svg");
        paddockRepository.save(nelsonNubbin);

        Paddock eduardoEnclave = new Paddock("Eduardo Enclave", true, "./paddock_04.svg");
        paddockRepository.save(eduardoEnclave);

        Paddock goldblumGorge = new Paddock("Goldblum Gorge", false, "./paddock_05.svg");
        paddockRepository.save(goldblumGorge);

        Paddock sandySandpit = new Paddock("Sandy's Sandpit", false, "./paddock_06.svg");
        paddockRepository.save(sandySandpit);

        Paddock johnJungle = new Paddock("John's Jungle", false, "./paddock_07.svg");
        paddockRepository.save(johnJungle);

        Species brontosaurus = new Species("Brontosaurus", "Herbivore", 10,"./DinosaurImages/Artboard2@4x.png");
        speciesRepository.save(brontosaurus);

        Species tsintaosaurus = new Species("Tsintaosaurus", "Herbivore",6, "./DinosaurImages/Artboard4@4x.png");
        speciesRepository.save(tsintaosaurus);

        Species stegosaurus = new Species("Stegosaurus", "Herbivore",7, "./DinosaurImages/Artboard5@4x.png");
        speciesRepository.save(stegosaurus);

        Species parasaurolophus = new Species("Parasaurolophus", "Herbivore",5, "./DinosaurImages/Artboard6@4x.png");
        speciesRepository.save(parasaurolophus);

        Species triceratops = new Species("Triceratops", "Herbivore",8, "./DinosaurImages/Artboard7@4x.png");
        speciesRepository.save(triceratops);

        Species tyrannosaurus = new Species("Tyrannosaurus", "Carnivore",12, "./DinosaurImages/Artboard8@4x.png");
        speciesRepository.save(tyrannosaurus);

        Species talarurus = new Species("Talarurus", "Herbivore",8, "./DinosaurImages/Artboard10@4x.png");
        speciesRepository.save(talarurus);

        Species coelophysis = new Species("Coelophysis", "Carnivore",5, "./DinosaurImages/Artboard9@4x.png");
        speciesRepository.save(coelophysis);

        Species diplodocus = new Species("Diplodocus", "Herbivore", 10, "./DinosaurImages/Artboard16@4x.png");
        speciesRepository.save(diplodocus);

        Species velociraptor = new Species("Velociraptor", "Carnivore", 6, "./DinosaurImages/Artboard15@4x.png");
        speciesRepository.save(velociraptor);

        Dinosaur juan = new Dinosaur("Juan", 'M', diplodocus, eduardoEnclave);
        dinosaurRepository.save(juan);

        Dinosaur sky = new Dinosaur("Sky", 'M', stegosaurus, nelsonNubbin);
        dinosaurRepository.save(sky);

        Dinosaur colin = new Dinosaur("Colin", 'M', triceratops, catrinCanyon);
        dinosaurRepository.save(colin);

        Dinosaur sophia = new Dinosaur("Sophia", 'F', velociraptor, morgaineMeadows);
        dinosaurRepository.save(sophia);

        Dinosaur kat = new Dinosaur("Kat", 'F', tyrannosaurus, catrinCanyon);
        dinosaurRepository.save(kat);

        Dinosaur eugene = new Dinosaur("Eugene", 'M', talarurus, eduardoEnclave);
        dinosaurRepository.save(eugene);




    }


}
