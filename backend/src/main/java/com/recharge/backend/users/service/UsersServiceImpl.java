package com.recharge.backend.users.service;

import com.recharge.backend.users.dao.UsersDAO;
import com.recharge.backend.users.service.UsersService;
import com.recharge.backend.users.vo.UsersVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersDAO usersDAO;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public void registerUser(UsersVO user) {

        String encodedPwd = passwordEncoder.encode(user.getUserPwd());
        user.setUserPwd(encodedPwd);

        usersDAO.insertUser(user);
    }

    @Override
    public boolean isUserIdDuplicate(String userId) {
        return usersDAO.countUserId(userId) > 0;
    }

    @Override
    public boolean isUserEmailDuplicate(String userEmail) {
        return usersDAO.countUserEmail(userEmail) > 0;
    }

    @Override
    public UsersVO login(String userId, String userPwd) {
        UsersVO user = usersDAO.findUserById(userId);
        if (user != null && passwordEncoder.matches(userPwd, user.getUserPwd())) {
            return user;
        }
        return null;
    }

    @Override
    public UsersVO findUserByNameAndEmail(String name, String email){
        return usersDAO.selectUserByNameAndEmail(name,email);
    }
}