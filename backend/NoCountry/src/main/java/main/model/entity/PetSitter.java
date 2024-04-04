package main.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "petsitters")
public class PetSitter {
    @Id
    @Column(name = "pet_sitter_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petSitterId;

    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private int phone;
    private int dni;
}
