function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
	
	numero=prompt("ingreso un numero");	
	numero=parseInt(numero);

	while(isNaN(numero))  ///abajo de parseInt
	{
		numero=prompt("error solo numero")
		numero=parseInt(numero)
	}
	
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}
	
		respuesta=prompt("desea continuar?/ingrese si para continuar");
	}

	



document.getElementById('producto').value=negativo;
document.getElementById('suma').value=positivo;

}//FIN DE LA FUNCIÓN