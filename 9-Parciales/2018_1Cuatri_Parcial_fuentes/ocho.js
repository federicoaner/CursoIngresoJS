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
	var negativo;
	var cantidadDeNegativos;
	var acumuladorNegativos;

	contador=0;
	numerosPares=0;
	numerosImpares=0;
	cantidadDePositivos=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
		

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

	
			if(numeroIngresado>0)
			{
			positivos=numeroIngresado;	
			cantidadDePositivos++;
			acumuladorPositivos=acumuladorPositivos+positivos;
			}
		
			if(numeroIngresado<0)
			{
			negativos=numeroIngresado;
			acumuladorNegativos=acumuladorNegativos+negativos;
			}
		

			if(numeroIngresado==0)
			{
			cantidadDeCeros++;
			}


			if(numeroIngresado%2==0)
			{
			numerosPares++;
			}
			else
			{
			numerosImpares++;
			}


		respuesta=prompt("desea continuar? ingrese si para continuar");

	}//while principal

	
	promedioPositivos=acumuladorPositivos/cantidadDePositivos;
	document.write("numeros pares   "+numerosPares+"<br>");
	document.write("numeros impares   "+numerosImpares+"<br>");
	document.write("cantidad de ceros"+cantidadDeCeros+"<br>");
	document.write("cantidad de positivos"+cantidadDePositivos+"<br>");
	document.write("promedioPositivos "+promedioPositivos+"<br>");
	document.write("suma de negativos es: "+acumuladorNegativos+"<br>");


}
