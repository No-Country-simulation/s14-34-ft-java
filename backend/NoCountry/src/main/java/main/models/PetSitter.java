package main.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "PET_SITTERS")
public class PetSitter {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPetSitter;

    @Column(name = "fist_name", length = 50, nullable = false)
    private String firstName;
    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;
    @Column(name = "phone", length = 50, nullable = false, unique = true)
    private String phone;
    @Column(name = "address", length = 50, nullable = false, unique = true)
    private String address;
    @Column(name = "location", length = 50, nullable = false)
    private String location;
    @Column(name = "province", length = 50, nullable = false)
    private String province;
    @Column(name = "postalcode", length = 50, nullable = false)
    private String postalCode;
    @Column(name = "dni", length = 20, nullable = false, unique = true)
    private String dni;
    @Column(name = "email", length = 50, nullable = false, unique = true)
    private String email;
    @Column(name = "photo_url", length = 20, nullable = false, unique = true)
    private String photo;
    @Column(name = "available")
    private Boolean available = true;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_service")
    private Service service;

    @OneToMany(mappedBy = "petSitter", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Booking> bookings;


}
