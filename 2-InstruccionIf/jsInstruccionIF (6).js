function mostrar()
{
//tomo la edad  

var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	

	if(edad<13)
	{
		alert("menor");
	}
	else
	{
		if(edad>12 && edad<18)
		{
			alert("adolescete");
		}
		else
		{
			alert("mayor de edad");
		}
		


	}

	//  if(edad<13)
	//  {		
	//  alert("es menor");
	//  }

	// 	else{
	// 	if(edad>17 || edad<13)
	// 	{		
	//  	alert("no adolecente");

	//  	else(edad>17)
	// 	{		
	// 	alert("usted es mayor de edad");
 //    }
	// }

}//FIN DE LA FUNCIÓN