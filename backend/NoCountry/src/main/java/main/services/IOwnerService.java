package main.services;

import main.models.Owner;

import java.util.List;

public interface IOwnerService {

    public List<Owner> getAllOwners();

    public Owner getOwnerById(Long id);

    public Owner saveOwner(Owner owner);

    public Owner updateOwner(Long id, Owner updatedOwner);
}
