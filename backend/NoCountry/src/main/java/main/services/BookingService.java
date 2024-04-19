package main.services;

import main.models.Booking;

import java.util.List;


public interface BookingService {

    Booking reservePetSitter(Booking booking);

    void cancelBooking(Long bookingId);

    List<Booking> getAllBookings();

//    Booking createBooking(Booking booking);
}
