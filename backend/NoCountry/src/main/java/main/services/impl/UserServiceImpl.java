package main.services.impl;

import lombok.RequiredArgsConstructor;
import main.models.User;
import main.repository.UserRepository;
import main.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

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

    public User getUserById(Long user_id) throws Exception{
        User user = userRepository.findById(user_id).orElseThrow(() -> new Exception("User not found"));
        return user;
    }

}
