function mostrar()
{	
	var respuesta;
	var nombreAlumno;
	var nota;
	var sexoAlumno;
	var notaAlumno;
	var contador;


	contador=0;
	respuesta="si";



	while(respuesta=="si")
	{
		contador++;
		nombreAlumno=prompt("por favor ingrese su nombre: ");
		notaAlumno=prompt("ingrese su nota: ");
		notaAlumno=parseInt(notaAlumno);
		sexoAlumno=prompt("ingrese su sexo, M (masculino) o F (femenino): ")
		

		while(notaAlumno<0||notaAlumno>10)
		{
			notaAlumno=prompt("error la nota debe ser un nro entre 0 y 10: ");
			notaAlumno=parseInt(notaAlumno);
		}

			while(sexoAlumno!="m"&&sexoAlumno!="f")
			{
				sexoAlumno=prompt("error el sexo debe indicarce con letras f o m");
			}

		respuesta=prompt("si para seguir");
		



	}//while principal

	alert(nombreAlumno);
	alert(notaAlumno);
	alert(sexoAlumno);

}
