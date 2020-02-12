/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
    var	rectangulo;

	largoTerreno=document.getElementById('Largo').value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=document.getElementById('Ancho').value;
	anchoTerreno=parseInt(anchoTerreno);

	perimetro=(anchoTerreno+largoTerreno)*2;
	rectangulo=perimetro*3;
	alert("la cantidad de alambre que nececitara es de metros: " + rectangulo);




}
function Circulo () 
{

	var radio;
	var perimetroCirculo;
	var resultadoPerimetro
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	perimetroCirculo= (3.14 * 2) * radio ;
	resultadoPerimetro=perimetroCirculo * 3;
	alert("la cantidad de alambre q necesitara es de metros: " + resultadoPerimetro);
	
}
function Materiales () 
{
	var area;
    var largoTerreno;
	var anchoTerreno;
	var cementoxMetro;
	var calxMetro;

	largoTerreno=document.getElementById('Largo').value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=document.getElementById('Ancho').value;
	anchoTerreno=parseInt(anchoTerreno);


	area= largoTerreno*anchoTerreno;

	cementoxMetro=2
	calxMetro=3
	

	bolsasDeCemeto= cementoxMetro  * area;
	bolsasDeCal= calxMetro * area;

	alert("bolsas de cemento " + bolsasDeCemeto + " bolsas de cal " + bolsasDeCal);



	
}