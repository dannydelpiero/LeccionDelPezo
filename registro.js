var estudiantes=[];
var regla=[];
/*
estudiantes.push(["nombre","genero",edad,nota,ciudad,lenguajefavorito,estatrabajando]); */
regla.push(["NOMBRE: ","GENERO: ","EDAD: ","NOTA: ","CIUDAD: ","LENGUAJE FAVORITO: ","ESTA TRABAJANDO: "]);
estudiantes.push(["diego","masculino",20,100,"salinas","php","si"]);
estudiantes.push(["sofia","femenino",25,100,"la libertad","sql","si"]);
estudiantes.push(["carolina","femenino",28,90,"salinas","java","si"]);
estudiantes.push(["samantha","femenino",19,70,"santa elena","visual","no"]);
estudiantes.push(["carlos","masculino",25,80,"guayaquil","css","no"]);

function printList(list)
{
	var listHTML= '<ul>';
		
			for (var i=0; i<list.length; i+= 1)

			{
				listHTML += '<li>Nombre: '  +estudiantes[i][0]+'<br>';
				listHTML += 'Genero: '+estudiantes[i][1]+'<br>'  ;
				listHTML += 'Edad: '+estudiantes[i][2]+'<br>'  ;
				listHTML += 'Nota: '+estudiantes[i][3]+'<br>'  ;
				listHTML += 'Ciudad: '+estudiantes[i][4]+'<br>';
				listHTML += 'Lenguaje Favorito: '+estudiantes[i][5]+'<br>';
				listHTML += 'Esta trabajando: '+estudiantes[i][6]+'<br>' +'</li>';
			}	
		

		listHTML += '</ul>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}


while(true)
{
	buscar= prompt("Para imprimir listado presiona L . Para salir presiona S. Ingrese estudiante a buscar:");

	if(buscar === "s" || buscar === "S")
	{
		break;
	}
	if(buscar ==="l" || buscar ==="L")
	{
		printList(estudiantes);
	}
	
}