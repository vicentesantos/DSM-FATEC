/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import java.util.Scanner;

public class NumFracionario {

	public static void main(String[] args) {
		Scanner entrada1 = new Scanner(System.in);
		System.out.println("Digite o valor de X: ");
		float x = entrada1.nextFloat();
		
		Scanner entrada2 = new Scanner(System.in);
		System.out.println("Digite o valor de Y: ");
		float y = entrada2.nextFloat();
		
		Scanner entrada3 = new Scanner(System.in);
		System.out.println("Digite o valor de Z: ");
		float z = entrada3.nextFloat();
		
		float a = y+z;
		
		if(x > a) {
			System.out.println("X maior que a soma de  Y+Z");
		}else if(x==a){
			System.out.println("Valor de X igual a soma de Y+Z");
		}else {
			System.out.println("X menor que a soma de Y+Z");
		}
	}
}
