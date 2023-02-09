//espresiones regulares
//son ´patrones de busqueda y manipulacion de cadenas de caracteres increiblemenre potentes
//ejemplo la fecha
//usa varios metodos en rejex como: matchall
//replaceall que use en manipulacion del DOM

const regex =/(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-04-02');
console.table(matchers);