function mostrar()
{
	
	var kilosxBolsa;
	var cantidadBolsas;
	var importexBolsa;
	var respuesta="si";
	var cantidadKilos;
	var marca;
	var contador=0;
	var carga=0;

	
	while(respuesta=="si")
	{
		contador++;
		

		marca=prompt("ingrese la marca ");

		kilosxBolsa=prompt("ingrese kilos x bolsa");
		kilosxBolsa=parseInt=(kilosxBolsa);

		cantidadBolsas=prompt("ingrese cantidad de bolsas")


		cantidadkilos=kilosxBolsa*cantidadBolsas
		carga=carga+cantidadkilos
		if(carga>1000)
		{
			alert("supera la carga maxima");
		}
	
		respuesta=prompt("desea continuar?");


		

		

	}





































	// var precio
	// var descuento
	// var precioFinal
	// var porcentaje

	

	// precio=prompt("porfavor ingrese el precio: ");
	// precio=parseInt(precio);

	// descuento=prompt("porfavor ingrese el descuento: ");
	// descuento=parseInt(descuento);


	// precioFinal=precio-(precio*descuento/100);

	// 	document.getElementById('elPrecioFinal').value=precioFinal;





























	// var precio;
	// var descuento;
	// var porcentaje;
	// var precioFinal;

	// precio=prompt("ingrese el precio: ");
	// descuento=prompt("ingrese el porcentaje de descuento: ");

	// porcentaje=precio*descuento/100;

	// precioFinal=precio-porcentaje;

	// document.getElementById('elPrecioFinal').value=precioFinal;





}
