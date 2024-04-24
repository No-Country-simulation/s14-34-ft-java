package main.models;

import com.fasterxml.jackson.annotation.*;
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

    @NotNull
    @Size(max = 50)
    @Column(name = "email")
    private String email;


    @Column(name = "photo_url")
    @NotNull
    private String photo;

    @NotNull
    @Size(max = 50)
    @Column(name = "phone")
    private String phone;

    @Size(max = 90)
    @Column(name = "address")
    private String address;

    @Size(max = 80)
    @Column(name = "location")
    private String location;

    @Size(max = 80)
    @Column(name = "province")
    private String province;

    @Size(max = 20)
    @Column(name = "postal_code")
    private String postalCode;

    @Size(max = 20)
    @Column(name = "dni")
    private String dni;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<Pet> pets = new ArrayList<>();

}