function mostrar()
{

var sexo;
sexo=prompt("ingrese f ó m .");
""
while(sexo!="f" && sexo!="m")
{
sexo=prompt("el sexo es incorrecto,reingrese su sexo")
}


document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN