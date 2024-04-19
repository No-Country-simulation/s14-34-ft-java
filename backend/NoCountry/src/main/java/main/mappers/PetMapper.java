package main.mappers;

import main.dtos.PetDTO;
import main.models.Pet;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PetMapper {
    PetDTO petToPetDTO(Pet pet);
}
