// Lista de tareas
let tareas = [];

// Función principal del menú
function mostrarMenu() {
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(
      `GESTOR DE TAREAS\n\n` +
      `[1] Ver tareas\n` +
      `[2] Agregar tarea\n` +
      `[3] Marcar tarea como completada\n` +
      `[4] Eliminar tarea\n` +
      `[5] Ver tareas completadas\n` +
      `[6] Ver tareas pendientes\n` +
      `[0] Salir\n\n` +
      `Elige una opción:`
    );

    switch (opcion) {
      case "1":
        verTareas();
        break;
      case "2":
        agregarTarea();
        break;
      case "3":
        marcarTarea();
        break;
      case "4":
        eliminarTarea();
        break;
      case "5":
        verCompletadas();
        break;
      case "6":
        verPendientes();
        break;
      case "0":
        alert("¡Hasta luego!");
        break;
      default:
        alert("Opción no válida. Intenta de nuevo.");
    }
  }
}



//Funcion Agregar Tarea
function agregarTarea() {
    let descripcion = prompt("Escribe la descripción de la nueva tarea:");
  
    if (!descripcion) {
      alert("No se agregó ninguna tarea.");
      return;
    }
  
    let nuevaTarea = {
      descripcion: descripcion.trim(),
      completada: false
    };
  
    tareas.push(nuevaTarea);
    alert("Tarea agregada correctamente.");
  }
  

//Función Ver Tareas
function verTareas() {
    if (tareas.length === 0) {
      alert("No hay tareas registradas.");
      return;
    }
  
    let mensaje = "TUS TAREAS:\n\n";
  
    tareas.forEach((tarea, index) => {
      let estado = tarea.completada ? "✅" : "⏳";
      mensaje += `[${index}] ${estado} ${tarea.descripcion}\n`;
    });
  
    alert(mensaje);
  }

  
//Llamamos al menú para iniciar la app
mostrarMenu();