function possiveis_movimentos(){
		var x,y;
		var c =0; //contador pro array possiveis
		var i; //contador pros for
		x = movimenta['selecionada']['x'];
		y = movimenta['selecionada']['y'];

		document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; //muda cor de fundo
		possiveis[c] = "t"+x+y; c++;

///////////////////////////////////////////////////////////////////////////////////PEAO////////////////////////////////
	if(peca[x][y]['peca']=='peao'){
		if(peca[x][y]['cor']=="branco"){

				if(!peca[x-1][y]['peca']){
					possivel(x-1,y);
				}if(y-1>0 && peca[x-1][y-1]['peca']){
					possivel(x-1,y-1);						
				}
				if(y+1<9 && peca[x-1][y+1]['peca']){
					possivel(x-1,y+1);					
				}					

				if(x==7){				
					if(!peca[x-2][y]['peca'] && !peca[x-1][y]['peca']){
						possivel(x-2,y);
					}
				}

		}
		
		
		if(peca[x][y]['cor']=="preto"){
				
				if(!peca[x+1][y]['peca']){
					possivel(x+1,y);
				}if(y-1>0 && peca[x+1][y-1]['peca']){
					possivel(x+1,y-1);						
				}
				if(y+1<9 && peca[x+1][y+1]['peca']){
					possivel(x+1,y+1);					
				}					

				if(x==2){
				
					if(!peca[x+2][y]['peca'] && !peca[x+1][y]['peca']){
						possivel(x+2,y);
					}
		
				}

		}
	}
///////////////////////////////////////////////////////////////////////////////////////FIM PEAO//////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////CAVALO ////////////////////////////////

	if(peca[x][y]['peca']=='cavalo'){
		
		possivel(x-1,y-2);
		possivel(x+1,y+2);
		possivel(x+1,y-2);
		possivel(x-1,y+2);
		possivel(x-2,y-1);
		possivel(x+2,y+1);
		possivel(x+2,y-1);
		possivel(x-2,y+1);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM CAVALO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////REI ///////////////////////////////////
	if(peca[x][y]['peca']=='rei'){
		possivel(x-1,y);
		possivel(x,y-1);
		possivel(x-1,y-1);
		possivel(x+1,y);
		possivel(x,y+1);
		possivel(x+1,y+1);
		possivel(x-1,y+1);
		possivel(x+1,y-1);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM REI ////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////TORRE ///////////////////////////////////
	if(peca[x][y]['peca']=='torre'){
		
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM TORRE ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////BISPO ///////////////////////////////////
	if(peca[x][y]['peca']=='bispo'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
	}
//////////////////////////////////////////////////////////////////////////////////////FIM BISPO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////RAINHA ///////////////////////////////////
	if(peca[x][y]['peca']=='rainha'){
		
		for(i=1;possivel(x-i,y-i);i++);
		for(i=1;possivel(x+i,y+i);i++);
		for(i=1;possivel(x-i,y+i);i++);
		for(i=1;possivel(x+i,y-i);i++);
		for(i=1;possivel(x-i,y);i++);
		for(i=1;possivel(x+i,y);i++);
		for(i=1;possivel(x,y-i);i++);
		for(i=1;possivel(x,y+i);i++);
		
	}
//////////////////////////////////////////////////////////////////////////////////////FIM RAINHA ////////////////////////////



function possivel(px,py){
		if(px>0 && px <9 && py>0 && py <9 && peca[px][py]['cor']!= movimenta['selecionada']['cor']){
			document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda cor de fundo
			possiveis[c] = "t"+(px)+(py); c++;
			
			if(!peca[px][py]['peca']){
				return true;
			}
		}else{
			return false;
		}

	
	}

	return c;
}

function volta_fundo(){
	var cf;
	for(cf=0;cf<possiveis.length;cf++){
		document.getElementById(possiveis[cf]).style.backgroundColor = "";
	}	
}

function verifica_possivel(x,y,c){
	var pode=0;
	var cp;
	var div = "t"+x+y;
	
	for(cp=1;cp<c;cp++){
		
		if(possiveis[cp]==div){
			pode ++;
		}
		if(pode>0){
			return 1;
		}
	}	
	
}
