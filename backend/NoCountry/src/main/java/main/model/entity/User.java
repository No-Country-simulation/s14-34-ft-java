package main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.print.attribute.standard.MediaSize;

@Entity
@Table(name = "users")
@Getter
@Setter
@RequiredArgsConstructor
public class User {
    @Id
    @Column(name = "user_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;


    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "dni")
    private String dni;
}
