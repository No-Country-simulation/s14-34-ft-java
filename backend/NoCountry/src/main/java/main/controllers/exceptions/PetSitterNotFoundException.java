package main.controllers.exceptions;

import java.lang.RuntimeException;

public class PetSitterNotFoundException extends RuntimeException {
    public PetSitterNotFoundException(String message) {
        super(message);
    }
}
