function mostrar()
{
	
	var kilosxBolsa;
	var cantidadBolsas;
	var importexBolsa;
	var respuesta="si";
	var cantidadKilos;
	var marca;
	var contador=0;
	var cargaContenedor=0;
	var maxKilos;
	var maxMarca;
	var maxImporte;
	var maxbolsas;
	var marcaMasBolsas;
	var marcaMasImporte;
	var minKilos;
	var importeminkilos;
	var marcaminkilos;

	   
	
	while(respuesta=="si" &&  cargaContenedor<1000 )
	{
		contador++;
		

		marca=prompt("ingrese la marca ");

		kilosxBolsa=prompt("ingrese kilos x bolsa");
		kilosxBolsa=parseInt(kilosxBolsa);
		while(isNaN(kilosxBolsa))
		{
			kilosxBolsa=prompt("error reingrese kilos x bolsa");
			kilosxBolsa=parseInt(kilosxBolsa);
		}

		cantidadBolsas=prompt("ingrese cantidad de bolsas");
		cantidadBolsas=parseInt(cantidadBolsas);
		while(isNaN(cantidadBolsas))
		{
		cantidadBolsas=prompt("ingrese cantidad de bolsas");
		cantidadBolsas=parseInt(cantidadBolsas);
		}

		cantidadKilos=kilosxBolsa*cantidadBolsas
		cargaContenedor=cargaContenedor+cantidadKilos
		
		if( cargaContenedor>1000)
		{
		kilosxBolsa=prompt(" error supera la carga maxima de 1000kilos, reingrese cantidad");
		kilosxBolsa=parseInt(kilosxBolsa)
		}
		
		importexBolsa=prompt("ingrese el importe x bolsa");
		importexBolsa=parseInt(importexBolsa);
		while(isNaN(importexBolsa))
		{
		importexBolsa=prompt("ingrese el importe x bolsa");
		importexBolsa=parseInt(importexBolsa);
		}

		respuesta=prompt("desea continuar?");

		if(contador==1)
		{
			maxKilos=cantidadKilos;
			maxMarca=marca;
			maxImporte=importexBolsa;
			maxbolsas=cantidadBolsas;
			mayorImporte=importexBolsa;
			marcaMasImporte=marca;
			minKilos=cantidadKilos
		}


		if(cantidadKilos>maxKilos)
		{
		
		maxKilos=cantidadKilos;
		maxMarca=marca;
		 }
		
		else
		{
			minKilos=minKilos
			importeminkilos=importexBolsa;
			marcaminkilos=marca;
		}

		if(cantidadBolsas>maxbolsas)
		{
			maxbolsas=cantidadBolsas;
			marcaMasBolsas=marca;
		}


		if(importexBolsa> maxImporte)
		{
			maxImporte=importexBolsa;
			marcaMasImporte=marca;

		}


		

		

	}

	console.log(cargaContenedor)

	document.write("la marca con mas kilos es: "+maxMarca+"<br>")
	document.write("la marca con mas bolsas es: "+marcaMasBolsas+"<br>")
	document.write("la marca con el mayor importe es : "+marcaMasImporte+"<br>")
	document.write("el importe de la marca con menos kilos es :  "+importeminkilos+ "y la marca es"+marcaminkilos+"<br>")



































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
