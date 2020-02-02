package com.codeclan.example.jurassic;

import com.codeclan.example.jurassic.models.Herbivore;
import com.codeclan.example.jurassic.models.Paddock;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HerbivoreTest {

    private Paddock paddock;
    private Herbivore herbivore;

    @Before
    public void before() {
        paddock = new Paddock("Morgaine Meadows");
        herbivore = new Herbivore(5, "Diplodocus", "Nelson", 'M', "image1", paddock);
    }

    @Test
    public void canGetName() {
        assertEquals("Nelson", herbivore.getName());
    }

    @Test
    public void canGetStomachCapacity() {
        assertEquals(5, herbivore.getStomachCapacity());
    }

    @Test
    public void canGetStomach() {
        assertEquals(4, herbivore.getStomach());
    }

    @Test
    public void canGetSpecies() {
        assertEquals("Diplodocus", herbivore.getSpecies());
    }

    @Test
    public void canGetSex() {
        assertEquals('M', herbivore.getSex());
    }

    @Test
    public void canGetImage() {
        assertEquals("image1", herbivore.getImage());
    }

    @Test
    public void canGetPaddock() {
        assertEquals("Morgaine Meadows", herbivore.getPaddock().getName());
    }
}
