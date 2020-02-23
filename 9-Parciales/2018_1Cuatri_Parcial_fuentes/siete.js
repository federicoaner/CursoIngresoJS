function mostrar()
{	
	
	var nota;
	var sexoAlumno;
	var notaAlumno;
	var contador;
	var promedio;
	var acumuladorNotas;
	var mejorNota
	var peorNota




	contador=0;
	respuesta="si";
	acumuladorNotas=0;



	while(contador<3)
	{
		contador++;
		
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

			if(contador==1)
				{
				notaAlumno=peorNota;
				}

			if(peorNota<notaAlumno)
			{
				peorNota=notaAlumno;
			}
		



		acumuladorNotas=acumuladorNotas+notaAlumno;//acumulador va aca afuera

		
		



	}//while principal
	promedio=acumuladorNotas/contador;
	
	
	alert("promedio"+promedio);
	alert("peornota"+peorNota);

}
