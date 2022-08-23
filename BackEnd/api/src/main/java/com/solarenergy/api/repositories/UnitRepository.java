package com.solarenergy.api.repositories;

import com.solarenergy.api.models.Unity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UnitRepository extends JpaRepository<Unity, UUID> {
}
