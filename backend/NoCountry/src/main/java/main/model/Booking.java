package main.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import main.enums.TypeOfPet;
import main.enums.TypeOfService;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "pet_sitter_id")
    private PetSitter petSitter;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @Column(name = "phone", length = 50)
    private String phone;

    @Getter
    @Setter
    @Column(name = "booking")
    private Boolean booking = false;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "pet_quantity")
    private String petQuantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_pet")
    private TypeOfPet typeOfPet;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_service")
    private TypeOfService typeOfService;

}
