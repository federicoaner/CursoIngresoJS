
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta="si";
	var temperaturamasAlta;
	var contador=0;
	var promedio
	var contadordemujeres=0;
	var acumuladordemujeres=0;
	var acumulador=0;
	var sexotemperaturamasAlta;
	var edadmasJoven;
	var	edadmasViejo;
	var temperaturamasviejo;
	var	temperaturamasviejo;
	var edadTotal=0
	var edadmujeres
	

	while(respuesta=="si")
		{
		contador++;
		nombre=prompt("ingrese su nombre");
		
		
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		
		while(edad<0||edad>110)
		{
		edad=prompt("error ingrese edad entre 0 y 110");
		edad=parseInt(edad);
		}

		
		sexo=prompt("ingrese su sexo")
		
		
		while(sexo!="f"&&sexo!="m")
		{
		sexo=prompt("error ingrese sexo f o m")
	

		}
		
		temperatura=prompt("ingrese la temperatura")
		temperatura=parseInt(temperatura)
		
		while(temperatura<0||temperatura>36)
		{

			temperatura=prompt("error ingrese temperatura entre 0 y 39")
			temperatura=parseInt(temperatura)

		}

		respuesta=prompt("desea continuar?");

		



		if (temperatura>38)
		{
			if (edad<14)
			{

			}	

			if(edad>60){}


		}


		if (contador==1)
		{
			temperaturamasAlta=temperatura;
		}
	

		if(temperatura>temperaturamasAlta)
		{
			temperaturamasAlta=temperatura;
			sexotemperaturamasAlta=sexo;
		}

		edadTotal=edadTotal+edad
		if(sexo="f")
		{
		contadordemujeres++;		
		edadmujeres=edadTotal
		
		}

		if(edad>0)
		{
			contador++
			acumulador=acumulador+contador
		}

		acumulador=acumulador+contador

		if(contador==1)
		{
			edadmasViejo=edad;
			edadmasJoven=edad;
		}
		

		if(edad>edadmasViejo)
		{
			edadmasViejo=edad;
			temperaturamasviejo=temperatura;
		}
		else
		{
			edadmasJoven=edad;
			temperaturamasJoven=temperatura;
		}



	}//while principal

	promedio=edadTotal/contador;
	promedioMujeres=edadmujeres/contadordemujeres;

	document.write("temperatura mas alta"+temperaturamasAlta+"y el sexo es "+sexo+"<br>");

	document.write("promedio edad mujeres es: "+promedioMujeres+"<br>");
	document.write("promedio de edad es: "+promedio+"<br>");
	document.write("temperatura del mas joven es: " + temperaturamasJoven+"<br>")
	document.write("temperaturamasviejo es" +temperaturamasviejo+"<br>")

}
