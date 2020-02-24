function mostrar()
{
	var respuesta="si";
	var contador;
	var numeroIngresado;
	var letraIngresada;
	var acumulador;
	var numerosPares;
	var numerosImpares;
	var cantidadDeCeros=0;
	var promedioPositivos;
	var positivos;
	var cantidadDePositivos;
	var acumuladorPositivos;
	

	contador=0;
	numerosPares=0;
	numerosImpares=0;
	cantidadDePositivos=0;
	acumuladorPositivos=0;
	positivos=0;
	
	

	while(respuesta=="si")
	{
		contador++;
		letraIngresada=prompt("por favor ingrese una letra");
		
		while(letraIngresada<"a"||letraIngresada>"z")
		{
			letraIngresada=prompt("error ingrese letras entre la a y la z");	 
		}

		numeroIngresado=prompt("por favor ingrese un numero entre 100 y -100: ");
		numeroIngresado=parseInt(numeroIngresado);

		while(numeroIngresado<-100||numeroIngresado>100)
		{
			numeroIngresado=prompt("error ingrese un numero entre el rango indicado anteriormente");
			numeroIngresado=parseInt(numeroIngresado);
		}


		

		if(numeroIngresado%2==0)
		{
			numerosPares++;
		}
		else
		{
			numerosImpares++;
		}


		if(numeroIngresado==0)
		{
			cantidadDeCeros++;
		}

		if(numeroIngresado>0)
		{
			positivos=numeroIngresado;
		}
		if(numeroIngresado>0)
		{
			cantidadDePositivos++;
		}
			

		acumuladorPositivos=acumuladorPositivos+positivos;





		

		respuesta=prompt("desea continuar? ingrese si para continuar");

	}//while principal

	
	promedioPositivos=positivos/cantidadDePositivos;
	alert("numeros pares   "+numerosPares);
	alert("numeros impares   "+numerosImpares);
	alert("cantidad de ceros"+cantidadDeCeros);
	alert("cantidad de positivos"+cantidadDePositivos);
	alert("promedioPositivos")+promedioPositivos;











}
