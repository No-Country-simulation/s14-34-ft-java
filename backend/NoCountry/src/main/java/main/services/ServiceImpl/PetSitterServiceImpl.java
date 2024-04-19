package main.services.ServiceImpl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import main.models.PetSitter;
import main.repository.PetSitterRepository;
import main.services.IPetSitterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class PetSitterServiceImpl implements IPetSitterService {

    private final PetSitterRepository petSitterRepository;


    @Override
    public ResponseEntity<Object> savePetSitters(PetSitter petSitter) {
        try {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(petSitterRepository.save(petSitter));

        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND).build();
        }


    }

    @Override
    public List<PetSitter> getAllPetSitters() {
        return petSitterRepository.findAll();
    }


    @Override
    public Optional<PetSitter> findById(Long idPetSitter) {
        return petSitterRepository.findById(idPetSitter);


    }

    @Override
    public void deletePetSittersById(Long idPetSitter) {
        petSitterRepository.deleteById(idPetSitter);

    }

    @Override
    @Transactional
    public void updatePetSitter(Long idPetSitter,
                                String firstName,
                                String lastName,
                                String phone,
                                String address,
                                String location,
                                String province,
                                String postalCode,
                                String dni,
                                String email,
                                String photo

                                ) {
        PetSitter petSitter = petSitterRepository.findById(idPetSitter).orElseThrow(() -> new IllegalStateException
                ("PetSitter with id: " + idPetSitter + " not exist"));

        if (firstName != null && firstName.length() > 0 && !Objects.equals(petSitter.getFirstName(), firstName))
            petSitter.setFirstName(firstName);

        if (lastName != null && lastName.length() > 0 && !Objects.equals(petSitter.getLastName(), lastName))
            petSitter.setFirstName(lastName);

        if (phone != null && phone.length() > 0 && !Objects.equals(petSitter.getPhone(), phone))
            petSitter.setPhone(phone);

        if (address != null && address.length() > 0 && !Objects.equals(petSitter.getAddress(), address))
            petSitter.setAddress(address);

        if (province != null && province.length() > 0 && !Objects.equals(petSitter.getProvince(), province))
            petSitter.setProvince(province);

        if (postalCode != null && postalCode.length() > 0 && !Objects.equals(petSitter.getPostalCode(), postalCode))
            petSitter.setPostalCode(postalCode);

        if (dni != null && dni.length() > 0 && !Objects.equals(petSitter.getDni(), dni))
            petSitter.setDni(dni);

        if (email != null && email.length() > 0 && !Objects.equals(petSitter.getEmail(), email))
            petSitter.setEmail(email);

        if (photo != null && photo.length() > 0 && !Objects.equals(petSitter.getPhoto(), photo))
            petSitter.setPhoto(photo);



    }

}
