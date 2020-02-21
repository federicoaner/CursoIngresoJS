function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;//arriba o abajo de las llaves x convencion
	
	while(contador<5)
	{
	numeroIngresado=prompt("ingreso un numero");	
	numeroIngresado=parseInt(numeroIngresado);
	acumulador=acumulador+numeroIngresado; //variable = variable + variable q 
	contador=contador+1; 
	}

	console.log(contador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN