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

        Species brontosaurus = new Species("Brontosaurus", "Herbivore", "image2");
        speciesRepository.save(brontosaurus);

        Species tsintaosaurus = new Species("Tsintaosaurus", "Herbivore", "image4");
        speciesRepository.save(tsintaosaurus);

        Species stegosaurus = new Species("Stegosaurus", "Herbivore", "image5");
        speciesRepository.save(stegosaurus);

        Species parasaurolophus = new Species("Parasaurolophus", "Herbivore", "image6");
        speciesRepository.save(parasaurolophus);

        Species triceratops = new Species("Triceratops", "Herbivore", "image7");
        speciesRepository.save(triceratops);

        Species tyrannosaurus = new Species("Tyrannosaurus", "Carnivore", "image8");
        speciesRepository.save(tyrannosaurus);

        Species talarurus = new Species("Talarurus", "Herbivore", "image10");
        speciesRepository.save(talarurus);

        Species coelophysis = new Species("Coelophysis", "Carnivore", "image9");
        speciesRepository.save(coelophysis);

        Species diplodocus = new Species("Diplodocus", "Herbivore", "image16");
        speciesRepository.save(diplodocus);

        Species velociraptor = new Species("Velociraptor", "Carnivore", "image15");
        speciesRepository.save(velociraptor);

        Dinosaur juan = new Herbivore(5, "Juan", 'M', diplodocus, eduardoEnclave);
        dinosaurRepository.save(juan);

        Dinosaur sky = new Herbivore(6, "Sky", 'M', stegosaurus, johnJungle);
        dinosaurRepository.save(sky);

        Dinosaur colin = new Herbivore(4,"Colin", 'M', triceratops, sandySandpit);
        dinosaurRepository.save(colin);

        Dinosaur sophia = new Carnivore(7, "Sophia", 'F', velociraptor, catrinCanyon);
        dinosaurRepository.save(sophia);

        Dinosaur kat = new Carnivore(10,"Kat", 'F', tyrannosaurus, goldblumGorge);
        dinosaurRepository.save(kat);

        Dinosaur eugene = new Carnivore(9, "Eugene", 'M', talarurus, nelsonNubbin);
        dinosaurRepository.save(eugene);









    }


}
