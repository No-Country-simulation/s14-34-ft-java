package main.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pets")
public class Pet {
    @Id
    @Column(name = "pet_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petId;
    private String name;


    private String breed;
    private String colour;
    private Integer age;
    private String size;
    private String behaviour;
    private String healthStatus;
    private String location;
    private Boolean vaccinated;
    private Boolean sterilized;
    private String generalDescription;

}
