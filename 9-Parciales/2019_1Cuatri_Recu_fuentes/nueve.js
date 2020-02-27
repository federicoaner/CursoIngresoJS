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
	var promedioAdolecentes;
	var notasMayores;
	var contadorMayores=0;
	var acumuldorMayores=0;
	var promedioMayores;
	var notasHombres;
	var acumuladorHombres=0;
	var contadorHombres=0;
	var promedioHombres;
	var notasMujeres;
	var contadorMujeres=0;
	var acumuladorMujeres=0;
	var promedioMujeres;

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
		else
		{
			notasMayores=nota;
			contadorMayores++;
			acumuldorMayores=acumuldorMayores+notasMayores;
		}

		if(edad>13 && edad>18 )
		{
			notasAdolecentes=nota;
			contadorAdolecentes++;
			acumuladorNotasAdolecentes=acumuladorNotasAdolecentes+notasAdolecentes;
		}

		if (sexo=="m")
		{
			notasHombres=nota;
			contadorHombres++;
			acumuladorHombres=acumuladorHombres+notasHombres;
		}
		else
		{
			notasMujeres=nota;
			contadorMujeres++;
			acumuladorMujeres=acumuladorMujeres+notasMujeres;
		}


		respuesta=prompt("desea continuar?");


	}// while principal


	promedioMenores=acumuladorNotasMenores/contMenoresdeEdad
	promedioAdolecentes=acumuladorNotasAdolecentes/contadorAdolecentes
	promedioMayores=acumuldorMayores/contadorMayores;
	promedioHombres=acumuladorHombres/contadorHombres;
	promedioMujeres=acumuladorMujeres/contadorMujeres;
	document.write("la cantidad de varones aprobados es: " + varonesAprobados+"<br>");
	document.write("promedioMenores notas menores es: " + promedioMenores+"<br>");
	document.write("promedioAdolecentes notas  es: " + promedioAdolecentes+"<br>");
	document.write("promedio notas mayores es: "+promedioMayores+"<br>");
	document.write("promedio notas hombres es: "+promedioHombres+"<br>");
	document.write("promedio notas mujeres es: "+promedioMujeres+"<br>");

	

		
	
}
