package main.mappers;

import main.dtos.PetSitterDTO;
import main.models.PetSitter;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PetSitterMapper {

    PetSitterDTO petSitterDto(PetSitter petSitter);

}
