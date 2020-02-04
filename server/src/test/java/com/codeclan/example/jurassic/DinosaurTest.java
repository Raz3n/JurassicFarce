package com.codeclan.example.jurassic;

import com.codeclan.example.jurassic.models.Dinosaur;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.models.Species;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DinosaurTest {

    private Paddock paddock;
    private Species species;
    private Dinosaur herbivore;

    @Before
    public void before() {
        species = new Species("Diplodocus", "Herbivore", 10, "./DinosaurImages/Artboard2@4x.png");
        paddock = new Paddock("Morgaine Meadows", true, true, "./paddocks/paddock_02.svg");
        herbivore = new Dinosaur("Nelson", 'M', species, paddock);
    }

    @Test
    public void canGetName() {
        assertEquals("Nelson", herbivore.getName());
    }

    @Test
    public void canGetStomach() {
        assertEquals(4, herbivore.getStomach());
    }

    @Test
    public void canGetSex() {
        assertEquals('M', herbivore.getSex());
    }

    @Test
    public void canGetPaddock() {
        assertEquals("Morgaine Meadows", herbivore.getPaddock().getName());
    }
}
