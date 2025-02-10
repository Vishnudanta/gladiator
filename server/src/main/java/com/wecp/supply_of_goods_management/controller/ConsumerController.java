package com.wecp.supply_of_goods_management.controller;


import com.wecp.supply_of_goods_management.entity.Feedback;
import com.wecp.supply_of_goods_management.entity.Order;
import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.service.FeedbackService;
import com.wecp.supply_of_goods_management.service.OrderService;
import com.wecp.supply_of_goods_management.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ConsumerController {

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private FeedbackService feedbackService;

    // Browse Products
    @GetMapping("/api/consumers/products")
    public ResponseEntity<List<Product>> browseProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    // Place Order
    @PostMapping("/api/consumers/order")
    public ResponseEntity<Order> placeOrder(@RequestParam Long productId, @RequestParam Long userId, @RequestBody Order order) {
        Order placedOrder = orderService.placeOrder(productId, userId, order);
        return ResponseEntity.ok(placedOrder);
    }

    // Get All Orders
    @GetMapping("/api/consumers/orders")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam Long userId) {
        List<Order> orders = orderService.getAllOrders(userId);
        return ResponseEntity.ok(orders);
    }

    // Provide Feedback
    @PostMapping("/api/consumers/order/{orderId}/feedback")
    public ResponseEntity<Feedback> provideFeedback(@PathVariable Long orderId, @RequestParam Long userId, @RequestBody Feedback feedback) {
        Feedback providedFeedback = feedbackService.provideFeedback(orderId, userId, feedback);
        return ResponseEntity.ok(providedFeedback);
    }
}
