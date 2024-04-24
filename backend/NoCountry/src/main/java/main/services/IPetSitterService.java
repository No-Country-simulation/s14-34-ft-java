package main.services;

import jakarta.transaction.Transactional;
import main.dtos.PetSitterDTO;
import main.models.PetSitter;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface IPetSitterService {

    ResponseEntity<Object> savePetSitters(PetSitter petSitter);

    List<PetSitter> getAllPetSitters();

    Optional<PetSitter> findById(Long idPetSitter);

    void deletePetSittersById(Long idPetSitter);

    @Transactional
    void updatePetSitter(Long idPetSitter,
                         String firstName,
                         String lastName,
                         String phone,
                         String address,
                         String location,
                         String province,
                         String postalCode,
                         String dni,
                         String email,
                         String photo);



}



