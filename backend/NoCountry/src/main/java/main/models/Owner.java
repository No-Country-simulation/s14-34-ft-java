package main.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "owners")
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 50)
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Size(max = 50)
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "photo_url")
    @NotNull
    private String photo;

    @NotNull
    @Size(max = 50)
    @Column(name = "phone")
    private String phone;

    @NotNull
    @Size(max = 90)
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
    @Column(name = "postal_code")
    private String postalCode;

    @NotNull
    @Size(max = 20)
    @Column(name = "dni")
    private String dni;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Pet> pets = new ArrayList<>();

}