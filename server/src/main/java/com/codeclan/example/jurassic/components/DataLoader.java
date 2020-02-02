package com.codeclan.example.jurassic.components;

import com.codeclan.example.jurassic.models.Carnivore;
import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Herbivore;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.repositories.dinosaurs.DinosaurRepository;
import com.codeclan.example.jurassic.repositories.paddocks.PaddockRepository;
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

        Dinosaur diplodocus = new Herbivore(5, "Diplodocus", "Juan", 'M', "image1", eduardoEnclave);
        dinosaurRepository.save(diplodocus);

        Dinosaur stegosaurus = new Herbivore(6, "Stegosaurus", "Sky", 'M', "image2", johnJungle);
        dinosaurRepository.save(stegosaurus);

        Dinosaur triceratops = new Herbivore(4, "Triceratops", "Colin", 'M', "image3", sandySandpit);
        dinosaurRepository.save(triceratops);

        Dinosaur velociraptor = new Carnivore(7, "Velociraptor", "Sophia", 'F', "image4", catrinCanyon);
        dinosaurRepository.save(velociraptor);

        Dinosaur tyrannosaurus = new Carnivore(10, "Tyrannosaurus", "Kat", 'F', "image5", goldblumGorge);
        dinosaurRepository.save(tyrannosaurus);

        Dinosaur eugenasaurus = new Carnivore(9, "Eugenasaurus", "Eugene", 'M', "image6", nelsonNubbin);
        dinosaurRepository.save(eugenasaurus);









    }


}
