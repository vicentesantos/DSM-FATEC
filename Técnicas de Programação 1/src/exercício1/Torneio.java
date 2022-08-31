/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import javax.swing.JOptionPane;

public class Torneio {
	private String nome;
    private int idade;

	public static void main(String[] args) {
		String nome = JOptionPane.showInputDialog("Digite o seu nome:");
		int idade = Integer.parseInt(JOptionPane.showInputDialog("Digite a sua idade:"));
		
		Torneio t01 = new Torneio (nome, idade);
		
		t01.imprimeDados();
	}
	// Método Construtor
	
	public String getNome() {
		return nome;
		
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getIdade() {
		return idade;		
	}
	public void setIdade(int idade) {
		this.idade = idade;	
	}
	
	//Verificar Categorias
	public String verificarCategoria() {
		if (idade >= 5 && idade <= 7)
			return "Infantil";
		if(idade>=8 && idade <=10)
			return "Juvenil";
		if(idade>= 11 && idade <=15)
			return "Adolescente";
		if(idade>= 16 && idade <=30)
			return "Adulto";
		if(idade> 30 )
			return "Sênior";
		return "Idade Inválida!";
	}
	
	//Exibir dados - Procedimento
	
	public void imprimeDados() {
		String categoria = verificarCategoria();
		String mensagem = "Nome: "+ nome  + "\n Idade: " + idade + "\n Categoria: " + categoria;
		
		JOptionPane.showMessageDialog(null, mensagem);
	}
}
