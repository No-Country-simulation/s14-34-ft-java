package main.controllers;

import lombok.RequiredArgsConstructor;
import main.models.PetSitter;
import main.services.impl.PetSitterServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/petSitters")
@RequiredArgsConstructor
public class PetSitterController {


    private final PetSitterServiceImpl petSitterServiceImpl;


    /**
     * Endpoint para obtener todos los registros
     **/
    @GetMapping(path = "/all")
    public List<PetSitter> findAll() {
        return petSitterServiceImpl.getAllPetSitters();

    }

    /**
     * Endpoint para crear un registro
     **/
    @PostMapping(path = "/save")
    public ResponseEntity<Object> savePetSitters(@RequestBody PetSitter petSitter) {
        return petSitterServiceImpl.savePetSitters(petSitter);
    }

    /**
     * Endpoint para obtener un registro por su id
     **/
    @GetMapping(path = "/{id}")
    public Optional<PetSitter> getById(@PathVariable("id") Long idPetSitter) {
        return this.petSitterServiceImpl.findById(idPetSitter);
    }


    /**
     * Endpoint para eliminar un registro por su id
     **/

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long idPetsitter) {
        try {
            petSitterServiceImpl.deletePetSittersById(idPetsitter);
            return ResponseEntity.status(HttpStatus.FOUND).body(idPetsitter);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    /**
     * Endpoint para actualizar un registro
     **/

    @PutMapping(path = "/{id}")
    public void updatePetSitter(@PathVariable("id") Long idPetSitter,
                                @RequestParam String firstName,
                                @RequestParam String lastName,
                                @RequestParam String phone,
                                @RequestParam String address,
                                @RequestParam String location,
                                @RequestParam String province,
                                @RequestParam String postalCode,
                                @RequestParam String dni,
                                @RequestParam String email,
                                @RequestParam String photo

    ) {
        petSitterServiceImpl.updatePetSitter(idPetSitter,
                firstName,
                lastName,
                phone,
                address,
                location,
                province,
                postalCode,
                dni,
                email,
                photo);

    }


}

