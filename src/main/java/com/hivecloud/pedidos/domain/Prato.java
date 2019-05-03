package com.hivecloud.pedidos.domain;

import java.math.BigDecimal;
import java.util.List;

public class Prato {

	private long id;
	private String nome;
	private List<String> acompanhamentos;
	private BigDecimal preco;

	public Prato() {

	}

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public List<String> getAcompanhamentos() {
		return acompanhamentos;
	}
	public void setAcompanhamentos(List<String> acompanhamentos) {
		this.acompanhamentos = acompanhamentos;
	}
	public BigDecimal getPreco() {
		return preco;
	}
	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	@Override
	public String toString() {
		return "Prato [nome=" + nome + ", acompanhamentos=" + acompanhamentos + ", preco=" + preco + "]";
	}





}
