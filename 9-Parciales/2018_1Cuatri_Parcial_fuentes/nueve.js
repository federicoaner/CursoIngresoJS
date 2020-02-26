function mostrar()
{


    var respuesta="si";
	var contador;
	var pesoIngresado;
	var marcaIngresada;
	var tempAlmacenamiento;
	var temperaturaPar;
	var contadorTempPar;
	var pesoMaximo;
	var pesoMinimo;
	var marcaMasPesado;
	var contadorBajoCero;
	var acumulador;

	

	contador=0;
	contadorPar=0;
	contadorTempPar=0;
	contadorBajoCero=0;
	acumulador=0;
	
	

	while(respuesta=="si")
	{
		contador++;
		marcaIngresada=prompt("por favor ingrese una marca");
		
		

		pesoIngresado=prompt("por favor ingrese un peso entre 100 y -100: ");
		pesoIngresado=parseInt(pesoIngresado);


	while(pesoIngresado<-100||pesoIngresado>100)
	{
			pesoIngresado=prompt("error ingrese un peso entre el rango indicado anteriormente");
			pesoIngresado=parseInt(pesoIngresado);
	}


		tempAlmacenamiento=prompt("ingrese temperatura Almacenamiento");
		tempAlmacenamiento=parseInt(tempAlmacenamiento);
		
	
	while(tempAlmacenamiento<-30||tempAlmacenamiento>30)
	{
		tempAlmacenamiento=prompt("error ingrese temperatura Almacenamiento indicada");
		tempAlmacenamiento=parseInt(tempAlmacenamiento);
	}

		if(tempAlmacenamiento%2==0)
		{
			contadorTempPar++;
			//temperaturaPar=temperaturaPar+tempAlmacenamiento;
		}
		
		if(contador==1)
		{
			pesoMaximo=pesoIngresado;
			pesoMinimo=pesoIngresado;
		}

		else
		{
			if(pesoIngresado>pesoMaximo)
			{
			pesoMaximo=pesoIngresado;
			marcaMasPesado=marcaIngresada;
			}
			else
			{
			pesoMinimo=pesoIngresado;
			}

		}
		

		if(tempAlmacenamiento<0)
		{
			contadorBajoCero++;
		}

		acumulador=acumulador+pesoIngresado;
		


		respuesta=prompt("desea continuar? ingrese si para continuar");

	}//while principal

	promedio=acumulador/contador;
	document.write("la cant de temp pares es: "+contadorTempPar+"<br>");
	document.write("el peso maximo es: "+pesoMaximo+"<br>");
	document.write(marcaMasPesado+"<br>");
	document.write("la cantidad de productos bajo cero es: "+contadorBajoCero+"<br>");
	document.write("el promedio es: "+promedio+"<br>");
	document.write("el peso maximo es: " +pesoMaximo+ "  el peso peso Minimo es: "+pesoMinimo+"<br>");

	//preguntar en clase marcamaximo undefined
	




}
