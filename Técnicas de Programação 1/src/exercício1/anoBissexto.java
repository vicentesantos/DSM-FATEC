/********************************
T�cnicas de Programa��o
Prof. Claudio Benossi
Aluno: Vicente Santos Gon�alves
RA: 1111392111035

********************************/

package exerc�cio1;

import java.util.Scanner;

public class anoBissexto {

	public static void main(String[] args){
	        
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite um ano: ");
		int ano = entrada.nextInt();
	        
	        if((ano % 400 == 0 ) || ((ano % 4 == 0 ) && (ano % 100 != 0))){
	            System.out.println(ano + " � um ano Bissexto!");
	        }
	        else{
	            System.out.println(ano + " N�o � um ano Bissexto!");
	        }
	   }

}
