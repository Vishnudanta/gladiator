package com.wecp.supply_of_goods_management.repository;


import com.wecp.supply_of_goods_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods if needed
    User findByUsername(String username);
}
