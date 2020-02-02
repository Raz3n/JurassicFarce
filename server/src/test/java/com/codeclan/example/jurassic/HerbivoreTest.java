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
}
