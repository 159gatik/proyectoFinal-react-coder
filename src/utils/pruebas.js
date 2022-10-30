import { UpdateRounded } from '@mui/icons-material';
import { createProducto, updateProducto, getProducto, deleteProducto, createOrdenDeCompra, getOrdenDeCompra } from './firebase.js'


const producto = {
    "idCategoria": "indumentaria",
    "nombre": "Zapatilla",
    "marca": "Topper",
    "precio": 10000,
    "stock": 20,
    "img": "https://firebasestorage.googleapis.com/v0/b/react-34755-2022-rojas.appspot.com/o/Imagenes%2Fvenzo-primal.jpg?alt=media&token=4594d60a-2dba-40a4-9f2f-ea6c366d94c1"
}

// createProducto(producto).then(estado => console.log(estado))

// getProducto("uyJix1iyhs1Iz4gkFUBf").then(producto => {
//     console.log(producto);
// })

// getProducto("uyJix1iyhs1Iz4gkFUBf").then(producto => {
//     const prod = producto
//     prod.stock = 10
//     updateProducto("uyJix1iyhs1Iz4gkFUBf", prod)
// })

// deleteProducto("uyJix1iyhs1Iz4gkFUBf").then(estado => {
//     console.log(estado);
// })


// createOrdenDeCompra(120000, "pepe", "Perez", "p@f.com", 13213, "Calle Falsa").then(orden => {
//     console.log(orden.nombre)
// })

getOrdenDeCompra("jUsTJWd19rrGsU5hj85d").then(orden => {
    console.log({ ...orden.data() });
})