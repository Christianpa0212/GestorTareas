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

//Funcion para cambiar el estado de la tarea
function marcarTarea() {
    if (tareas.length === 0) {
      alert("📭 No hay tareas para marcar.");
      return;
    }
  
    let lista = "📋 TAREAS DISPONIBLES:\n\n";
  
    tareas.forEach((tarea, index) => {
      let estado = tarea.completada ? "✅" : "⏳";
      lista += `[${index}] ${estado} ${tarea.descripcion}\n`;
    });
  
    let indice = prompt(lista + "\nEscribe el número de la tarea a marcar como completada:");
  
    if (indice === null || indice.trim() === "") {
      alert("No se seleccionó ninguna tarea.");
      return;
    }
  
    indice = parseInt(indice);
  
    if (isNaN(indice) || indice < 0 || indice >= tareas.length) {
      alert("Índice inválido.");
      return;
    }
  
    if (tareas[indice].completada) {
      alert("La tarea ya estaba marcada como completada.");
      return;
    }
  
    tareas[indice].completada = true;
    alert("Tarea marcada como completada.");
  }


//Funcion eliminar tareas
function eliminarTarea() {
    if (tareas.length === 0) {
      alert("📭 No hay tareas para eliminar.");
      return;
    }
  
    let lista = "🗑️ TAREAS DISPONIBLES:\n\n";
  
    tareas.forEach((tarea, index) => {
      let estado = tarea.completada ? "✅" : "⏳";
      lista += `[${index}] ${estado} ${tarea.descripcion}\n`;
    });
  
    let indice = prompt(lista + "\n🖊️ Escribe el número de la tarea que deseas eliminar:");
  
    if (indice === null || indice.trim() === "") {
      alert("❌ No se seleccionó ninguna tarea.");
      return;
    }
  
    indice = parseInt(indice);
  
    if (isNaN(indice) || indice < 0 || indice >= tareas.length) {
      alert("⚠️ Índice inválido.");
      return;
    }
  
    const confirmacion = confirm(`¿Estás seguro de eliminar la tarea: "${tareas[indice].descripcion}"?`);
  
    if (confirmacion) {
      tareas.splice(indice, 1);
      alert("🗑️ Tarea eliminada correctamente.");
    } else {
      alert("❎ Eliminación cancelada.");
    }
  }



//Función ver completadas
  function verCompletadas() {
    const completadas = tareas.filter(tarea => tarea.completada);
  
    if (completadas.length === 0) {
      alert("📭 No hay tareas completadas aún.");
      return;
    }
  
    let mensaje = "✅ TAREAS COMPLETADAS:\n\n";
  
    completadas.forEach((tarea, index) => {
      mensaje += `• ${tarea.descripcion}\n`;
    });
  
    alert(mensaje);
  }

//Funcion Ver Pendientes
  function verPendientes() {
    const pendientes = tareas.filter(tarea => !tarea.completada);
  
    if (pendientes.length === 0) {
      alert("📭 No tienes tareas pendientes. ¡Buen trabajo!");
      return;
    }
  
    let mensaje = "⏳ TAREAS PENDIENTES:\n\n";
  
    pendientes.forEach((tarea, index) => {
      mensaje += `• ${tarea.descripcion}\n`;
    });
  
    alert(mensaje);
  }
  
//Llamamos al menú para iniciar la app
mostrarMenu();