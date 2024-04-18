package main.auth.service;

import main.auth.request.LoginRequest;
import main.auth.request.RegisterRequest;
import main.auth.response.AuthResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import main.enums.Role;
import main.model.User;
import main.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("Email not found"));
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }


    public AuthResponse register(RegisterRequest registerRequest) {
        // Obtener la fecha actual
        Date currentDate = new Date();
        Timestamp currentTimestamp = new Timestamp(currentDate.getTime());

        User user = User.builder()
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .first_name(registerRequest.getFirst_name())
                .last_name(registerRequest.getLast_name())
                .phone(registerRequest.getPhone())
                .role(Role.OWNER) // Por defecto los nuevos usuarios tendrán el rol OWNER.
                .created_at(currentTimestamp) // Establecer la fecha de creación
                .build();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}