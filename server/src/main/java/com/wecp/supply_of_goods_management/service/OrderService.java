package com.wecp.supply_of_goods_management.service;



import com.wecp.supply_of_goods_management.entity.Order;
import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.entity.User;
import com.wecp.supply_of_goods_management.repository.OrderRepository;
import com.wecp.supply_of_goods_management.repository.ProductRepository;
import com.wecp.supply_of_goods_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    // Place Order
    public Order placeOrder(Long productId, Long userId, Order order) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found with id " + productId));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found with id " + userId));
        order.setProduct(product);
        order.setUser(user);
        return orderRepository.save(order);
    }
    // Update Order
    public Order updateOrder(Long id, String status) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setStatus(status);
            return orderRepository.save(order);
        } else {
            throw new RuntimeException("Order not found with id " + id);
        }
    }

    public List<Order> getAllOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public Order getOrderById(Long id) {
       Optional<Order> order = orderRepository.findById(id);
       if(order.isPresent()) {
           return order.get();
       } else {
           throw new RuntimeException("Order not found with id " + id);
       }
    }
}
