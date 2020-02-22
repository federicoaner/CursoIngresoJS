function mostrar()
{

	var contador;
	var numeroIngresado;
	var respuesta='si';
	var	maximo;
	var minimo;
	
	contador=0;
	
	while(respuesta!='no')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingreso un numero");	
		numeroIngresado=parseInt(numeroIngresado);
			
		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("ingrese solo numeros");
			numeroIngresado= parseInt(numeroIngresado);
		}

		if(contador==1)
		{
			numeroIngresado=maximo;
			numeroIngresado=minimo;
		}

		respuesta=prompt("desea continuar?/ingrese si para continuar");
		


		if(numeroIngresado<minimo)
		{
			minimo=numeroIngresado;
		}
			else
			{
				if (numeroIngresado>maximo)
				{
				maximo=numeroIngresado;
				}				
			}

	}

 document.getElementById('maximo').value=maximo; 
 document.getElementById('minimo').value=minimo; 



}//FIN DE LA FUNCIÓN