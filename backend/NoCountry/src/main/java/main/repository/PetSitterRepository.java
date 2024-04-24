package main.repository;

import main.models.PetSitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PetSitterRepository extends JpaRepository<PetSitter,Long> {



}
