function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	numero=prompt("ingreso un numero");

	numero=parseInt(numero);

	while(contador<5)
	{

	numero=prompt("ingreso otro numero");	
	contador=contador+1;
	
	numero=parseInt(numero);
	acumulador=acumulador+numero;
	
	}

	console.log(contador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN