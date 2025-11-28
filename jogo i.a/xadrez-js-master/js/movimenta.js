function seleciona(x,y){
	
		
		if((movimenta['selecionada']['x']==0 || peca[x][y]['cor'] == movimenta['selecionada']['cor']) && peca[x][y]['cor']==vez){
			if(movimenta['selecionada']['x']!=0){
				volta_fundo(); //volta a cor de fundo normal
			}
			if(peca[x][y]['peca']){ //se tiver uma peca nessa posição
				movimenta['selecionada']['x'] = x;	//recebe x selecionado
				movimenta['selecionada']['y'] = y;  //recebe y selecionado
				movimenta['selecionada']['peca'] = peca[x][y]['peca']; //recebe a peca selecionada
				movimenta['selecionada']['cor'] = peca[x][y]['cor'];	//recebe a cor selecionada
				
				cont_possiveis = possiveis_movimentos();	
			}
			
		}else if(verifica_possivel(x,y,cont_possiveis)){ //se for segundo clique e a cor da peca destino for diferente da selecionada
			
			if(peca[x][y]['peca']=="rei"){
				alert(movimenta['selecionada']['cor']+" venceu (:");
				window.location.reload();
			}
			
			//Pra trocar de peça quando o peão chegar do outro lado
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='branco' && x==1){
				document.getElementById('escolhebranco').style.display='block';	
				document.getElementById('fundo').style.display='block';	
				xe=x;ye=y;
			}
			if(movimenta['selecionada']['peca']=='peao' && movimenta['selecionada']['cor']=='preto' && x==8){
				document.getElementById('escolhepreto').style.display='block';	
				document.getElementById('fundo').style.display='block';					
				xe=x;ye=y;
			}
			
			if(peca[x][y]['cor'] != movimenta['selecionada']['cor']){
				movimenta['destino']['x'] =x;	//recebe o x do destino(segundo clique)
				movimenta['destino']['y'] =y;  //recebe y do destino(segundo clique)
				
				if(peca[x][y]['peca']){  //se tiver alguma peca nessa posição
					movimenta['destino']['peca'] = peca[x][y]['peca'];	//destino recebe a peca selecionada
					movimenta['destino']['cor'] = peca[x][y]['cor'];	//destino recebe a cor selecionada
				}
				
				
				document.getElementById("t"+movimenta['selecionada']['x']+""+movimenta['selecionada']['y']).className = ""; //selcionada fica sem imagem
				document.getElementById("t"+x+""+y).className = movimenta['selecionada']['peca']+"-"+movimenta['selecionada']['cor']; //destino recebe a imagem da peça selecinada
				peca[x][y]['peca']=movimenta['selecionada']['peca'];	//posicao destino recebe a peca
				peca[x][y]['cor']=movimenta['selecionada']['cor'];		//posicao destino recebe a cor
								
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;		//peca selecionada recebe 0
				peca[movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;		//cor selecionada recebe 0
					
				movimenta['selecionada']['x'] =0;	//selecionada x recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['y'] =0;	//selecionada y recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['peca']="0";	//selecionada peca recebe 0 (pra na proxima ver q é o primeiro movimento)
				movimenta['selecionada']['cor']="0";	//selecionada cor recebe 0 (pra na proxima ver q é o primeiro movimento)
				

			}

			volta_fundo(); //volta a cor de fundo normal
			
			if(vez=="branco"){vez="preto";}else{vez="branco";} //troca a vez

		}
		
		

	
}
function escolhe(pecae,core){
		peca[xe][ye]['peca']=pecae;
		document.getElementById("t"+xe+""+ye).className = pecae+"-"+core;
		document.getElementById('escolhe'+core).style.display='none';
		document.getElementById('fundo').style.display='none';
}
