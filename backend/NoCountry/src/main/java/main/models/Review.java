package main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    @Column(name = "desc_pet_sitter")
    private String descPetSitter;

    @Column(name = "valoration")
    private int valoration;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

    //@ManyToOne
    //@JoinColumn(name = "pet_sitter_id")
    //private PetSitter petSitter;

    // Constructor, getters y setters
}

