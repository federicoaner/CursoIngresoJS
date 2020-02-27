function mostrar()
{

	var numeroIngresado;
	var i; //numero anterior
	var bandera;
	bandera=0;
	
	numeroIngresado=prompt("ingrese un nro");

	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			bandera=1;
			break;
		}
		
	}

		if(bandera!=1)
		{
			alert("es primo el"+numeroIngresado)
		}


}//FIN DE LA FUNCIÓN