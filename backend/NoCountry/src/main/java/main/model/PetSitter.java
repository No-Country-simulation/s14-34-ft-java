package main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PetSitter {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long petSitterId;

        private String firstName;
        private String lastName;
        private String address;
        private String email;
        private int phone;
        private int dni;

}
