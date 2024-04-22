package main.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import main.enums.TypeOfService;
import main.enums.TypeOfPet;


import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long bookingId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pet_sitter_id")
    //@JsonIgnore
    private PetSitter petSitter;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    @JsonIgnore
    private Owner owner;

    @ManyToOne
    @JoinColumn(name = "review_id")
    @JsonIgnore
    private Review review;

    @Column(name = "phone", length = 50)
    @JsonIgnore
    private String phone;

    @Column(name = "booking")
    @JsonIgnore
    private boolean booking = false;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "price", precision = 10, scale = 2)
    @JsonIgnore
    private BigDecimal price;

    @Column(name = "pet_quantity")
    //@JsonIgnore
    private String petQuantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_pet")
    private TypeOfPet typeOfPet;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_service")
    private TypeOfService typeOfService;


}
