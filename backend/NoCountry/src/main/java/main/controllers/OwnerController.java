package main.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.auth.service.JwtService;
import main.models.Owner;
import main.models.Pet;
import main.services.impl.OwnerServiceImpl;
import main.services.impl.UserServiceImpl;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/owner")
public class OwnerController {

    private final OwnerServiceImpl ownerService;
    private final JwtService jwtService;

    @GetMapping(value ="/all",produces = "application/json")
    public ResponseEntity<?> getAllOwners() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(ownerService.getAllOwners());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("There are no owners");
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestHeader("token") String token, @Valid @RequestBody Owner owner){
        try {
            Long userId = jwtService.getUserIdFromToken(token);
            return ResponseEntity.status(HttpStatus.OK).body(ownerService.saveOwner(userId,owner));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Can't add owner");
        }
    }

    @GetMapping(value = "/{id}",produces = "application/json")
    public ResponseEntity<?> getOwnerById(@PathVariable Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(ownerService.getOwnerById(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Owner not found");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Owner> updateOwner(@PathVariable Long id, @RequestBody Owner owner) throws Exception {
        Owner ownerResponse = ownerService.updateOwner(id,owner);
        return ResponseEntity.ok(ownerResponse);

    }

    @DeleteMapping(value = "/delete/{id}", produces = "application/json")
    public ResponseEntity<?> deleteOwner(@PathVariable Long id) {
        try {
            ownerService.deleteOwner(id);
            // Si se elimina correctamente, devolver un mensaje de éxito
            return ResponseEntity.status(HttpStatus.OK).body("Owner deleted successfully");
        } catch (Exception e) {
            // Manejar cualquier excepción interna y devolver un error 500
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }
}

