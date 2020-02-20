function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero)
	

	while(numero<0||numero>10)
	{

		numero = prompt("reingrese un número entre 0 y 10.");
		numero=parseInt(numero)

	}

	document.getElementById('Numero').value=numero;
	alert("numero validado")


}//FIN DE LA FUNCIÓN