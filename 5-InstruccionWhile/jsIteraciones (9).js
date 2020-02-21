function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var respuesta='si';
	var	maximo;
	var minimo;
	

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingreso un numero");	
		numeroIngresado=parseInt(numeroIngresado);
			
		if(contador==1)
		{
			numeroIngresado=maximo;
			numeroIngresado=minimo;
		}

		respuesta=prompt("desea continuar?/ingrese si para continuar");
		contador=contador+1;


		if(numeroIngresado<minimo)
		{
			numeroIngresado=maximo;
		}

		if (numeroIngresado>maximo)
		{
			numeroIngresado=menor;
		}

	
	}

document.getElementById('maximo').value=numeroMayor;



}//FIN DE LA FUNCIÓN