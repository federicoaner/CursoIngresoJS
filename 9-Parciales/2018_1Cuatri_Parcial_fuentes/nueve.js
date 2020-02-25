function mostrar()
{


    var respuesta="si";
	var contador;
	var pesoIngresado;
	var marcaIngresada;
	var tempAlmacenamiento;
	

	contador=0;
	
	

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

		


		
		
			

		
		
		
		

		


		respuesta=prompt("desea continuar? ingrese si para continuar");

	}//while principal





}
