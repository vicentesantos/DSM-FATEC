/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import java.util.Scanner;

public class multa {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite a velocidade do carro: ");
		int velCarro = entrada.nextInt();
		Scanner entrada2 = new Scanner(System.in);
		System.out.println("Digite a velocidade da Via: ");
		int velVia= entrada2.nextInt();
		int velDif = velCarro - velVia;
		
		
		if(velDif <= 0) {
			System.out.println("Não há multa");
		}else if (velDif <= 10) {
			System.out.println("Multa de R$50");
		}else if (velDif >= 11 && velDif<=30) {
			System.out.println("Multa de R$100");
		}else if (velDif >= 31) {
			System.out.println("Multa de R$300");
		}

	}

}
