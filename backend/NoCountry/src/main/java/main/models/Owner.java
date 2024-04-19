package main.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "owners")
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long clientId;

    @NotNull
    @Size(max = 50)
    @Column(name = "firstName")
    private String firstName;

    @NotNull
    @Size(max = 50)
    @Column(name = "lastName")
    private String lastName;

    @Column(name = "photo_url")
    @NotNull
    private String photo;

    @NotNull
    @Size(max = 50)
    @Column(name = "phone")
    private int phone;

    @NotNull
    @Size(max = 80)
    @Column(name = "address")
    private String address;

    @NotNull
    @Size(max = 80)
    @Column(name = "location")
    private String location;

    @NotNull
    @Size(max = 80)
    @Column(name = "province")
    private String province;

    @NotNull
    @Size(max = 20)
    @Column(name = "postalCode")
    private int postalCode;

    @NotNull
    @Size(max = 20)
    @Column(name = "dni")
    private int dni;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}

