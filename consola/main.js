/* Checking if 5 is greater than 3. */
console.assert(5<3);

console.clear();

console.error("ououou");

console.info("jejejej"); //como el log pero este ult es de depuraciopn

console.table([1,2,4,1,4,6,7,53,4,45,6,56,7,432,8]);

console.warn("zzz");

console.dir([1,2,4,1,4,6,7,53,4,45,6,56,7,432,8]);

console.count();
console.count();
console.count();
console.count();
console.count();
console.countReset();
console.count();

console.group("saludos");
console.log("hola");
console.log("hola");

console.groupEnd();
console.log("aqui termina el grupo");
console.log("aqui termina el grupo");

console.groupCollapsed("another");
console.log("dentro del grupò cerrado");
console.groupEnd();
console.log("aqui termina el grupo");

console.time();
console.timeLog();
console.timeEnd();

console.clear();
console.log("%chola", "color:red; background:black;padding:20px 100px;border:3px solid blue;border-radius:15%;");