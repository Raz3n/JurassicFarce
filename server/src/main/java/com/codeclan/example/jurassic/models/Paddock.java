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
    private String available;

    @Column(name="herbivore_friendly")
    private Boolean herb_friendly; 

    @Column(name="pimage")
    private String pimage;

    @JsonIgnoreProperties("paddock")
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock() {
    }

    public Paddock(int capacity, String name, String available, Boolean herb_friendly, String pimage){
        this.capacity = capacity;
        this.name = name;
        this.available = available;
        this.herb_friendly = herb_friendly; 
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

    public String getAvailable() {
        return available;
    }

    public void setAvailable(String available) {
        this.available = available;
    }

    public Boolean getHerbFriendly(){
        return herb_friendly;
    }

    public void setHerbFriendly(Boolean herb_friendly){
        this.herb_friendly = herb_friendly;
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
