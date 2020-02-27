function mostrar()
{
	var nombreEstudiante;
	var	edad;
	var sexo;
	var nota;
	var respuesta="si"
	var contador=0;
	var varonesAprobados;
	var contMenoresdeEdad;
	var promedioMenores;
	var notasMenores;
	var acumuladorNotasMenores;
	var notasAdolecentes;
	var contadorAdolecentes;
	var acumuladorNotasAdolecentes=0;

	varonesAprobados=0;
	contMenoresdeEdad=0;
	acumuladorNotasMenores=0;
	contadorAdolecentes=0;
	
	while(respuesta=="si")
	{
		contador++;
		nombreEstudiante=prompt("porfavor ingrese su nombre");
	
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		while(edad<0||edad>110)
		{
			edad=prompt("error ingrese edad entre 0 y 110")
			edad=parseInt(edad);
		}
	
		
		nota=prompt("ingrese su nota");
		nota=parseInt(nota);

		sexo=prompt("ingrese su sexo M o F ");
		while(sexo!="f"&&sexo!="m")
		{
		sexo=prompt("error ingrese f o m");
		}

	
		if(nota>6 && sexo=="m")
		{
		varonesAprobados++;
		}

		if(edad<18)
		{
			notasMenores=nota;
			contMenoresdeEdad++;
			acumuladorNotasMenores=acumuladorNotasMenores+notasMenores;
		}

		if(edad>13 && edad>18 )
		{
			notasAdolecentes=nota;
			contadorAdolecentes++;
			acumuladorNotasAdolecentes=acumuladorNotasAdolecentes+notasAdolecentes;
		}

		


		respuesta=prompt("desea continuar?");


	}// while principal


	promedioMenores=acumuladorNotasMenores/contMenoresdeEdad
	promedi
	document.write("la cantidad de varones aprobados es: <br>" + varonesAprobados);
	document.write("promedioMenores notas menores es: <br>" + promedioMenores);
		
	
}
