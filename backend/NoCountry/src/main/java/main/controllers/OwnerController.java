package main.controllers;

import main.model.Owner;
import main.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/owners")
public class OwnerController {

    private final OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping("/all")
    public List<Owner> getAllOwners() {
        return ownerService.getAllOwners();
    }

    @GetMapping("/{id}")
    public Owner getOwnerById(@PathVariable Long id) {
        return ownerService.getOwnerById(id);
    }

    @PostMapping("/save")
    public Owner saveOwner(@RequestBody Owner owner) {
        return ownerService.saveOwner(owner);
    }

    @PutMapping("/update/{id}")
    public Owner updateOwner(@PathVariable Long id, @RequestBody Owner updatedOwner) {
        Owner existingOwner = ownerService.getOwnerById(id);
        if (existingOwner != null) {
            existingOwner.setFirstName(updatedOwner.getFirstName());
            existingOwner.setLastName(updatedOwner.getLastName());
            existingOwner.setPhoto(updatedOwner.getPhoto());
            existingOwner.setPhone(updatedOwner.getPhone());
            existingOwner.setAddress(updatedOwner.getAddress());
            existingOwner.setLocation(updatedOwner.getLocation());
            existingOwner.setProvince(updatedOwner.getProvince());
            existingOwner.setPostalCode(updatedOwner.getPostalCode());
            existingOwner.setDni(updatedOwner.getDni());
            return ownerService.saveOwner(existingOwner);
        }
        return null;
    }

    @DeleteMapping("/delete")
    public void deleteOwner(@PathVariable Long id) {
        ownerService.deleteOwner(id);
    }
}

