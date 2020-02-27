function mostrar()
{
	var numeroUno;
	var	numeroDos;
	var division;
	var suma;

	
	numeroUno=prompt("ingrese un nro: ");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese un nro: ");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		alert(""+numeroUno+""+numeroDos)
	}

	if(numeroUno>numeroDos)
	{
		division=numeroUno/numeroDos;
		alert(division);
	}
	else
	{
		suma=numeroUno+numeroDos;
		alert(suma);
	}

	if(suma<50)
	{
		alert("la suma es "+suma +"  y es menor a 50");
	}





}
