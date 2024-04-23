package main.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import main.enums.Gender;
import main.enums.PetSize;
import main.enums.TypeOfPet;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pets")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private TypeOfPet typeOfPet;

    @Column(name = "name")
    @NotNull
    @Size(max = 50)
    private String name;

    @Column(name = "breed")
    @NotNull
    @Size(max = 50)
    private String breed;

    @Column(name = "age")
    private Integer age;

    @Column(name = "size")
    @Enumerated(EnumType.STRING)
    private PetSize size;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "photo_url")
    @NotNull
    private String photo;

    @Column(name = "behaviour")
    @Size(max = 50)
    private String behaviour;

    @Column(name = "health_status")
    @NotNull
    @Size(max = 50)
    private String healthStatus;

    @Column(name = "location")
    @NotNull
    @Size(max = 50)
    private String location;

    @Column(name = "vaccinated")
    @NotNull
    private Boolean vaccinated;

    @Column(name = "sterilized")
    @NotNull
    private Boolean sterilized;

    @Column(name = "general_description")
    @NotNull
    @Size(max = 300)
    private String generalDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pet_sitter_id")
    @JsonIgnore
    private PetSitter petSitterId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    @JsonIgnore
    private Owner owner;


}
