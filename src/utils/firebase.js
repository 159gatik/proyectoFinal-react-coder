// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, addDoc, getFirestore, getDocs, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-34755-2022-rojas.firebaseapp.com",
    projectId: "react-34755-2022-rojas",
    storageBucket: "react-34755-2022-rojas.appspot.com",
    messagingSenderId: "405870334781",
    appId: "1:405870334781:web:8dba37cdc40bbf1e4d6b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()


const cargarBaseDeDatos = async () => {
    const promise = await fetch('../json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            categoria: producto.idCategoria,
            stock: producto.stock,
            precio: producto.precio,
            img: producto.img
        })
    })
}


const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    return producto
}


const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
}



export { cargarBaseDeDatos, getProductos, getProducto }