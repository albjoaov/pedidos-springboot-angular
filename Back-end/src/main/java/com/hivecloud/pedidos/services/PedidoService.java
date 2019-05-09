package com.hivecloud.pedidos.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hivecloud.pedidos.domain.Pedido;
import com.hivecloud.pedidos.domain.Prato;
import com.hivecloud.pedidos.util.Constantes;

@Service
public class PedidoService {

	public void save(Pedido novoPedido) throws IOException, ParseException {

		File f = new File(Constantes.JSON_PATH);

		boolean isFileExists = f.exists() && !f.isDirectory();
		boolean isJSONValid = isJSONValid();

		if (isFileExists && isJSONValid) {
			overwriteJSON(novoPedido);
		} else {
			createJSON(novoPedido);
		}

	}

	private void overwriteJSON(Pedido novoPedido) throws ParseException, FileNotFoundException, IOException {

		FileReader fileReader = new FileReader(Constantes.JSON_PATH);
		ObjectMapper objectMapper = new ObjectMapper();
		Pedido pedidosSalvos = objectMapper.readValue(fileReader, Pedido.class);

		List<Prato> novosPratos = novoPedido.getPratos();
		pedidosSalvos.adicionarPratos(novosPratos);
		createJSON(pedidosSalvos);

	}

	private boolean isJSONValid() throws JsonParseException, JsonMappingException, IOException {

		FileReader fileReader = new FileReader(Constantes.JSON_PATH);
		ObjectMapper objectMapper = new ObjectMapper();

		Pedido pedidosSalvos = objectMapper.readValue(fileReader, Pedido.class);
		List<Prato> pratosSalvos = pedidosSalvos.getPratos();

		if (pratosSalvos != null) {
			return true;
		} else {
			return false;
		}
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
