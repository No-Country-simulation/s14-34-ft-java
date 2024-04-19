package main.repository;

import main.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query("SELECT b FROM Booking b WHERE b.petSitter.idPetSitter = :idPetSitter AND ((b.startDate BETWEEN :startDate AND :endDate) OR (b.endDate BETWEEN :startDate AND :endDate))")
    List<Booking> findConflictingBookings(Long idPetSitter, Date startDate, Date endDate);
}
