function inicia_jogo(){
vez = "branco"; //vez de quem jogar

//muda a classe das pecas pretas(encima) para mostrar imgens das pecas
	document.getElementById("t11").className = "torre-preto";
	document.getElementById("t12").className = "cavalo-preto";
	document.getElementById("t13").className = "bispo-preto";
	document.getElementById("t14").className = "rainha-preto";
	document.getElementById("t15").className = "rei-preto";
	document.getElementById("t16").className = "bispo-preto";
	document.getElementById("t17").className = "cavalo-preto";
	document.getElementById("t18").className = "torre-preto";
	
	document.getElementById("t21").className = "peao-preto";
	document.getElementById("t22").className = "peao-preto";
	document.getElementById("t23").className = "peao-preto";
	document.getElementById("t24").className = "peao-preto";
	document.getElementById("t25").className = "peao-preto";
	document.getElementById("t26").className = "peao-preto";
	document.getElementById("t27").className = "peao-preto";
	document.getElementById("t28").className = "peao-preto";
	
//muda a classe das pecas brancas(embaixo) para mostrar imgens das pecas
	document.getElementById("t81").className = "torre-branco";
	document.getElementById("t82").className = "cavalo-branco";
	document.getElementById("t83").className = "bispo-branco";
	document.getElementById("t84").className = "rainha-branco";
	document.getElementById("t85").className = "rei-branco";
	document.getElementById("t86").className = "bispo-branco";
	document.getElementById("t87").className = "cavalo-branco";
	document.getElementById("t88").className = "torre-branco";
	
	document.getElementById("t71").className = "peao-branco";
	document.getElementById("t72").className = "peao-branco";
	document.getElementById("t73").className = "peao-branco";
	document.getElementById("t74").className = "peao-branco";
	document.getElementById("t75").className = "peao-branco";
	document.getElementById("t76").className = "peao-branco";
	document.getElementById("t77").className = "peao-branco";
	document.getElementById("t78").className = "peao-branco";	
	


	//cria array que var receber as posicoes do tabuleiro
	cria_array();
	function cria_array(){
		var x,y;
		
		peca = new Array();
		
		for(x=1;x<=8;x++){
			
			peca[x] = new Array();
			
			for(y=1;y<=8;y++){
			
				peca[x][y] = new Array();
				peca[x][y]['peca'] = false; 		//defino como falso para as que não começam com peça ficarem nulas
				peca[x][y]['cor'] = false;			//defino como falso para as que não começam com peça ficarem nulas
			 
			}
		}
		


	
	}


	
	
		
//posiciona as pecas pretas no array
	peca[1][1]['peca']="torre";		peca[1][1]['cor']="preto";	peca[1][1]['mov']=0;
	peca[1][2]['peca']="cavalo";	peca[1][2]['cor']="preto";	peca[1][2]['mov']=0;
	peca[1][3]['peca']="bispo"; 	peca[1][3]['cor']="preto";	peca[1][3]['mov']=0;
	peca[1][4]['peca']="rainha";	peca[1][4]['cor']="preto";	peca[1][4]['mov']=0;
	peca[1][5]['peca']="rei";		peca[1][5]['cor']="preto";	peca[1][5]['mov']=0;
	peca[1][6]['peca']="bispo";		peca[1][6]['cor']="preto";	peca[1][6]['mov']=0;
	peca[1][7]['peca']="cavalo";	peca[1][7]['cor']="preto";	peca[1][7]['mov']=0;
	peca[1][8]['peca']="torre";		peca[1][8]['cor']="preto";	peca[1][8]['mov']=0;

	peca[2][1]['peca']="peao";		peca[2][1]['cor']="preto";	peca[2][1]['mov']=0;
	peca[2][2]['peca']="peao";		peca[2][2]['cor']="preto";	peca[2][2]['mov']=0;
	peca[2][3]['peca']="peao"; 		peca[2][3]['cor']="preto";	peca[2][3]['mov']=0;
	peca[2][4]['peca']="peao";		peca[2][4]['cor']="preto";	peca[2][4]['mov']=0;
	peca[2][5]['peca']="peao";		peca[2][5]['cor']="preto";	peca[2][5]['mov']=0;
	peca[2][6]['peca']="peao";		peca[2][6]['cor']="preto";	peca[2][6]['mov']=0;
	peca[2][7]['peca']="peao";		peca[2][7]['cor']="preto";	peca[2][7]['mov']=0;
	peca[2][8]['peca']="peao";		peca[2][8]['cor']="preto";	peca[2][8]['mov']=0;	

//posiciona as pecas brancas no array	
	peca[8][1]['peca']="torre";		peca[8][1]['cor']="branco";	peca[8][1]['mov']=0;
	peca[8][2]['peca']="cavalo";	peca[8][2]['cor']="branco";	peca[8][2]['mov']=0;
	peca[8][3]['peca']="bispo"; 	peca[8][3]['cor']="branco";	peca[8][3]['mov']=0;
	peca[8][4]['peca']="rainha";	peca[8][4]['cor']="branco";	peca[8][4]['mov']=0;
	peca[8][5]['peca']="rei";		peca[8][5]['cor']="branco";	peca[8][5]['mov']=0;
	peca[8][6]['peca']="bispo";		peca[8][6]['cor']="branco";	peca[8][6]['mov']=0;
	peca[8][7]['peca']="cavalo";	peca[8][7]['cor']="branco";	peca[8][7]['mov']=0;
	peca[8][8]['peca']="torre";		peca[8][8]['cor']="branco";	peca[8][8]['mov']=0;

	peca[7][1]['peca']="peao";		peca[7][1]['cor']="branco";	peca[7][1]['mov']=0;
	peca[7][2]['peca']="peao";		peca[7][2]['cor']="branco";	peca[7][2]['mov']=0;
	peca[7][3]['peca']="peao"; 		peca[7][3]['cor']="branco";	peca[7][3]['mov']=0;
	peca[7][4]['peca']="peao";		peca[7][4]['cor']="branco";	peca[7][4]['mov']=0;
	peca[7][5]['peca']="peao";		peca[7][5]['cor']="branco";	peca[7][5]['mov']=0;
	peca[7][6]['peca']="peao";		peca[7][6]['cor']="branco";	peca[7][6]['mov']=0;
	peca[7][7]['peca']="peao";		peca[7][7]['cor']="branco";	peca[7][7]['mov']=0;
	peca[7][8]['peca']="peao";		peca[7][8]['cor']="branco";	peca[7][8]['mov']=0;	



///aray para movimentar as pecas
	movimenta = new Array();
	
	movimenta['selecionada'] = new Array();
	movimenta['selecionada']['x'] =0;
	movimenta['selecionada']['y'] =0;
	movimenta['selecionada']['peca']="0";
	movimenta['selecionada']['cor']="0";
	
	movimenta['destino'] = new Array();
	movimenta['destino']['x'] =0;
	movimenta['destino']['y'] =0; 
	movimenta['destino']['peca'] ="0";
	movimenta['destino']['cor']="0";

///aray para os possiveis movimentos
	possiveis = new Array();

}
