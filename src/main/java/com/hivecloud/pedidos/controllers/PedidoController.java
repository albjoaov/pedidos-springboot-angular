package com.hivecloud.pedidos.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hivecloud.pedidos.domain.Pedido;
import com.hivecloud.pedidos.services.PedidoService;

@RestController
@RequestMapping(value="/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;

	@PostMapping
	public ResponseEntity<Pedido> addPedido(@RequestBody Pedido pedido) throws IOException {

		pedidoService.save(pedido);

		System.out.println("Pedido adicionado - id: " + pedido.getId());

		/*URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(pedidoSalvo.getId())
				.toUri();*/

		// return ResponseEntity.created(location).body((pedido));
		return ResponseEntity.ok().body((pedido));
	}

	@GetMapping
	public void searchPedido() {
		// TODO Auto-generated method stub

	}



}
