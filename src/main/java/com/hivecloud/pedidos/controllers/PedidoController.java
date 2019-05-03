package com.hivecloud.pedidos.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/pedido")
public class PedidoController {

	@PostMapping
	public void addPedido() {
		// TODO Auto-generated method stub

	}

	@GetMapping
	public void searchPedido() {
		// TODO Auto-generated method stub

	}



}
