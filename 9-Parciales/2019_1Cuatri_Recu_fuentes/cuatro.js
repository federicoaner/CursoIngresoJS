function mostrar()
{
	var numeroUno;
	var	numeroDos;
	var cuadrado;
	var	cuadradoDos
	var resta;
	var resultadoResto;
	var resto;

	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro un numero");
	numeroDos=parseInt(numeroDos);
	resto=numeroUno%numeroDos;

	 if(numeroUno==numeroDos)
	 {
	 		cuadrado=numeroUno*numeroUno;
	 		
	 }
	 else
	 {

	 	if(resto==0)
		{
		resta=numeroUno-numeroDos;
		}
		else
		{
			resultadoResto=resto;
		}

		if (resto>3)
		{
			alert("el resultado del resto es: " + resultadoResto)
		}

	 }

	
		



	document.write("el cuadrado del nro es "+cuadrado+"<br>");
	document.write("el resultado de la resta es: "+resta+"<br>")
	document.write("resultado del resto es: "+resto+"<br>")



}
