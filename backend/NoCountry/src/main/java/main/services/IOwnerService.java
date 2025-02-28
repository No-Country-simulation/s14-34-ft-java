package main.services;

import main.models.Owner;

import java.util.List;

public interface IOwnerService {

    List<Owner> getAllOwners() throws Exception;
    Owner getOwnerById(Long userId) throws Exception;
    Owner saveOwner(Long userId, Owner owner) throws Exception;
    Owner updateOwner(Long userId, Owner updatedOwner) throws Exception;
    void deleteOwner(Long id) throws Exception;
}
