package main.services.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import main.mappers.PetMapper;
import main.models.Owner;
import main.models.Pet;
import main.repository.OwnerRepository;
import main.repository.PetRepository;
import main.services.PetService;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class PetServiceImpl implements PetService {


    @Autowired
    private PetRepository petRepository;

    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private PetMapper petMapper;

    @Override
    public List<Pet> findAllPets() throws Exception {
        try {
            return petRepository.findAll();
        } catch (Exception e) {
            throw new Exception("No pets found");
        }
    }

    @Override
    public Pet findPetById(Long id) {
        return petRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Pet not found"));
    }


    @Override
    public Pet savePet(Long ownerId, Pet pet) throws Exception {
        try {
            Owner owner = ownerRepository.findById(ownerId).orElse(null);
            if (owner != null) {
                pet.setOwner(owner);
                return petRepository.save(pet);
            }
            else
                return null;

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Pet updatePet(Long id, Pet petRequest) throws Exception {
        try {
            Pet existingPet = petRepository.findById(id)
                    .orElseThrow(()-> new EntityNotFoundException("Pet not found"));

            if (existingPet.getName() != null && !existingPet.getName().isEmpty() && !petRequest.getName().equals(existingPet.getName()))
                existingPet.setName(petRequest.getName());

            if (existingPet.getBreed() != null && !existingPet.getBreed().isEmpty() && !petRequest.getBreed().equals(existingPet.getBreed()))
                existingPet.setBreed(petRequest.getBreed());

            if (existingPet.getAge() != null  && !Objects.equals(petRequest.getAge(), existingPet.getAge()))
                existingPet.setAge(petRequest.getAge());

            if (existingPet.getPhoto() != null && !existingPet.getPhoto().isEmpty() && !petRequest.getPhoto().equals(existingPet.getPhoto()))
                existingPet.setPhoto(petRequest.getPhoto());

            if (existingPet.getHealthStatus() != null && !existingPet.getHealthStatus().isEmpty() && !petRequest.getHealthStatus().equals(existingPet.getHealthStatus()))
                existingPet.setHealthStatus(petRequest.getHealthStatus());

            if (existingPet.getLocation() != null && !existingPet.getLocation().isEmpty() && !petRequest.getLocation().equals(existingPet.getLocation()))
                existingPet.setLocation(petRequest.getLocation());

            if (existingPet.getVaccinated() != null && !petRequest.getVaccinated().equals(existingPet.getVaccinated()))
                existingPet.setVaccinated(petRequest.getVaccinated());

            if (existingPet.getSterilized() != null && !petRequest.getSterilized().equals(existingPet.getSterilized()))
                existingPet.setSterilized(petRequest.getSterilized());

            if (existingPet.getGeneralDescription() != null && !existingPet.getGeneralDescription().isEmpty() && !petRequest.getBreed().equals(existingPet.getGeneralDescription()))
                existingPet.setGeneralDescription(petRequest.getGeneralDescription());

            return existingPet;
        } catch (Exception e) {
            throw new ServiceException("Error occurred while updating pet with id: ".concat(id.toString()), e);
        }
    }

    @Override
    public void deletePet(Long id) throws Exception {

    }


}
