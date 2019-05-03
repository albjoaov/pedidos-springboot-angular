package com.hivecloud.pedidos.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hivecloud.pedidos.domain.Prato;

@Service
public class PratoService {

	public List<Prato> readJSON() {

		ObjectMapper objectMapper = new ObjectMapper();
		TypeReference<List<Prato>> typeReference = new TypeReference<List<Prato>>() {};
		InputStream inputStream = TypeReference.class.getResourceAsStream("/json/pratos.json");

		try {
			List<Prato> pratos = objectMapper.readValue(inputStream, typeReference);
			System.out.println(pratos);
			return pratos;
		}
		catch (IOException e) {
			System.out.println("Unable to handle pratos: " + e.getMessage());
			e.printStackTrace();
			return null;
		}
	}

}
