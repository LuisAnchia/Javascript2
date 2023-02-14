//personaProto, prototipo 
//este va incluir los metodos caminar, saludar y comer 

const personaProto = {
  caminar: function() {
    console.log("Voy a salir a caminar.");
  },
  saludar: function() {
    console.log(`Hola mi nombre es. ${this.nombre}.`); //Esto es una interpolación 
  },
  comer: function() {
    console.log("Hoy comere papas fritas.");
  }
};

//estudianteProto, Prototipo
//va a incluir los métodos: estudiar y dormir. 
//Este prototipo debe tener como prototipo "personaProto". 
const estudianteProto = Object.create(personaProto); // incluido como prototipo personaProto
estudianteProto.dormir = function() {
  console.log("Voy a estar durmiendo hoy.");
};
estudianteProto.estudiar = function() {
  console.log("Voy a estar estudiando para el examen.");
};


//Utilizamos Object.create() para crear los prototipos estudianteProto y profesorProto. 
//Estos prototipos se crean al utilizar Object.create(personaProto),
//lo que significa que el prototipo de estudianteProto y profesorProto es personaProto.


//profesorProto, Prototipo incluye los métodos: enseñar y calificar
//Este prototipo debe tener como prototipo "personaProto"
const profesorProto = Object.create(personaProto); // incluido como prototipo personaProto
profesorProto.calificar = function() {
  console.log("Estare calificando sus examenes.");
};

profesorProto.enseñar = function() {
  console.log("Estare enseñando la materia hoy.");
};

// EstudianteConstructor, Constructor (Si no me equivoco son constructores custom)
// Que acepte como parámetros nombre, edad y escuela
// Este constructor debe crear objetos que tengan como prototipo "estudianteProto
function EstudianteConstructor(nombre, edad, escuela) {
  this.nombre = nombre;
  this.edad = edad;
  this.escuela = escuela;
}
EstudianteConstructor.prototype = estudianteProto;
//cualquier objeto creado utilizando EstudianteConstructor como constructor ahora heredará todas 
//las propiedades y métodos definidos en estudianteProto.

// ProfesorConstructor, Constructor que acepte como parámetros nombre, carrera y escuela
function ProfesorConstructor(carrera, nombre, escuela) {
  this.nombre = carrera;
  this.carrera = nombre;
  this.escuela = escuela;
}
ProfesorConstructor.prototype = profesorProto; // crear objetos que tengan como prototipo "profesorProto".

// Crear objetos de EstudianteConstructor
const estudianteA = new EstudianteConstructor("Luis", 26, "Cetav");
const estudianteB = new EstudianteConstructor("Bri", 22, "UCR");
const estudianteC = new EstudianteConstructor("Felipe", 22, "CER");

// Llamar a métodos de personaProto y estudianteProto
estudianteA.saludar(); // Hola mi nombre es. Luis.
estudianteB.caminar(); // Voy a salir a caminar.
estudianteA.estudiar(); // Voy a estar estudiando para el examen.
estudianteB.comer(); // Hoy comere papas fritas.
estudianteA.dormir(); // Voy a estar durmiendo hoy.
estudianteC.saludar(); // Hola mi nombre es. Felipe.
estudianteC.caminar(); // Voy a salir a caminar.
estudianteC.estudiar(); // Voy a estar estudiando para el examen.
estudianteC.comer(); // Hoy comere papas fritas.
estudianteC.dormir(); //Voy a estar durmiendo hoy.


// ProfesorConstructor, creaión de objetos
const ProfesorA = new ProfesorConstructor("Briana", "Mercadeo", "INA");
const ProfesorB = new ProfesorConstructor("Pedro", "Mate", "UNA");
const ProfesorC = new ProfesorConstructor("Karina", "Diseño", "Cetav");

//personaProto y profeorProto, llamaremos los metodos
ProfesorA.saludar(); //Hola mi nombre es. Briana.
ProfesorB.caminar(); // Voy a salir a caminar.
ProfesorA.enseñar(); // Estare enseñando la materia hoy.
ProfesorB.calificar(); // Estare calificando sus examenes.
ProfesorA.comer(); // Hoy comere papas fritas.
ProfesorC.saludar(); // Hola mi nombre es. Karina.
ProfesorC.caminar(); // Voy a salir a caminar.
ProfesorC.enseñar(); // Estare enseñando la materia hoy.
ProfesorC.calificar(); //Estare calificando sus examenes.