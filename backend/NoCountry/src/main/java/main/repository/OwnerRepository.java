package main.repository;

import main.models.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
    // Puedes agregar métodos personalizados de consulta si es necesario

    @Query(value = "select id from owners where user_id = ?1",nativeQuery = true)
    Long findOwnerIdByUserId(Long userId);
}

