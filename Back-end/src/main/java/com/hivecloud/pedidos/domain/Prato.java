package com.hivecloud.pedidos.domain;

import java.math.BigDecimal;

public class Prato {

	private long id;
	private String nome;
	private String[] acompanhamentos;
	private BigDecimal preco;

	public Prato() {

	}

	public Prato(long id, String nome, String[] acompanhamentos, BigDecimal preco) {
		super();
		this.id = id;
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
	public String[] getAcompanhamentos() {
		return acompanhamentos;
	}
	public void setAcompanhamentos(String[] acompanhamentos) {
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
