package main.services;

import main.models.Pet;

import java.util.List;

public interface IPetService {
    List<Pet> findAllPets() throws Exception;
    Pet findPetById(Long id);
    Pet savePet(Pet pet) throws Exception;
    Pet updatePet(Long id ,Pet pet) throws Exception;
    void deletePet(Long id) throws Exception;
}