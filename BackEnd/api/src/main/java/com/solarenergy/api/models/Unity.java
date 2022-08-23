package com.solarenergy.api.models;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Unidades")
public class Unity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(nullable = false)
    private String nickName;
    @Column(nullable = false)
    private String adress;
    @Column(nullable = false, unique = true)
    private String brand;
    @Column(nullable = false)
    private String model;
    @Column(nullable = false)
    private boolean isActivate;

    public UUID getId() {
        return id;
    }

    public String getNickName() {
        return nickName;
    }

    public String getAdress() {
        return adress;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public boolean isActivate() {
        return isActivate;
    }
}
