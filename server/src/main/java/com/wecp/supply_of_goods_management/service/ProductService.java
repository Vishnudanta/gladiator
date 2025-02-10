package com.wecp.supply_of_goods_management.service;


import com.wecp.supply_of_goods_management.entity.Product;
import com.wecp.supply_of_goods_management.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Create Product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Update Product
    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setStockQuantity(productDetails.getStockQuantity());
        product.setManufacturerId(productDetails.getManufacturerId());

        return productRepository.save(product);
    }

    // Get All Products by Manufacturer
    public List<Product> getProductsByManufacturerId(Long manufacturerId) {
        return productRepository.findByManufacturerId(manufacturerId);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
