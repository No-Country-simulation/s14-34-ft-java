package main.service.impl;

import lombok.RequiredArgsConstructor;
import main.model.entity.User;
import main.model.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void saveUser(User user){
        userRepository.save(user);
    }

}
