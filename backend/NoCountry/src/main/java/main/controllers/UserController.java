package main.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import main.service.impl.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userServiceImpl;

    @PostMapping(value = "save")
    public ResponseEntity<String> saveUser(@RequestBody @Valid User user) {
        userServiceImpl.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully");
    }

    @PutMapping(value = "update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user) {
        try {
            userServiceImpl.updateUser(id, user);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
    }

    @GetMapping(value = "getAllUsers")
    public ResponseEntity<List<User>> getAll() throws Exception{
        return ResponseEntity.ok(userServiceImpl.getAllUsers());
    }
}
