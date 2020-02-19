function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{	

	case 1:
	{
		alert("que comiences bien el año");
		break;
	}

	case 3:
	{
		alert("a clases");
		break;
	}

	case 7:
	{
		alert("se vienen las vacaciones!!! ");
		break;
	}

	case 12:
	{
		alert("felices fiestas");
		break;
	}


	document.getElementById('mes').value=mesDelAño;


}	






}//FIN DE LA FUNCIÓN