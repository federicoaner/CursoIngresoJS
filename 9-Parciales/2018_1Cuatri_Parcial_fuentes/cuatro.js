function mostrar()
{

	var numUno;
	var numDos;
	var suma;



	numUno=prompt("ingrese un numero: ");
	numDos=prompt("ingrese otro numero");

	if(numUno==numDos)
	{
		alert(numUno+numDos);
	}
	else
	{
		numUno=parseInt(numUno);
		numDos=parseInt(numDos);
		suma=numUno+numDos;


		if(numUno>numDos)
		{
		alert(numUno-numDos);
		}
		else
		{	
		alert(numUno+numDos);
		}
	}
	
		if(suma>10)
		{
		alert("la suma es: " + suma + " y supero el 10");
		}
	







	







}
