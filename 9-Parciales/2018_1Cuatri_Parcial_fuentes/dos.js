function mostrar()
{
  
	var nombreHuesped;
	var cantidadPersonas;
	var respuesta="si";
	var cantidadDias;
	var formadePago;
	var contador=0;
	var efectivo;
	var tarjeta;
	var	qr;

	while(respuesta=="si")
	{

		nombre=prompt("ingrese su nombre")

		cantidadPersonas=prompt("ingrese cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);


		cantidadDias=prompt("ingrese la cantidad de dias");
		cantidadDias=parseInt(cantidadDias);

		formadePago=prompt("ingrese forma de pago efectivo tajeta o qr")

		while(formadePago!="tarjeta"&&formadePago!="efectivo"&&formadePago!="qr")
		{
			formadePago=prompt("error ingrese alguna de las 3 opciones");
		}






	}//while








































	// var nombre;
	// var localidad;

	// nombre=document.getElementById('elNombre').value;
	// localidad=document.getElementById('laLocalidad').value;

	// alert("usted es: "+nombre+" y vive en: "+localidad);




























  	// var nombre;
  	// var localidad;

  	// nombre=document.getElementById('elNombre').value;
  	// localidad=document.getElementById('laLocalidad').value;

  	// alert("usted es: " + nombre + " y vive en: " + localidad);



}
