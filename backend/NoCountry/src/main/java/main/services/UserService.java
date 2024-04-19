package main.services;

import main.models.User;

import java.util.List;

public interface UserService {

    public void saveUser(User user);

    public void updateUser(Long id, User userRequest) throws Exception;

    public List<User> getAllUsers();


}
