package com.wecp.supply_of_goods_management.controller;


import com.wecp.supply_of_goods_management.entity.Inventory;
import com.wecp.supply_of_goods_management.entity.Order;
import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.service.InventoryService;
import com.wecp.supply_of_goods_management.service.OrderService;
import com.wecp.supply_of_goods_management.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WholesalerController {

    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductService productService;

    @GetMapping("/api/wholesalers/products")
    public ResponseEntity<List<Product>> browseProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @PostMapping("/api/wholesalers/order")
    public ResponseEntity<Order> placeOrder(@RequestParam Long productId, @RequestParam Long userId,
                                            @RequestBody Order order) {
        Order placedOrder = orderService.placeOrder(productId, userId, order);
        return ResponseEntity.ok(placedOrder);
    }

    @PutMapping("/api/wholesalers/order/{id}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        Order updatedOrder = orderService.updateOrder(id, status);
        return ResponseEntity.ok(updatedOrder);
    }

    @GetMapping("/api/wholesalers/orders")
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam Long userId) {
        List<Order> orders = orderService.getAllOrders(userId);
        return ResponseEntity.ok(orders);
    }

    // Add Inventory
    @PostMapping("/api/wholesalers/inventories")
    public ResponseEntity<Inventory> addInventory(@RequestParam Long productId, @RequestBody Inventory inventory) {
        Inventory createdInventory = inventoryService.addInventory(productId, inventory);
        return ResponseEntity.ok(createdInventory);
    }

    // Update Inventory
    @PutMapping("/api/wholesalers/inventories/{id}")
    public ResponseEntity<Inventory> updateInventory(@PathVariable Long id, @RequestParam int stockQuantity) {
        Inventory updatedInventory = inventoryService.updateInventory(id, stockQuantity);
        return ResponseEntity.ok(updatedInventory);
    }

    // Get All Inventories
    @GetMapping("/api/wholesalers/inventories")
    public ResponseEntity<List<Inventory>> getAllInventories(@RequestParam Long wholesalerId) {
        List<Inventory> inventories = inventoryService.getAllInventories(wholesalerId);
        return ResponseEntity.ok(inventories);
    }
}
