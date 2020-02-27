function mostrar()
{

var contador;
var numeroIngresado;
var numeroPar;
var cantidadNumerosPar;
var respuesta="si"

	numeroIngresado=prompt("ingrese un nro: ");	
	numeroIngresado=parseInt(numeroIngresado);
	

	for(contador=0;respuesta=="si";contador++)
	{

		respuesta=prompt("desea continuar: ")
		console.log(contador)
		if(numeroIngresado%2==0)
		{
			numeroPar=numeroIngresado;
			cantidadNumerosPar++;
			alert(cantidadNumerosPar)

		}

	}

}//FIN DE LA FUNCIÓN