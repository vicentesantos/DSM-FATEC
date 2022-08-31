/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import java.util.Scanner;

public class ordemCrescente {

	public static void main(String[] args) {
		Scanner entrada1 = new Scanner(System.in);
		System.out.println("Digite o valor de X: ");
		int x = entrada1.nextInt();
		
		Scanner entrada2 = new Scanner(System.in);
		System.out.println("Digite o valor de Y: ");
		int y = entrada2.nextInt();
		
		Scanner entrada3 = new Scanner(System.in);
		System.out.println("Digite o valor de Z: ");
		int z = entrada3.nextInt();
		
		if(x < y) {
			if(x<z) {
				if(y<z) {
					System.out.println(x + " " +y + " " + z);
				}else System.out.println(x + " " +z + " " + y);
			}
		}
		if(y < x ) {
			if (y < z) {
				if(z < x) {
					System.out.println(y+ " " + z+ " " +x);
				}else System.out.println(y+ " " + x+ " " + z);
			}
		}
		if(z < x) {
			if (z < y) {
				if (x < y) {
					System.out.println(z+ " " +x+ " " + y);
				}else System.out.println(z+ " " + y+ " " + x);
			}
		}
	}
}
