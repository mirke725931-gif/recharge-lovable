package com.recharge.backend.users.service;

import com.recharge.backend.users.vo.UsersVO;

public interface UsersService {

    boolean isUserIdDuplicate(String userId);

    boolean isUserEmailDuplicate(String userId);

    void registerUser(UsersVO user);

    UsersVO login(String userId, String userPwd);

    UsersVO findUserByNameAndEmail (String name, String email);
}
