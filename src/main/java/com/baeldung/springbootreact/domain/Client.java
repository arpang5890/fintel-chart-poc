package com.baeldung.springbootreact.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private Double amount;
	private Double discount;
    private LocalDate billingDate;
	
    public Client() {
    }

    public Client(String name, String email, Double amount, Double discount, LocalDate billiDate) {
        this.name = name;
        this.email = email;
        this.amount = amount;
        this.discount = discount;
        this.billingDate = billiDate;
    }

    public Client(Long id, String name, String email,Double amount, Double discount, LocalDate billiDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.amount = amount;
        this.discount = discount;
        this.billingDate = billiDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public LocalDate getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(LocalDate billingDate) {
		this.billingDate = billingDate;
	}
	
	
}
