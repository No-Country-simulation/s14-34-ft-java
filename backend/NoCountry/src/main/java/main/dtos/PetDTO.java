package main.dtos;

import main.enums.PetSize;
import main.enums.Type;

public record PetDTO(
        Long id,
        String photo,
        Type type,
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


