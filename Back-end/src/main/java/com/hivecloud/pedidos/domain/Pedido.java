package com.hivecloud.pedidos.domain;

import java.util.List;

public class Pedido {

	// private long id;
	public Pedido() {

	}

	private List<Prato> pratos;

	public List<Prato> getPratos() {
		return pratos;
	}

	public void setPratos(List<Prato> pratos) {
		this.pratos = pratos;
	}

	public void adicionarPratos(List<Prato> pratos) {
		this.pratos.addAll(pratos);
	}

	/*@Override
	public String toString() {
		return "Pedido [pratos=" + pratos + "]";
	}*/


	/*public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}*/

}
