package com.wecp.supply_of_goods_management.repository;


import com.wecp.supply_of_goods_management.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByManufacturerId(Long manufacturerId);
}
