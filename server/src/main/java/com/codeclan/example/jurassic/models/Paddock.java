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

    @Column(name="pimage")
    private String pimage;

    @JsonIgnoreProperties("paddock")
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock() {
    }

    public Paddock(String name, boolean available, String pimage){
        this.capacity = 4;
        this.name = name;
        this.available = false;
        this.pimage = pimage;
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

    public String getPimage() {
        return pimage;
    }

    public void setPimage(String pimage) {
        this.pimage = pimage;
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
