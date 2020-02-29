/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	var respuesta="si";
	var contador=0;

	while(respuesta!="no")
	{
		contador++;
		do
		{
			edad=prompt("porfavor ingrese su edad");
			edad=parseInt(edad);
		}
		while(isNaN(edad)||edad<18||edad>90);
		
		do
		{
			sexo=prompt("porfavor ingrese su sexo");
			
		}
		while(!isNaN(sexo)||sexo!="f"&&sexo!="m");

		do
		{
			estadoCivil=prompt("porfavor ingrese su estadoCivil, soletero, casado, divorciado o viudo");
			
		}
		while(!isNaN(estadoCivil)||estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="divorciado"&&estadoCivil!="viudo");
		




		do
		{
			sueldoBruto=prompt("porfavor ingrese su sueldoBruto");
			sueldoBruto=parseInt(sueldoBruto);
		}
			
		while(isNaN(sueldoBruto)||sueldoBruto>8000);

		do
		{
			legajo=prompt("porfavor ingrese su legajo solo nros");
			legajo=parseInt(legajo);
		}
			
		while(isNaN(legajo));

		do
		{
			nacionalidad=prompt("porfavor ingrese su nacionalidad, a para argentinos e para extranjros y n para nacionalizados");
			
		}
			
		while(!isNaN(nacionalidad)||nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n");




	



		respuesta=prompt("desea continuar? <no> para terminar")


	}//while principal
	

	

	document.getElementById('EstadoCivil').value=estadoCivil
	document.getElementById('Nacionalidad').value=nacionalidad;
	document.getElementById('Edad').value=edad
	document.getElementById('Sueldo').value=sueldoBruto
	document.getElementById('Legajo').value=legajo
	document.getElementById('Sexo').value=sexo









}
