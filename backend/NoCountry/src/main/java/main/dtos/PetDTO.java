package main.dtos;

import main.enums.PetSize;
import main.enums.TypeOfPet;

public record PetDTO(
        Long id,
        String photo,
        TypeOfPet type,
        String name,
        String breed,
        Integer age,
        PetSize size,
        String behaviour,
        String healthStatus,
        String location,
        Boolean vaccinated,
        Boolean sterilized,
        String Description
) {
}
