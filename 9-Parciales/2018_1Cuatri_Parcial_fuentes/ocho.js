function mostrar()
{
	var respuesta="si";
	var contador;
	var numeroIngresado;
	var letraIngresada;
	var acumulador;
	var numerosPares;
	

	contador=0;
	numerosPares=0;
	

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






		

		respuesta=prompt("desea continuar? ingrese si para continuar");

	}//while principal

	alert(numerosPares);









}
