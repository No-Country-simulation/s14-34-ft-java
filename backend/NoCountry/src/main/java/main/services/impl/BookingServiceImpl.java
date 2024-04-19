package main.services.impl;

import main.models.Booking;
import main.repository.BookingRepository;
import main.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

//    @Override
//    public Booking createBooking(Booking booking) {
//        //Validate that the foreign keys petSitterId and ownerId are provided.
//        if (booking.getPetSitterId() == null || booking.getOwnerId() == null) {
//            throw new IllegalArgumentException("petSitterId and ownerId are required.");
//        }
//
//        //Save the booking in the database
//        return bookingRepository.save(booking);
//    }

    @Override
    public Booking reservePetSitter(Booking booking) {
        //Check pet sitter availability
        boolean isAvailable = isPetSitterAvailable(booking.getPetSitter().getPetSitterId(), booking.getStartDate(), booking.getEndDate());
        if (!isAvailable) {
            throw new IllegalStateException("The pet sitter is not available on the selected dates.");
        }

        //Verify type of service and type of pets
        if (booking.getTypeOfService() == null || booking.getTypeOfPet() == null) {
            throw new IllegalArgumentException("The type of service and type of pets are mandatory.");
        }

        // Save the booking in the database
        return bookingRepository.save(booking);

    }

    @Override
    public void cancelBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    private boolean isPetSitterAvailable(Long petSitterId, Date startDate, Date endDate) {
        // Check for existing bookings that overlap with the specified dates
        List<Booking> conflictingBookings = bookingRepository.findConflictingBookings(petSitterId, startDate, endDate);

        // Check for overlapping bookings
        if (conflictingBookings.isEmpty()) {
            //Pet sitter is available
            return true;
        } else {
            //Pet sitter not available
            return false;
        }

    }

}
