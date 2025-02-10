package com.wecp.supply_of_goods_management.repository;



import com.wecp.supply_of_goods_management.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByWholesalerId(Long wholesalerId);
    List<Inventory> findByProductId(Long productId);
}
