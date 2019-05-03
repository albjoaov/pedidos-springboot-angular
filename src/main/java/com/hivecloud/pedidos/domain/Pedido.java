package com.hivecloud.pedidos.domain;

import java.util.List;

public class Pedido {

	private long id;
	private List<Prato> pedidos;

	public List<Prato> getPedidos() {
		return pedidos;
	}
	public void setPedidos(List<Prato> pedidos) {
		this.pedidos = pedidos;
	}

	public Pedido() {

	}



}
