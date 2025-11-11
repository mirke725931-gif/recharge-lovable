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

    @Override
    public UsersVO findUserByIdNameEmail(String id, String name, String email){
        System.out.println("🔍 입력값 확인 → id: [" + id + "], name: [" + name + "], email: [" + email + "]");
        return usersDAO.selectUserByIdNameEmail(id, name, email);
    }

    @Override
    public void saveResetToken(String userId, String token) {
        usersDAO.saveResetToken(userId, token);
    }

    @Override
    public UsersVO findUserByResetToken(String token){
        return usersDAO.findUserByResetToken(token);
    }

    @Override
    public void updatePasswordByToken(String token, String pwd){
        UsersVO user = usersDAO.findUserByResetToken(token);
        if(user==null) return;

        String encrypted=passwordEncoder.encode(pwd);
        usersDAO.updatePasswordByToken(token, encrypted, user.getUserId());
    }
}