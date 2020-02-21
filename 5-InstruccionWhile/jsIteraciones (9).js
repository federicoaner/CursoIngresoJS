function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var respuesta='si';
	var	numeroMayor;
	var numeroMenor;
	

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingreso un numero");	
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("desea continuar?/ingrese si para continuar");
		contador=contador+1;


		if (numeroMayor>numeroMenor)
		{
			alert(numeroMayor);
		}

	
	}

document.getElementById('maximo').value=numeroMayor;



}//FIN DE LA FUNCIÓN