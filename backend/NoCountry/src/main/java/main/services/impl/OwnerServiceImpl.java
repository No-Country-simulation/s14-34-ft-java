package main.services.impl;

import main.models.Owner;
import main.repository.OwnerRepository;
import main.services.IOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerServiceImpl implements IOwnerService {
    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner getOwnerById(Long id) {
        return ownerRepository.getReferenceById(id);
    }

    @Override
    public Owner saveOwner(Owner owner) {
        return null;
    }

    @Override
    public Owner updateOwner(Long id, Owner updatedOwner) {
        Owner existingOwner = ownerRepository.getReferenceById(id);
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
            return ownerRepository.save(existingOwner);
        }
        return null;
    }

    public Owner deleteOwner(Long id) {
        ownerRepository.delete(deleteOwner(id));
        return null;
    }
}
