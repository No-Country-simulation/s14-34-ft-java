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
    public List<Owner> getAllOwners() throws Exception {
        return ownerService.getAllOwners();
    }

    @GetMapping("/{id}")
    public Owner getOwnerById(@PathVariable Long id) throws IllegalArgumentException {
        return ownerService.getOwnerById(id);
    }

    @PostMapping("/save")
    public Owner saveOwner(@RequestBody Owner owner) throws Exception {
        return ownerService.saveOwner(owner);
    }

    @PutMapping("/update/{id}")
    public Owner updateOwner(@PathVariable Long id, @RequestBody Owner updatedOwner) throws Exception {
        return ownerService.updateOwner(id, updatedOwner);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteOwner(@PathVariable Long id) throws Exception {
        ownerService.deleteOwner(id);
    }
}

