function mostrar()
{
//tomo la edad  

var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	

	 if(edad<13)
	 {		
	 alert("es menor");
	 }

	 
	 
    if(edad>17)
	{		
	 alert(" es mayor");
	}
	else
	{	
	 alert("es adolecente");
	}
	

}//FIN DE LA FUNCIÓN