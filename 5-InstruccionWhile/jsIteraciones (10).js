function mostrar()
{

	var contador;
	var respuesta="si";
	var numeroIngresado;
	var positivo;
	var negativo;
	var cantidadPositivos;
	var cantidadNegativos;

	positivo=0;
	negativo=0;
	contador=0;

	while(respuesta!='no')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("ingrese solo numeros");
			numeroIngresado=parseInt(numeroIngresado);
		}

		respuesta=prompt("desea continuar?");

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
		}
		
		else
		{
			if(numeroIngresado<0)
			{
				negativo=negativo+numeroIngresado;
			}
			
		}

		sumaPositivos=positivo+positivo;
		sumaNegativos=negativo+negativo;
		

		
	}

	alert("la suma de los nros positivos es: "+positivo);
	alert("la suma de los nros negativos es: "+negativo);
	





	



}//FIN DE LA FUNCIÓN