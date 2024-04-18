package main.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.*;
import main.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
public class User implements UserDetails {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name = "user_name", length = 20)
    @JsonIgnore
    private String username;

    @Column(name = "password", length = 100)
    private String password;

    @Getter
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "first_name", length = 50)
    private String first_name;

    @Column(name = "last_name", length = 50)
    private String last_name;

    @Column(name = "address", length = 150)
    @JsonIgnore
    private String address;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "dni", length = 10)
    @JsonIgnore
    private String dni;

    @Column(name = "photo")
    @JsonIgnore
    private String photo;

    @Column(name = "rol", columnDefinition = "varchar(10) default 'OWNER'")
    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private Role role;

    @Column(name = "created_at", columnDefinition = "timestamp")
    @JsonIgnore
    private Timestamp created_at;

    @Column(name = "last_login", columnDefinition = "timestamp")
    @JsonIgnore
    private Timestamp last_login;

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    @JsonIgnore
    public String getUsername() {
        return username;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

}
