/********************************
T�cnicas de Programa��o
Prof. Claudio Benossi
Aluno: Vicente Santos Gon�alves
RA: 1111392111035

********************************/

package exerc�cio1;

import java.util.Scanner;

public class meses {

	public static void main(String[] args) {
	
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite de 1 a 12 para visualizar o nome do m�s: ");
		int mes = entrada.nextInt();

		switch(mes) {
			case 1:
				System.out.println( "Janeiro");
				break;
			case 2:
				System.out.println("Fevereiro");
				break;
			case 3:
				System.out.println("Mar�o");
				break;
			case 4:
				System.out.println("Abril");
				break;
			case 5:
				System.out.println("Maio");
				break;
			case 6:
				System.out.println("Junho");
				break;
			case 7:
				System.out.println("Julho");
				break;
			case 8:
				System.out.println("Agosto");
				break;
			case 9:
				System.out.println("Setembro");
				break;
			case 10:
				System.out.println( "Outubro");
				break;
			case 11:
				System.out.println("Novembro");
				break;
			case 12:
				System.out.println("Dezembro");
				break;
			default:
				System.out.println("M�s inv�lido");
				break;
		}
	}

}