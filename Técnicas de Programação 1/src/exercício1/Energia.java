/********************************
Técnicas de Programação
Prof. Claudio Benossi
Aluno: Vicente Santos Gonçalves
RA: 1111392111035

********************************/

package exercício1;

import javax.swing.JOptionPane;

public class Energia {
	private double consumo, fornecimento, icms, cofins, pispasep, icmscofins, icmspispasep, fatura;

	public Energia(double consumo) {
	        this.consumo = consumo;
	   }
	public double getConsumo() {
		return consumo;
	}

	public void setConsumo(double consumo) {
		this.consumo = consumo;
	}

	public double getFornecimento() {
		return fornecimento;
	}

	public void setFornecimento(double fornecimento) {
		this.fornecimento = fornecimento;
	}

	public double getIcms() {
		return icms;
	}

	public void setIcms(double icms) {
		this.icms = icms;
	}

	public double getCofins() {
		return cofins;
	}

	public void setCofins(double cofins) {
		this.cofins = cofins;
	}

	public double getPispasep() {
		return pispasep;
	}

	public void setPispasep(double pispasep) {
		this.pispasep = pispasep;
	}

	public double getIcmscofins() {
		return icmscofins;
	}

	public void setIcmscofins(double icmscofins) {
		this.icmscofins = icmscofins;
	}

	public double getIcmspispasep() {
		return icmspispasep;
	}

	public void setIcmspispasep(double icmspispasep) {
		this.icmspispasep = icmspispasep;
	}

	public double getFatura() {
		return fatura;
	}

	public void setFatura(double fatura) {
		this.fatura = fatura;
	}

	public void calcularFornecimento(double consumo){
        this.setFornecimento(consumo * 0.28172); 
        
        if (consumo <= 200){
            this.setIcms(fornecimento * 0.136363);
            this.setCofins(fornecimento * 0.0614722);
            this.setPispasep(fornecimento * 0.013346);
            this.setIcmscofins(fornecimento * 0.0614722 * 0.136363);
            this.setIcmspispasep(fornecimento * 0.013346 * 0.136363);
        } else {
            this.setIcms(fornecimento * 0.333333);
            this.setCofins(fornecimento * 0.0730751);
            this.setPispasep(fornecimento * 0.0158651);
            this.setIcmscofins(fornecimento * 0.0730751 * 0.333333);
            this.setIcmspispasep(fornecimento * 0.0158651 * 0.333333);
        }
        
        this.setFatura(fornecimento + icms + cofins + pispasep + icmscofins + icmspispasep);
        
        String mensagem = " Fornecimento: " + getFornecimento() + 
                          "\n Valor do ICMS: " + getIcms() +
                          "\n Valor do Cofins: " + getCofins() +
                          "\n Valor do PisPasesp: " + getPispasep() +
                          "\n Valor do ICMS sobre o Cofins: " + getIcmscofins() +
                          "\n Valor do ICMS sobre o PisPaesp: " + getIcmspispasep() +
                          "\n Valor Total da Fatura: " + getFatura();
        
        JOptionPane.showMessageDialog(null, mensagem);
        
        }

	public static void main(String[] args) {
		float consumo = Float.parseFloat(JOptionPane.showInputDialog("Digite o seu consumo mensal: "));
        
        Energia e01 = new Energia(consumo);
        
        e01.calcularFornecimento(consumo);

	}

}
