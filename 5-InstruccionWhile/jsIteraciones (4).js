function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero),
	

	while(numero<0||numero>10)
	{

		alert("reingrese un nro entre 0 y 10")

	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN