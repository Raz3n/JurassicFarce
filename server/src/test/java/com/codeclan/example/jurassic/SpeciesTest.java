package com.codeclan.example.jurassic;

import com.codeclan.example.jurassic.models.Species;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SpeciesTest {

    private Species species;

    @Before
    public void before() {
        species = new Species("Diplodocus", "Herbivore", 10, "./DinosaurImages/Artboard2@4x.png");
    }

    @Test
    public void canGetType() {
        assertEquals("Diplodocus", species.getType());
    }

    @Test
    public void canGetDiet() {
        assertEquals("Herbivore", species.getDiet());
    }

    @Test
    public void canGetStomachCapacity() {
        assertEquals(10, species.getStomachCapacity());
    }

    @Test
    public void canGetImage() {
        assertEquals("image1", species.getImage());
    }
}
