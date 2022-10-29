import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';
const CarritoContext = createContext()


const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto, cantidad) => {
        setCarrito([...carrito, { producto, cantidad }])
        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito con exito',
            showConfirmButton: true,
            timer: 1500
        })
    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == prod.id)
        aux.splice(indice, 1)
        setCarrito(structuredClone(aux))
        console.log(carrito)
    }
    const vaciarCarrito = () => {
        setCarrito([])
        Swal.fire({
            icon: 'warning',
            title: 'Se vacio el carrito con exito',
            showConfirmButton: false,
            timer: 1500
        })

    }

    return (
        <>

            <CarritoContext.Provider value={{ carrito, agregarProducto, quitarProducto, vaciarCarrito }}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export { CarritoContext, CarritoProvider };
