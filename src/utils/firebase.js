// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-rojas.firebaseapp.com",
  projectId: "react-34755-2022-rojas",
  storageBucket: "react-34755-2022-rojas.appspot.com",
  messagingSenderId: "405870334781",
  appId: "1:405870334781:web:8dba37cdc40bbf1e4d6b54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBaseDeDatos = async () => {
  const promise = await fetch("../json/productos.json");
  const productos = await promise.json();
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      marca: producto.marca,
      categoria: producto.idCategoria,
      stock: producto.stock,
      precio: producto.precio,
      img: producto.img,
    });
  });
};

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id));
  const prod = { ...producto.data(), id: producto.id };
  return prod;
};

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map((producto) => ({
    ...producto.data(),
    id: producto.id,
  }));
  return items;
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info);
  return estado;
};

const deleteProducto = async (id) => {
  const stateDelete = await deleteDoc(doc(db, "productos", id));
  return stateDelete;
};
const createProducto = async (objetProduct) => {
  const create = await addDoc(collection(db, "productos"), {
    nombre: objetProduct.nombre,
    marca: objetProduct.marca,
    categoria: objetProduct.idCategoria,
    stock: objetProduct.stock,
    precio: objetProduct.precio,
    img: objetProduct.img,
  });
  return create;
};

const createOrdenDeCompra = async ({
  nombre,
  apellido,
  email,
  dni,
  direccion,
  precio,
}) => {
  return addDoc(collection(db, "ordenDeCompra"), {
    nombre,
    apellido,
    email,
    dni,
    direccion,
    precio,
  });
};

const getOrdenDeCompra = async (id) => {
  const ordenDeCompra = await getDoc(doc(db, "ordenDeCompra", id));
  return ordenDeCompra;
};

const getOrdenesDeCompra = async () => {
  const resultado = await getDocs(collection(db, "ordenDeCompra"));

  const items = resultado.docs.map((objeto) => ({
    ...objeto.data(),
    id: objeto.id,
  }));

  return items;
};

export {
  cargarBaseDeDatos,
  getProductos,
  getProducto,
  updateProducto,
  deleteProducto,
  createProducto,
  createOrdenDeCompra,
  getOrdenDeCompra,
  getOrdenesDeCompra,
};
