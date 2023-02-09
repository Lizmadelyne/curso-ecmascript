import fetch from "node-fetch";

const Api = await fetch ('https://api.escuelajs.co/api/v1/products');
const products = await  Api.json();

export { products };

