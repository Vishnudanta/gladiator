package com.wecp.supply_of_goods_management.repository;


import com.wecp.supply_of_goods_management.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByOrderId(Long orderId);
    List<Feedback> findByUserId(Long userId);
}
