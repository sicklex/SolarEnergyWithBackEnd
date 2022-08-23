package com.solarenergy.api.services;

import com.solarenergy.api.models.Unity;
import com.solarenergy.api.repositories.UnitRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class UnityService implements IUnityService {

    final UnitRepository unitRepository;

    public UnityService(UnitRepository unitRepository) {
        this.unitRepository = unitRepository;
    }
    @Override
    public Unity CreateUnity(Unity unity) {
        return unitRepository.save(unity);
    }

    @Override
    public List<Unity> getAllUnits() {
        return unitRepository.findAll();
    }

    @Override
    public Optional<Unity> getUnityById(UUID id) {
        return unitRepository.findById(id);
    }
    @Override
    public void deleteUnityById(UUID id) {
        Unity unity = unitRepository.getReferenceById(id);
        unitRepository.delete(unity);
    }
}
