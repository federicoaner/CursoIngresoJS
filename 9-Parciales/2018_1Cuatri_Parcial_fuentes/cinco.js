function mostrar()
{


	var nombreHuesped;
	var cantidadPersonas;
	var respuesta="si";
	var cantidadDias;
	var formadePago;
	var contador=0;
	var efectivo=0;
	var tarjeta=0;
	var	qr=0;
	var cantidadMaxPersonas;
	var cantidadMinPersonas;
	var huespedqTrajoMasPersonas;
	var cantidadMaxdias;
	var cantidadMindias;
	var personasMasDias;
	var acumuladorDias=0;
	var totalpersonas=0;


	while(respuesta=="si")
	{
		contador++;
		nombreHuesped=prompt("ingrese su nombre")

		cantidadPersonas=prompt("ingrese cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);


		cantidadDias=prompt("ingrese la cantidad de dias");
		cantidadDias=parseInt(cantidadDias);

		formadePago=prompt("ingrese forma de pago efectivo tajeta o qr")

		while(formadePago!="tarjeta"&&formadePago!="efectivo"&&formadePago!="qr")
		{
			formadePago=prompt("error ingrese alguna de las 3 opciones");
		}

		respuesta=prompt("desea continuar?");

			totalpersonas=totalpersonas+cantidadPersonas;
			acumuladorDias=acumuladorDias+cantidadDias;	



		if(contador==1)
		{
			cantidadMaxPersonas=cantidadPersonas;
			cantidadMinPersonas=cantidadPersonas;
			cantidadMaxdias=cantidadDias;
			cantidadMindias=cantidadDias;
			huespedqTrajoMasPersonas=nombreHuesped;
			personasMasDias=cantidadPersonas;

		}


		if (cantidadPersonas>cantidadMaxPersonas)
		{
			cantidadMaxPersonas=cantidadPersonas;
			huespedqTrajoMasPersonas=nombreHuesped;
		}
		else
		{
			cantidadMinPersonas=cantidadPersonas;
		}



		if(cantidadDias>cantidadMaxdias)
		{
			cantidadMaxdias=cantidadDias;
			personasMasDias=cantidadPersonas;
		}
		else
		{
			cantidadMindias=cantidadDias;
		}

		switch(formadePago)
		{
			case"tarjeta":
				tarjeta++;
				break;

			case"qr":
				qr++;
				break;

			case"efectivo":
				efectivo++;
				break;
		}

		

		




	}//while

	promedio=acumuladorDias/totalpersonas;
	
	document.write("la persona q trajo mas huespedes se llama " + huespedqTrajoMasPersonas+"<br>")
	document.write("personas q se quedaron mas dias"+personasMasDias+"<br>")
	document.write("el promedio de dias de reserva es de : "+promedio+"<br>")

	if(tarjeta>qr &&tarjeta>efectivo)
		{
			document.write("el metodo mas utilizado fue tarjeta"+"<br>")

		}
		else
		{
			if(qr>tarjeta&&qr>efectivo)
			{
			document.write("el metodo mas utilizado qr " +"<br>")
			}

			else
			{
			document.write("el metodo mas utilizado fue efectivo"+"<br>")
			}
		}


























}
