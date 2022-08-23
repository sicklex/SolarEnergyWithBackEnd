package com.solarenergy.api.services;

import com.solarenergy.api.models.Unity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IUnityService {
    public Unity CreateUnity(Unity unity);
    public List<Unity> getAllUnits();
    public Optional<Unity> getUnityById(UUID id);
    public void deleteUnityById(UUID id);
}
