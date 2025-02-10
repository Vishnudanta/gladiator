package com.wecp.supply_of_goods_management.controller;

import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ManufacturerController {

    @Autowired
    private ProductService productService;

    // Create Product
    @PostMapping("/api/manufacturers/product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.ok(createdProduct);
    }

    // Update Product
    @PutMapping("/api/manufacturers/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product updatedProduct = productService.updateProduct(id, productDetails);
        return ResponseEntity.ok(updatedProduct);
    }

    // Get All Products
    @GetMapping("/api/manufacturers/products")
    public ResponseEntity<List<Product>> getAllProductsOfManufacturer(@RequestParam Long manufacturerId) {
        List<Product> products = productService.getProductsByManufacturerId(manufacturerId);
        return ResponseEntity.ok(products);
    }
}
