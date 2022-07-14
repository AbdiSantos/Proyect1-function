function keysAndValues(datos) {
    let keys = [];
    let values = [];

    keys.sort();

    for (let key in datos){

        keys.push(key);
        values.push(datos[key]);
    }
    console.log(keys, values);
}

/* keysAndValues({a:1, b:2, C:3})*/
/* keysAndValues({a:"Apple", b:"Microsoft", C:"Google"})*/
/*keysAndValues({key1:true, key2: false, key3:undefined})*/