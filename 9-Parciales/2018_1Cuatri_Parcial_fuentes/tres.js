function mostrar()
{
	
	var precio
	var descuento
	var precioFinal
	var porcentaje

	

	precio=prompt("porfavor ingrese el precio: ");
	precio=parseInt(precio);

	descuento=prompt("porfavor ingrese el descuento: ");
	descuento=parseInt(descuento);


	precioFinal=precio-(precio*descuento/100);

		document.getElementById('elPrecioFinal').value=precioFinal;





























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
