package main.service.impl;

import lombok.RequiredArgsConstructor;
import main.model.entity.User;
import main.model.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }

    public void updateUser(Long id, User userRequest) throws Exception{
        Optional<User> userOptional = userRepository.findById(id);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));

        user.setEmail(userRequest.getEmail());
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setAddress(userRequest.getAddress());
        user.setPhone(userRequest.getPhone());
        user.setDni(userRequest.getDni());

        userRepository.save(user);
    }

    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

}
