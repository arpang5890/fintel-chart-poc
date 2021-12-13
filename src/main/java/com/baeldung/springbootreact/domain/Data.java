package com.baeldung.springbootreact.domain;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/*@Entity
@Table(name = "data")*/
public class Data {

	/*
	 * @Id
	 * 
	 * @GeneratedValue
	 */
    private Long id;
    private LocalDate date;
    private Double open;
    private Double close;
    private Double high;
    private Double low;
    private Double volume;
    private List<Data> data;
    public Data() {
    }

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Double getOpen() {
		return open;
	}

	public void setOpen(Double open) {
		this.open = open;
	}

	public Double getClose() {
		return close;
	}

	public void setClose(Double close) {
		this.close = close;
	}

	public Double getHigh() {
		return high;
	}

	public void setHigh(Double high) {
		this.high = high;
	}

	public Double getLow() {
		return low;
	}

	public void setLow(Double low) {
		this.low = low;
	}

	public Double getVolume() {
		return volume;
	}

	public void setVolume(Double volume) {
		this.volume = volume;
	}

	public List<Data> getData() {
		return data;
	}

	public void setData(List<Data> data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Data [id=" + id + ", date=" + date + ", open=" + open + ", close=" + close + ", high=" + high + ", low="
				+ low + ", volume=" + volume + ", data=" + data + "]";
	}
}
