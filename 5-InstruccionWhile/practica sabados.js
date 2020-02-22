//while(!(numeroIngresado>0 && numeroIngresado<9)) //casi bien
function mostrar()
{

	var contador;
	var respuesta="si";
	var numeroIngresado;
	var acumulador=0;
	
	contador=contador+1;

		while(respuesta='si')
		{

		contador=contador+1;
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		}
		


				while((numeroIngresado<0 || numeroIngresado>9))
				{
				numeroIngresado=prompt("error reingrese el "+contador+")										
				numeroIngresado=parseInt(numeroIngresado);
				}




}