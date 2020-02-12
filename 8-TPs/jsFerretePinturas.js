/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	var temperaturaIngresada;
	var centigrados;
	var farenheit; 
	
	
	temperaturaIngresada=document.getElementById('Temperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	farenheit=temperaturaIngresada;
	centigrados =(farenheit-32) / 1.8; // para nros decimales (la coma) es con punto, sino no lo toma

	//alert(farenheit + " farenheit: "  + " son" + centígrados "  grados centigrados");
	alert (centigrados);
	
}

function CentigradosFahrenheit () 
{
	
    var temperaturaIngresada;
	var centigrados;
	var farenheit; 
	
	
	temperaturaIngresada=document.getElementById('Temperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	centigrados=temperaturaIngresada;
	farenheit=(centigrados*1.8) + 32;

	//alert(farenheit + " farenheit: "  + " son" + centígrados "  grados centigrados");
	alert (farenheit);


}
