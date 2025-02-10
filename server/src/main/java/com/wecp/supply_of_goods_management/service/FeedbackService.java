package com.wecp.supply_of_goods_management.service;

import com.wecp.supply_of_goods_management.entity.Feedback;
import com.wecp.supply_of_goods_management.entity.Order;
import com.wecp.supply_of_goods_management.entity.User;
import com.wecp.supply_of_goods_management.repository.FeedbackRepository;
import com.wecp.supply_of_goods_management.repository.OrderRepository;
import com.wecp.supply_of_goods_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;


    public Feedback provideFeedback(Long orderId, Long userId, Feedback feedback) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found with id " + orderId));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id " + userId));
        feedback.setOrder(order);
        feedback.setUser(user);
        return feedbackRepository.save(feedback);
    }
}
