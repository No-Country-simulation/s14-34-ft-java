package main.mappers;

import javax.annotation.processing.Generated;
import main.dtos.PetDTO;
import main.enums.PetSize;
import main.enums.TypeOfPet;
import main.models.Pet;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-23T14:52:32-0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.9 (Amazon.com Inc.)"
)
@Component
public class PetMapperImpl implements PetMapper {

    @Override
    public PetDTO petToPetDTO(Pet pet) {
        if ( pet == null ) {
            return null;
        }

        Long id = null;
        String photo = null;
        TypeOfPet typeOfPet = null;
        String name = null;
        String breed = null;
        Integer age = null;
        PetSize size = null;
        String behaviour = null;
        String healthStatus = null;
        String location = null;
        Boolean vaccinated = null;
        Boolean sterilized = null;

        id = pet.getId();
        photo = pet.getPhoto();
        typeOfPet = pet.getTypeOfPet();
        name = pet.getName();
        breed = pet.getBreed();
        age = pet.getAge();
        size = pet.getSize();
        behaviour = pet.getBehaviour();
        healthStatus = pet.getHealthStatus();
        location = pet.getLocation();
        vaccinated = pet.getVaccinated();
        sterilized = pet.getSterilized();

        String description = null;

        PetDTO petDTO = new PetDTO( id, photo, typeOfPet, name, breed, age, size, behaviour, healthStatus, location, vaccinated, sterilized, description );

        return petDTO;
    }
}
