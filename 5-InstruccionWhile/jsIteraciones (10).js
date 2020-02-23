function mostrar()
{

	var contador;
	var respuesta="si";
	var notaAlumno;
	var positivo;
	var negativo;
	var cero;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var numeroPar;
	var cantidadNumerosPar=0;

	positivo=0;
	negativo=0;
	contador=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0
	numeroPar=0
	

	while(respuesta!='no')
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		

		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("ingrese solo numeros");
			numeroIngresado=parseInt(numeroIngresado);
		}

		respuesta=prompt("desea continuar?");

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
			cantidadPositivos=cantidadPositivos+1;
			
		}
		
			else
			{
				if(numeroIngresado<0)
				{
				negativo=negativo+numeroIngresado;
				cantidadNegativos++;
				}

				if(numeroIngresado==0)
				{
				cero=cero+numeroIngresado;
				cantidadCeros++;
				}
			}
			
			if(numeroIngresado % 2 == 0)
				{
					
					cantidadNumerosPar++;
				}


	} //while principal

	document.write(" la suma de los nros positivos es: " + positivo+"/////");
	document.write(" la suma de los nros negativos es:  "+ negativo+"///// ");
	document.write(" la cantidad de positivos es: "+ cantidadPositivos+" //// ");
	document.write(" la cantidad de negativos es: "+ cantidadNegativos+" //// ");
	document.write(" la cantidad de ceros es: " + cantidadCeros+" //// ");
	alert(cantidadNumerosPar);
	













	// var contador;
	// var respuesta="si";
	// var notaAlumno;
	// var acumulador=0;
	// var sexoAlumno;
	// var edadAlumno;
	// var promedioNotas;
	// var mejorNota;
	// var peorNota;
	// var bandera;
	// var contadorDeMujeres=0
	// //var edadPrimerAlumno;

	// 	contador=0;
	

	// 	while(respuesta='si')
	// 	{

	// 	contador=contador+1;
	// 	nombreAlumno=prompt("ingrese su nombre");
	// 	notaAlumno=prompt("ingrese un numero");
	// 	notaAlumno=parseInt(notaAlumno);
		

	// 		while((notaAlumno<0 || notaAlumno>10))
			
	// 		{
	// 		notaAlumno=prompt("error reingrese el "+contador+" nota");										
	// 		notaAlumno=parseInt(notaAlumno);
	// 		}
		
	// 		//sexoAlumno=prompt("ingrese f o m");
		
	// 		while(sexoAlumno!="f"&&sexoAlumno!="m")
		
	// 		{
	// 			sexoAlumno=prompt("ingrese f o m");
	// 		}

	// 		edadAlumno=prompt("ingrese el"+contador+"edad")
	// 		edadAlumno=parseInt(edadAlumno)

			
	// 		while((edadAlumno<0 || edadAlumno>100))
			
	// 		{
	// 		edadAlumno=prompt("error reingrese el "+contador+" nota")										
	// 		edadAlumno=parseInt(edadAlumno);
	// 		}



	// 		//termino el ingreso
			
			
	// 		if (sexoAlumno=="f")
	// 		{
	// 			contadorDeMujeres=contadorDeMujeres+1;
	// 		}


	// 		if(contador==1) //sirve para sacar cualquier maximo y minimo
	// 		{
				
	// 			mejorNota=notaAlumno; 
	// 			peorNota=notaAlumno;
	// 			//edadPrimerAlumno=edad; //aca otra variable ///todas las q son del primer ingreso
	// 		}
	// 		else
	// 		{

	// 			if(notaAlumno>mejorNota)
	// 			{
	// 				mejorNota=notaAlumno;	//mejor nota hay q buscarla aca es una asignacion(importante para el parcial)
	// 				mejorNotaNombre=nombre;
	// 			}

	// 			if(notaAlumno<peorNota)
	// 			{
	// 				peorNota=notaAlumno;
	// 			}




	// 			acumulador=acumulador+notaAlumno;
	// 			respuesta=prompt("si para seguir");

	// 		} //fin else



	// 	}
		
		
			
			

	// 		promedioNotas=acumulador/contador;/// se hace afuera
	// 		console.log("contador"+contador);
	// 		console.log("acumulador"+acumulador);
	// 		console.log("mejorNota"+mejorNota);
	// 		console.log("peorNota"+peorNota);


}//FIN DE LA FUNCIÓN