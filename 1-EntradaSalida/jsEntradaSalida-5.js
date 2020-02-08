/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;
	var edad;
	var fraseUno
	var fraseDos
    
	fraseUno= "su nombre es "
	fraseDos= " y su edad es "

    nombre=document.getElementById('elNombre').value;
    edad=document.getElementById('laEdad').value;


    alert(fraseUno + nombre + fraseDos + edad) ;









}

