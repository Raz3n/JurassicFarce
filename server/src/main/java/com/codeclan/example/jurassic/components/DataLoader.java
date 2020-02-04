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

        Paddock catrinCanyon = new Paddock("Catrin Canyon");
        paddockRepository.save(catrinCanyon);

        Paddock morgaineMeadows = new Paddock("Morgaine Meadows");
        paddockRepository.save(morgaineMeadows);

        Paddock nelsonNubbin = new Paddock("Nelson's Nubbin");
        paddockRepository.save(nelsonNubbin);

        Paddock eduardoEnclave = new Paddock("Eduardo Enclave");
        paddockRepository.save(eduardoEnclave);

        Paddock goldblumGorge = new Paddock("Goldblum Gorge");
        paddockRepository.save(goldblumGorge);

        Paddock sandySandpit = new Paddock("Sandy's Sandpit");
        paddockRepository.save(sandySandpit);

        Paddock johnJungle = new Paddock("John's Jungle");
        paddockRepository.save(johnJungle);

        Species brontosaurus = new Species("Brontosaurus", "Herbivore", "./DinosaurImages/Artboard2@4x.png");
        speciesRepository.save(brontosaurus);

        Species tsintaosaurus = new Species("Tsintaosaurus", "Herbivore", "./DinosaurImages/Artboard4@4x.png");
        speciesRepository.save(tsintaosaurus);

        Species stegosaurus = new Species("Stegosaurus", "Herbivore", "./DinosaurImages/Artboard5@4x.png");
        speciesRepository.save(stegosaurus);

        Species parasaurolophus = new Species("Parasaurolophus", "Herbivore", "./DinosaurImages/Artboard6@4x.png");
        speciesRepository.save(parasaurolophus);

        Species triceratops = new Species("Triceratops", "Herbivore", "./DinosaurImages/Artboard7@4x.png");
        speciesRepository.save(triceratops);

        Species tyrannosaurus = new Species("Tyrannosaurus", "Carnivore", "./DinosaurImages/Artboard8@4x.png");
        speciesRepository.save(tyrannosaurus);

        Species talarurus = new Species("Talarurus", "Herbivore", "./DinosaurImages/Artboard10@4x.png");
        speciesRepository.save(talarurus);

        Species coelophysis = new Species("Coelophysis", "Carnivore", "./DinosaurImages/Artboard9@4x.png");
        speciesRepository.save(coelophysis);

        Species diplodocus = new Species("Diplodocus", "Herbivore", "./DinosaurImages/Artboard16@4x.png");
        speciesRepository.save(diplodocus);

        Species velociraptor = new Species("Velociraptor", "Carnivore", "./DinosaurImages/Artboard15@4x.png");
        speciesRepository.save(velociraptor);

        Dinosaur juan = new Dinosaur(5, "Juan", 'M', diplodocus, eduardoEnclave);
        dinosaurRepository.save(juan);

        Dinosaur sky = new Dinosaur(6, "Sky", 'M', stegosaurus, johnJungle);
        dinosaurRepository.save(sky);

        Dinosaur colin = new Dinosaur(4,"Colin", 'M', triceratops, sandySandpit);
        dinosaurRepository.save(colin);

        Dinosaur sophia = new Dinosaur(7, "Sophia", 'F', velociraptor, catrinCanyon);
        dinosaurRepository.save(sophia);

        Dinosaur kat = new Dinosaur(10,"Kat", 'F', tyrannosaurus, goldblumGorge);
        dinosaurRepository.save(kat);

        Dinosaur eugene = new Dinosaur(9, "Eugene", 'M', talarurus, nelsonNubbin);
        dinosaurRepository.save(eugene);




    }


}
