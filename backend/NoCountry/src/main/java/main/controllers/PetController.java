package main.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.models.Pet;
import main.services.PetService;
import main.services.impl.PetServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/pet")
public class PetController {

    private final PetServiceImpl petService;


    @PostMapping(consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> save(@Valid @RequestBody Pet pet){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(petService.savePet(pet));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Can't add pet");
        }
}

    @GetMapping(value = "/all",produces = "application/json")
    public ResponseEntity<?> getAllPets() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(petService.findAllPets());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("There are no pets");
        }
    }

    @GetMapping(value = "/{id}",produces = "application/json")
    public ResponseEntity<?> getPetById(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(petService.findPetById(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Pet not found");
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable Long id, @RequestBody Pet pet) throws Exception {
        Pet petResponse = petService.updatePet(id,pet);
        return ResponseEntity.ok(petResponse);

    }



}

