package com.codeclan.example.jurassic.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paddocks")
public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="capacity")
    private int capacity;

    @Column(name="name")
    private String name;

    @Column(name="available")
    private boolean available;

    @Column(name="image")
    private String image;

    @JsonIgnoreProperties("paddock")
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock() {
    }

    public Paddock(String name, boolean available, String image){
        this.capacity = 4;
        this.name = name;
        this.available = false;
        this.image = "";
        this.dinosaurs = new ArrayList<Dinosaur>();
    }

    public int getCapacity() {
        return this.capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Dinosaur> getDinosaurs() {
        List<Dinosaur> newDinosaurs = this.dinosaurs;
        return newDinosaurs;
    }

    public void setDinosaurs(ArrayList<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
