package main.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "petsitters")
public class PetSitter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "petSitter_id")
    private Long petSitterId;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    @JsonIgnore
    private Booking booking;

//    private String firstName;
//    private String lastName;
//    private String address;
//    private String email;
//    private int phone;
//    private int dni;
}
