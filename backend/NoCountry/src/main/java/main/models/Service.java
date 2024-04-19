package main.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import main.enums.TypeOfService;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "Service_tbl")

public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idService;

    @Column(name = "type_of_service", nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeOfService typeOfService;


}
