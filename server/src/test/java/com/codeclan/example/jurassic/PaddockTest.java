package com.codeclan.example.jurassic;

import com.codeclan.example.jurassic.models.Paddock;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PaddockTest {

    private Paddock paddock;

    @Before
    public void before() {
        paddock = new Paddock(4, "Morgaine Meadows", "true", true, "./paddocks/paddock_02.svg");
    }

    @Test
    public void canGetName() {
        assertEquals("Morgaine Meadows", paddock.getName());
    }

    @Test
    public void canGetCapacity() {
        assertEquals(4, paddock.getCapacity());
    }

    @Test
    public void canGetDinosaurs() {
        assertEquals(0, paddock.getDinosaurs().size());
    }
}
