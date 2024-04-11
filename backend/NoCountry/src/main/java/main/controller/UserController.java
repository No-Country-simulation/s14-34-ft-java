package main.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.model.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import main.service.impl.UserService;

import java.util.List;

@Controller
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(value = "save")
    public ResponseEntity<String> saveUser(@RequestBody @Valid User user) {
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully");
    }

    @PutMapping(value = "update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user) {
        try {
            userService.updateUser(id, user);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
    }

    @GetMapping(value = "getAllUsers")
    public ResponseEntity<List<User>> getAll() throws Exception{
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
