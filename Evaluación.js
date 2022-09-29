result();

async function result() {
    // It is necessary to show in the console the numbers (1,2) in order. In as few lines as possible
    // Expected result:
    // 1
    // 2
  //Console.log(object)=> Necesario para imprimir información en consola, ; para dividir el código en la misma linea, 1 y 2 son los valores esperados
  console.log(1); console.log(2)
}

// do not change
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
}

// do not change
function promise2() {
    return new Promise((resolve) => {
        resolve(2);
    });
}
