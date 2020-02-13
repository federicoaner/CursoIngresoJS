function mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

		if(edad<18&&estadoCivil == soltero)
	{
		alert("es muy pequenio NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN