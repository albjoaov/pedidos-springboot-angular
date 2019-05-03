package com.hivecloud.pedidos.services;

import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hivecloud.pedidos.domain.Pedido;

@Service
public class PedidoService {

	public void save(Pedido pedido) throws IOException {

		ObjectMapper objectMapper = new ObjectMapper();
		FileOutputStream file = new FileOutputStream("./src/main/resources/json/pedidos.json");
		try {
			objectMapper.writeValue(file, pedido);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
