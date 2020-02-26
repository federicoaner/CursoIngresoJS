function mostrar()
{

	var numeroUno;
	var numeroDos;
	var resultadoResta;
	var resultadoSuma;
	var suma;
	var resta;
	var iguales;

	numeroUno=prompt("ingrese un nro: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese un nro: ");
	numeroDos=parseInt(numeroDos);


	if(numeroUno==numeroDos)
	{
		alert(""+numeroUno+""+numeroDos)
	}

	 	else
	 	{

	 		if(numeroUno>numeroDos)
			{
				resultadoResta=numeroUno-numeroDos;
				alert(resultadoResta);
			}
			else
			{
			resultadoSuma=numeroUno+numeroDos;
			alert(resultadoSuma);

			}
	 	
			if(resultadoSuma>10)
			{
				alert(resultadoSuma+"es mayor a 10")
			}
	 	}

	



	
	


































	// var numUno;
	// var numDos;
	// var suma;



	// numUno=prompt("ingrese un numero: ");
	// numDos=prompt("ingrese otro numero");

	// if(numUno==numDos)
	// {
	// 	alert(numUno+numDos);
	// }
	// else
	// {
	// 	numUno=parseInt(numUno);
	// 	numDos=parseInt(numDos);
	// 	suma=numUno+numDos;


	// 	if(numUno>numDos)
	// 	{
	// 	alert(numUno-numDos);
	// 	}
	// 	else
	// 	{	
	// 	alert(numUno+numDos);
	// 	}
	// }
	
	// 	if(suma>10)
	// 	{
	// 	alert("la suma es: " + suma + " y supero el 10");
	// 	}
	







	







}
