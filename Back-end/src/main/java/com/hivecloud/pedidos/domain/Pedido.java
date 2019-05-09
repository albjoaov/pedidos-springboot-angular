package com.hivecloud.pedidos.domain;

import java.util.List;

public class Pedido {

	private List<Prato> pratos;

	public Pedido() {

	}

	public List<Prato> getPratos() {
		return pratos;
	}

	public void setPratos(List<Prato> pratos) {
		this.pratos = pratos;
	}

	public void adicionarPratos(List<Prato> pratos) {
		this.pratos.addAll(pratos);
	}

	@Override
	public String toString() {
		return "Pedido [pratos=" + pratos + "]";
	}

}
