package com.hivecloud.pedidos.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hivecloud.pedidos.domain.Pedido;
import com.hivecloud.pedidos.util.Constantes;

@Service
public class PedidoService {

	public void save(Pedido pedido) throws IOException, ParseException {

		File f = new File(Constantes.JSON_PATH);
		if (f.exists() && !f.isDirectory()) {
			getJSONFile(pedido);
		} else {
			createJSON(pedido);
		}

	}

	private void getJSONFile (Pedido novoPedido) throws ParseException, FileNotFoundException, IOException {
		FileReader fileReader = new FileReader(Constantes.JSON_PATH);
		ObjectMapper objectMapper = new ObjectMapper();

		Pedido pedidosAntigos = objectMapper.readValue(fileReader, Pedido.class);

		pedidosAntigos.adicionarPratos(novoPedido.getPratos());

		System.out.println(pedidosAntigos);

		/*

		JSONParser parser = new JSONParser();
		ObjectMapper objectMapper = new ObjectMapper();

		String pedidoString = objectMapper.writeValueAsString(pedido);
		JSONObject dadosNovos = (JSONObject) parser.parse(pedidoString);
		List<Prato> pratosNovos = (List<Prato>) dadosNovos.get("pratos");

		JSONObject dadosAntigos = (JSONObject) parser.parse(new FileReader(Constantes.JSON_PATH));
		List<Prato> pratosAntigos = (List<Prato>) dadosAntigos.get("pratos");

		JSONArray ja = new JSONArray();
		ja.add(pratosAntigos);
		ja.add(pratosNovos);

		dadosAntigos.put("pratos", ja);

		System.out.println(dadosAntigos);

		FileOutputStream file = new FileOutputStream(Constantes.JSON_PATH);
		objectMapper.writeValue(file, dadosAntigos);
		 */
	}

	private void createJSON(Pedido pedido) throws FileNotFoundException {
		ObjectMapper objectMapper = new ObjectMapper();
		FileOutputStream file = new FileOutputStream(Constantes.JSON_PATH);
		try {
			objectMapper.writeValue(file, pedido);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
