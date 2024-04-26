package main.repository;

import main.models.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OwnerRepository extends JpaRepository<Owner, Long> {


    @Query("SELECT o.id FROM Owner o WHERE o.user.user_id = :userId")
    Long findOwnerIdByUserId(@Param("userId") Long userId);
}

