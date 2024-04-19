package main.repository;

import main.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
    // Puedes agregar métodos personalizados de consulta si es necesario
}

