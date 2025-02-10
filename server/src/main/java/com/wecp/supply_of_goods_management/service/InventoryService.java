package com.wecp.supply_of_goods_management.service;



import com.wecp.supply_of_goods_management.entity.Inventory;
import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.repository.InventoryRepository;
import com.wecp.supply_of_goods_management.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private ProductRepository productRepository;

    // Add Inventory
    public Inventory addInventory(Long productId, Inventory inventory) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));
        inventory.setProduct(product);
        return inventoryRepository.save(inventory);
    }

    // Update Inventory
    public Inventory updateInventory(Long id, int stockQuantity) {
        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));
        inventory.setStockQuantity(stockQuantity);
        return inventoryRepository.save(inventory);
    }

    // Get All Inventories
    public List<Inventory> getAllInventories(Long wholesalerId) {
        return inventoryRepository.findByWholesalerId(wholesalerId);
    }
}
