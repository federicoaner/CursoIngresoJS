function mostrar()
{
	var precio;
	var descuento;
	var porcentaje;
	var precioFinal;

	precio=prompt("ingrese el precio: ");
	descuento=prompt("ingrese el porcentaje de descuento: ");

	porcentaje=precio*descuento/100;

	precioFinal=precio-porcentaje;

	document.getElementById('elPrecioFinal').value=precioFinal;





}
