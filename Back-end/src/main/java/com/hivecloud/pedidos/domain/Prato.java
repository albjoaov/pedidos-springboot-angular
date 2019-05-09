package com.hivecloud.pedidos.domain;

import java.math.BigDecimal;
import java.util.List;

public class Prato {

	private String nome;
	private List<String> acompanhamentos;
	private BigDecimal preco;

	public Prato() {

	}

	public Prato(String nome, List<String> acompanhamentos, BigDecimal preco) {
		super();
		this.nome = nome;
		this.acompanhamentos = acompanhamentos;
		this.preco = preco;
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
		return "[nome=" + nome + ", acompanhamentos=" + acompanhamentos + ", preco=" + preco + "]";
	}





}
