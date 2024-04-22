package main.controllers;

import main.controllers.exceptions.PetSitterNotFoundException;
import main.models.Booking;
import main.models.PetSitter;
import main.services.BookingService;
import main.services.IPetSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    private final BookingService bookingService;
    private final IPetSitterService iPetSitterService;

    @Autowired
    public BookingController(BookingService bookingService, IPetSitterService iPetSitterService){
        this.bookingService = bookingService;
        this.iPetSitterService = iPetSitterService;
    }


    @PostMapping("/reserve")
    public Booking reservePetSitter(@RequestParam Long idPetSitter, @RequestBody Booking booking) {
        PetSitter petSitter = iPetSitterService.findById(idPetSitter).orElse(null);

        if (petSitter != null) {
            booking.setPetSitter(petSitter);
            return bookingService.reservePetSitter(booking);
        } else {
            throw new PetSitterNotFoundException("PetSitter with ID " + idPetSitter + " not found.");
        }

    }

    @DeleteMapping("/cancel/{bookingId}")
    public void cancelBooking(@PathVariable Long bookingId) {
        bookingService.cancelBooking(bookingId);
    }

    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
}
