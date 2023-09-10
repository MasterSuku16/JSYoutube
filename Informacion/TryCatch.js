try {
    //llamado al backend (a traves de una API)
    console.log('llamado al backend');
} catch (error) {
    //Se obtiene el error y se realiza una funcion o algo
    console.log('algo fallo');
}finally{
    //se ejecuta siempre por mas que falle o no
    console.log('se ejecuta siempre');
}