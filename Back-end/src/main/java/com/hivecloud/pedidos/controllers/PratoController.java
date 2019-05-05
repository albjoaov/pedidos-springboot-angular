package com.hivecloud.pedidos.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hivecloud.pedidos.domain.Prato;
import com.hivecloud.pedidos.services.PratoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value="/prato")
public class PratoController {

	@Autowired
	private PratoService pratoService;

	@GetMapping
	public ResponseEntity<List<Prato>> searchPratos() throws IOException {

		List<Prato> pratos = pratoService.readJSON();

		ResponseEntity<List<Prato>> responseEntity = new ResponseEntity<>(pratos, HttpStatus.OK);

		return responseEntity;
	}



}
