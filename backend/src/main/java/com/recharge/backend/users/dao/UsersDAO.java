package com.recharge.backend.users.dao;

import com.recharge.backend.users.vo.UsersVO;

public interface UsersDAO {

    int countUserId(String userId);

    int countUserEmail(String userEmail);

    void insertUser(UsersVO user);

    UsersVO findUserById(String userId);

    UsersVO selectUserByNameAndEmail(String name, String email);
}
