package main.services;

import main.models.Owner;

import java.util.List;

public interface IOwnerService {

    List<Owner> getAllOwners() throws Exception;
    Owner getOwnerById(Long id) throws Exception;
    Owner saveOwner(Owner owner) throws Exception;
    Owner updateOwner(Long id, Owner updatedOwner) throws Exception;
    void deleteOwner(Long id) throws Exception;
}
