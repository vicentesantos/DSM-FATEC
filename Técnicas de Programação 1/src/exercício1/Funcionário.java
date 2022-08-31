/********************************

Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import javax.swing.JOptionPane;

public class Funcionário {

	private int cracha;
	private float salario;
	private String cargo;
	
	public static void main(String[] args) {
		Funcionário f01 = new Funcionário();
		Funcionário f02 = new Funcionário("Gerente", 23456, 1500.0f);
		
		System.out.println( "Salario Inicial: " + f02.getSalario() );
		f02.calculaAumento(20.0f);
		System.out.println( "Salario com Porcentagem: " + f02.getSalario() );
		f02.calculaAumento(1);
		System.out.println( "Salario por tempo de trabalho: " + f02.getSalario() );
		
	
	}

	public Funcionário () {
		cargo = "Assistente";
	}
	
	public Funcionário( String cargo, int cracha, float salario) {
		this.cargo = cargo;
		this.cracha = cracha;
		this.salario = salario;
	}

	public int getCracha() {
		return this.cracha;
	}

	public void setCracha(int cracha) {
		this.cracha = cracha;
	}

	public float getSalario() {
		return salario;
	}

	public void setSalario(float salario) {
		this.salario = salario;
	}

	public String getCargo() {
		return this.cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	
	public float calculaAumento(float porcentagem) {
		this.salario = salario + (salario * (porcentagem /100));
		return (salario * (porcentagem /100));
	}
	
	public int calculaAumento (int tempo) {
		this.salario = salario + tempo * 150;
		return tempo * 150;
		
	}

}
