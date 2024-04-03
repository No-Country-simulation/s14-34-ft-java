package main.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import main.model.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import main.service.impl.UserService;

@Controller
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(value = "save")
    public ResponseEntity<String> saveUser( @RequestBody @Valid User user) {
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User saved successfully");
    }

}
