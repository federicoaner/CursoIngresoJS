function mostrar()
{
	var	cantidadBolsas=0;
	var contadorBolsas=0
	var	contador=0
	var kilos;
	var respuesta="si"

	while(respuesta=="si")
	{

		contador++;
		cantidadBolsas=prompt("ingrese cantidad de Bolsas: ");
		cantidadBolsas=parseInt(cantidadBolsas);

		while(cantidadBolsas>5)
		{
			cantidadBolsas=prompt("erro ingrese cantidad de Bolsas: ");
			cantidadBolsas=parseInt(cantidadBolsas);
		}

		kilos=prompt("ingrese cantidad de kilos emte 0 y 500: ");
		kilos=parseInt(kilos);

		while(kilos<0||kilos>500)
		{
			kilos=prompt("error ingrese cantidad de kilos correcta : ");
			kilos=parseInt(kilos);

		}


		respuesta=prompt("desea continuar?")





	}//while principal
}
