/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import javax.swing.JOptionPane;

public class Triangulo {

	private double base, altura;
	
	public Triangulo() {
		
	}
	
	public Triangulo(double base, double altura) {
		this.base = base;
		this.altura = altura;
	}
	
	public double getBase() {
		return this.base;
	}
	
	public void setBase(double base) {
		this.base = base;
	}
	
	public double getAltura() {
		return this.altura;
	}
	
	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	public double calculaArea() {
		double area = base*altura/2;
		return area;
	}
	
	public void imprimeDados() {
		JOptionPane.showMessageDialog(null, "A área do triângulo é: " + calculaArea());
	}
	
	public static void main(String[] args) {
		double altura, base;
		
		Triangulo a = new Triangulo();
		Triangulo b = new Triangulo(15, 20);
		
		altura = Double.parseDouble(JOptionPane.showInputDialog("Digite o valor da altura do triângulo"));
		base = Double.parseDouble(JOptionPane.showInputDialog("Digite o valor da base do triângulo"));
		
		a.setAltura(altura);
		a.setBase(base);		
		a.imprimeDados();
		
		b.imprimeDados();
		
	}

}
