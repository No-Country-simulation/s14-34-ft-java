package main.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.auth.service.JwtService;
import main.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import main.services.impl.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userServiceImpl;
    private final JwtService jwtService;;

    @PostMapping(value = "save")
    public ResponseEntity<String> saveUser(@RequestBody @Valid User user) {
        userServiceImpl.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully");
    }

    @PutMapping(value = "update/{user_id}")
    public ResponseEntity<String> updateUser(@PathVariable Long user_id, @RequestBody User user) {
        try {
            userServiceImpl.updateUser(user_id, user);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
    }
    @GetMapping(value = "getAllUsers")
    public ResponseEntity<List<User>> getAll() throws Exception{
        return ResponseEntity.ok(userServiceImpl.getAllUsers());
    }

    @GetMapping(value = "getUserById")
    public ResponseEntity<User> getUserById(@RequestHeader("token") String token) throws Exception {
        // Obtener userId del token
        Long user_id = jwtService.getUserIdFromToken(token);

        // Buscar al usuario en la base de datos
        User user = userServiceImpl.getUserById(user_id);

        // Devolver el usuario encontrado como ResponseEntity
        return ResponseEntity.ok(user);
    }
    /*@GetMapping(value = "getUserById/{user_id}")
    public ResponseEntity<User> getUserById(Long user_id) throws Exception{
        return ResponseEntity.ok(userServiceImpl.getUserById(user_id));
    }*/

    /*@PutMapping(value = "updateUserRole/{user_id}")
    public ResponseEntity<Boolean> updateUserRole(@PathVariable Long user_id, @RequestParam String role){
        try{
            userServiceImpl.updateUser(user_id, role);
            return ResponseEntity.ok("User updated successfully");
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
*/
}
