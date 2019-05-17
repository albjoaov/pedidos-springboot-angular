package com.hivecloud.pedidos.controllers;

import java.io.IOException;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hivecloud.pedidos.domain.Pedido;
import com.hivecloud.pedidos.services.PedidoService;

@RestController
@RequestMapping(value = "/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pedido> addPedido(@RequestBody Pedido pedido) throws IOException, ParseException {

		pedidoService.save(pedido);

		return ResponseEntity.ok().body((pedido));

	}
	
	@GetMapping
	public ResponseEntity<Pedido> searchPratos() throws IOException {

		Pedido pedidos = pedidoService.readJSON();

		ResponseEntity<Pedido> responseEntity = new ResponseEntity<>(pedidos, HttpStatus.OK);
		
		System.out.println(pedidos);
		
		return responseEntity;
	}

}
