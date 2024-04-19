package main.controllers;

import lombok.RequiredArgsConstructor;
import main.models.Owner;
import main.services.impl.OwnerServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/owners")
public class OwnerController {

    private final OwnerServiceImpl ownerService;

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
        return updatedOwner;
    }

    @DeleteMapping("/delete")
    public void deleteOwner(@PathVariable Long id) {
        ownerService.deleteOwner(id);
    }
}

