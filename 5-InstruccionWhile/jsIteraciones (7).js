function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	

	while(respuesta=="si")
	{
	
	contador=contador+1;
	numero=prompt("ingreso un numero");	
	numero=parseInt(numero);
	
	while(isNaN(numero))  ///abajo de parseInt
	{
		numero=prompt("error solo numero")
		numero=parseInt(numero)
	}
	
	respuesta=prompt("desea continuar?/ingrese si para continuar");
	acumulador=acumulador+numero;
	
	
	}

	console.log(contador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN