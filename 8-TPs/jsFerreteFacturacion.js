/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	resultado=precioUno+precioDos+precioTres;

	alert("la suma de los productos es: " + resultado);








}
function Promedio () 
{


    var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	promedio= precioUno+precioDos+precioTres/3;

	alert("el precio promedio de sus productos es: " + promedio );









	
}
function PrecioFinal () 
{

	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var porcentaje
	var precioIva
	var precioFinal

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	porcentaje=21;
	resultadoSuma= precioUno+precioDos+precioTres;
	precioIva=resultadoSuma*21/100;

	precioFinal=resultadoSuma+precioIva;

	alert("el precio final mas Iva es de: " + precioFinal);






	
}