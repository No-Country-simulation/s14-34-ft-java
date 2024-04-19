package main.services.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import main.models.Pet;
import main.repository.PetRepository;
import main.services.PetService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PetServiceImpl implements PetService {

/*
    private final PetRepository petRepository;


    public PetServiceImpl(PetRepository petRepository) {
        this.petRepository = petRepository;
    }
*/
    @Autowired
    private PetRepository petRepository;

    @Override
    public List<Pet> findAllPets() throws Exception {
        try {
            return petRepository.findAll();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Pet findPetById(Long id) {
        return petRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Pet not found"));
    }


    @Override
    public Pet savePet(Pet pet) throws Exception {
        try {
            return petRepository.save(pet);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Pet updatePet(Long id, Pet petRequest) throws Exception {
        try {
            Pet existingPet = petRepository.findById(id)
                    .orElseThrow(()-> new EntityNotFoundException("Pet not found"));

            existingPet.setName(petRequest.getName());
            existingPet.setBreed(petRequest.getBreed());
            existingPet.setAge(petRequest.getAge());
            existingPet.setPhoto(petRequest.getPhoto());
            existingPet.setHealthStatus(petRequest.getHealthStatus());
            existingPet.setLocation(petRequest.getLocation());
            existingPet.setVaccinated(petRequest.getVaccinated());
            existingPet.setSterilized(petRequest.getSterilized());
            existingPet.setGeneralDescription(petRequest.getGeneralDescription());
            return existingPet;
        } catch (Exception e) {
            throw new ServiceException("Error occurred while updating pet with id: " + id, e);
        }
    }

    @Override
    public void deletePet(Long id) throws Exception {

    }


}
