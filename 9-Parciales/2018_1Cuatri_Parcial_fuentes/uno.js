
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("ingrese el ancho: ");
	largo=prompt("ingrese el alto: ");
	ancho=parseInt(ancho),
	largo=parseInt(largo),
	
	perimetro=(ancho+largo)*2;

	alert("el perimetro es de: " + perimetro + " metros");


}
