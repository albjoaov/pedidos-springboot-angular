package com.hivecloud.pedidos.services;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hivecloud.pedidos.domain.Pedido;
import com.hivecloud.pedidos.domain.Prato;

@Service
public class PedidoService {

	public void save(Pedido pedido) throws IOException, ParseException {

		appendJSONFile(pedido);

		// if file exists -> append
		// Senão, cria

		/*ObjectMapper objectMapper = new ObjectMapper();
		FileOutputStream file = new FileOutputStream("./src/main/resources/json/pedidos.json");
		try {
			objectMapper.writeValue(file, pedido);
		} catch (IOException e) {
			e.printStackTrace();
		}*/

	}

	private void appendJSONFile(Pedido pedido) throws ParseException, FileNotFoundException, IOException {
		JSONParser parser = new JSONParser();
		ObjectMapper objectMapper = new ObjectMapper();
		String pedidoString = objectMapper.writeValueAsString(pedido);

		JSONObject dadosNovos = (JSONObject) parser.parse(pedidoString);
		JSONObject dadosAntigos = (JSONObject) parser.parse(new FileReader("./src/main/resources/json/pedidos.json"));

		List<Prato> pratosAntigos = (List<Prato>) dadosAntigos.get("pratos");
		List<Prato> pratosNovos = (List<Prato>) dadosNovos.get("pratos");

		JSONArray ja = new JSONArray();
		ja.add(pratosAntigos);
		ja.add(pratosNovos);

		dadosAntigos.put("pratos", ja);

		System.out.println(dadosAntigos);



		/*JSONArray newRecord = (JSONArray) records.get("./src/main/resources/json/new-pedidos.json");

		JSONObject newObj = new JSONObject();

		records.put("pratos", pedido.getPratos());

		newRecord.add(newObj);

		try (FileWriter file = new FileWriter("./src/main/resources/json/pedidos.json")) {
			file.write(newRecord.toJSONString());
		} catch (IOException ex) {
			ex.printStackTrace();
		}*/


	}

}
