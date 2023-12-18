' use stric'
// Partiendo del siguiente array, realizar las operaciones necesario para ordenar los días de la semana:

// let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

// Eliminar el día domingo del inicio de la lista.
// Agregar el día lunes al inicio de la lista.
// Agregar el día domingo al final de la lista.
// Insertar el día viernes en la posición correspondiente.
// Mostrar en pantalla de elemento en elemento usando un for.
// // Usar los métodos: push, pop, shift, unshift, splice



let Week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];

// 1.
Week.shift();

// 2.
Week.unshift('Monday');

// 3.
Week.push('Sunday');

// 4.
Week.splice(4,0,'Friday');


// 5.
for (let i = 0;i<Week.length; i++){
    //     // bloque code
    // alert( `${i+1} ${Week[i]}`);
    alert (`${Week[i]}`);
}




// Lunes – Monday (Mondei)
// Martes – Tuesday (Tusdei)
// Miércoles – Wednesday (Güensdei)
// Jueves – Thursday (Tursdei)
// Viernes – Friday (Fraidei)
// Sábado – Saturday (Saturdei)
// Domingo – Sunday (Sonde