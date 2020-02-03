package com.codeclan.example.jurassic;

import com.codeclan.example.jurassic.models.Herbivore;
import com.codeclan.example.jurassic.models.Paddock;
import com.codeclan.example.jurassic.models.Species;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HerbivoreTest {

    private Paddock paddock;
    private Species species;
    private Herbivore herbivore;

    @Before
    public void before() {
        species = new Species("Diplodocus", "Herbivore", "image1");
        paddock = new Paddock("Morgaine Meadows");
        herbivore = new Herbivore(5, "Nelson", 'M', species, paddock);
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
    public void canGetSex() {
        assertEquals('M', herbivore.getSex());
    }

    @Test
    public void canGetPaddock() {
        assertEquals("Morgaine Meadows", herbivore.getPaddock().getName());
    }
}
