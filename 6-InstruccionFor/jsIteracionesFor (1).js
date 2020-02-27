function mostrar()
{
	var contador;
	contador=0;
	var respuesta="s"
	
	for(;respuesta=="s";respuesta=prompt("ingrese"))		//for bien hecho  ------   for(;;){}
	{

		if(contador==10)
		{
			break;
		}
		
		console.log(contador);
		contador++;
	}



}