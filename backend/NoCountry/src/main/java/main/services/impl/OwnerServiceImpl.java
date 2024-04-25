package main.services.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import main.models.Owner;
import main.models.User;
import main.repository.OwnerRepository;
import main.repository.UserRepository;
import main.services.IOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OwnerServiceImpl implements IOwnerService {
    @Autowired
    private OwnerRepository ownerRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Owner> getAllOwners() throws Exception {
        try {
            return ownerRepository.findAll();
        } catch (Exception e) {
            throw new Exception("Error al obtener todos los propietarios: " + e.getMessage());
        }
    }

    @Override
    public Owner getOwnerById(Long userId) throws IllegalArgumentException {
        try {
            Long id = ownerRepository.findOwnerIdByUserId(userId);
            return ownerRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Propietario no encontrado"));
        } catch (Exception e) {
            throw new IllegalArgumentException("Error al obtener el propietario por ID: " + e.getMessage());
        }
    }

    @Override
    public Owner saveOwner(Long userId, Owner owner) throws Exception {
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new EntityNotFoundException("User not found"));

            owner.setUser(user);
            owner.setEmail(user.getEmail());
            owner.setFirstName(user.getFirstName());
            owner.setLastName(user.getLastName());
            owner.setPhone(user.getPhone());
            return ownerRepository.save(owner);
        } catch (Exception e) {
            throw new Exception("Error al guardar el propietario: " + e.getMessage());
        }
    }

    @Override
    public Owner updateOwner(Long userId, Owner updatedOwner) throws Exception {
        try {
            Long ownerId = ownerRepository.findOwnerIdByUserId(userId);

            Owner existingOwner = ownerRepository.findById(ownerId)
                    .orElseThrow(() -> new IllegalArgumentException("Propietario no encontrado"));
            existingOwner.setFirstName(updatedOwner.getFirstName());
            existingOwner.setLastName(updatedOwner.getLastName());
            existingOwner.setPhoto(updatedOwner.getPhoto());
            existingOwner.setPhone(updatedOwner.getPhone());
            existingOwner.setAddress(updatedOwner.getAddress());
            existingOwner.setLocation(updatedOwner.getLocation());
            existingOwner.setProvince(updatedOwner.getProvince());
            existingOwner.setPostalCode(updatedOwner.getPostalCode());
            existingOwner.setDni(updatedOwner.getDni());
            return existingOwner;
        } catch (Exception e) {
            throw new Exception("Error al actualizar el propietario: " + e.getMessage());
        }
    }

    @Override
    public void deleteOwner(Long id) throws Exception {
        try {
            ownerRepository.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Error al eliminar el propietario: " + e.getMessage());
        }
    }
}
