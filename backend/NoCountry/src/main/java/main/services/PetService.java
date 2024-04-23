package main.services;

import main.models.Pet;
import org.hibernate.service.spi.ServiceException;

import java.util.List;

public interface PetService {
    List<Pet> findAllPets() throws Exception;
    Pet findPetById(Long id);
    Pet savePet(Pet pet) throws Exception;
    Pet updatePet(Long id ,Pet pet) throws Exception;
    void deletePet(Long id) throws Exception;
}
