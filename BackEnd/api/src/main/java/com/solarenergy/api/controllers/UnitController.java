package com.solarenergy.api.controllers;

import com.solarenergy.api.models.Unity;
import com.solarenergy.api.services.IUnityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/unidades")
public class UnitController {
    final IUnityService iUnityService;

    public UnitController(IUnityService iUnityService) {
        this.iUnityService = iUnityService;
    }

    @PostMapping
    public ResponseEntity<Unity> createUnit(@RequestBody @Validated Unity unity){
        return ResponseEntity.status(HttpStatus.CREATED).body(iUnityService.CreateUnity(unity));
    }

    @GetMapping
    public ResponseEntity<List<Unity>> getAllUnits(){
        return ResponseEntity.status(HttpStatus.OK).body(iUnityService.getAllUnits());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUnitById(@PathVariable UUID id){
        Optional<Unity> unityOptional = iUnityService.getUnityById(id);
        if(unityOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(unityOptional.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Unit not found");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUnit(@PathVariable UUID id){
        Optional<Unity> unityOptional = iUnityService.getUnityById(id);
        if(unityOptional.isPresent()){
            iUnityService.deleteUnityById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Unity> updateUnit(){

    }
}
