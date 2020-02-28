function mostrar()
{


	var nombreHuesped;
	var cantidadPersonas;
	var respuesta="si";
	var cantidadDias;
	var formadePago;
	var contador=0;
	var efectivo;
	var tarjeta;
	var	qr;
	var cantidadMaxPersonas;
	var cantidadMinPersonas;
	var huespedqTrajoMasPersonas;
	var cantidadMaxdias;
	var cantidadMindias;
	var personasMasDias;
	var acumuladorDias=0;


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


		if(contador==1)
		{
			cantidadMaxPersonas=cantidadPersonas;
			cantidadMinPersonas=cantidadPersonas;
			
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



		if(contador==1)
		{
			cantidadMaxdias=cantidadDias;
			cantidadMindias=cantidadDias;
		}

		if(cantidadDias>cantidadMaxdias)
		{
			cantidadMaxdias=cantidadDias;
			personasMasDias=cantidadPersonas;
		}
		else
		{
			cantidadMaxdias=cantidadDias;
		}

		
		
		acumuladorDias=acumuladorDias+cantidadDias;

	}//while

	promedio=acumuladorDias/cantidadDias;
	
	document.write("la persona q trajo mas huespedes se llama " + huespedqTrajoMasPersonas+"<br>")
	document.write("personas q se quedaron mas dias"+personasMasDias+"<br>")
	document.write("el promedio de dias de reserva es de : "+promedio+"<br>")


























}
