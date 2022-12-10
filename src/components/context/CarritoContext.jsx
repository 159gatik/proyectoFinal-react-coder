import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")) || []);
  }, []);

  const agregarProducto = (producto, cantidad) => {
    const itemEncontrado = carrito.find(
      (item) => item.producto.id === producto.id
    );

    let carritoNuevo;

    if (itemEncontrado) {
      // si el produco no esta en el array
      itemEncontrado.cantidad += cantidad;
      carritoNuevo = [...carrito];
    } else {
      carritoNuevo = [...carrito, { producto, cantidad }];
    }

    setCarrito(carritoNuevo);
    guardarCarrito(carritoNuevo);

    Swal.fire({
      icon: "success",
      title: "Agregado al carrito con exito",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  const guardarCarrito = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const quitarProducto = (prod) => {
    const aux = carrito;
    let indice = aux.findIndex((producto) => producto.id === prod.id);
    aux.splice(indice, 1);
    let carritoNuevo = structuredClone(aux);
    setCarrito(carritoNuevo);
    guardarCarrito(carritoNuevo);
  };

  const vaciarCarrito = () => {
    let carritoNuevo = [];
    setCarrito(carritoNuevo);
    guardarCarrito(carritoNuevo);
    Swal.fire({
      icon: "warning",
      title: "Se vacio el carrito con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const compraRealizada = (idCompra) => {
    let carritoNuevo = [];
    setCarrito(carritoNuevo);
    guardarCarrito(carritoNuevo);

    Swal.fire({
      icon: "success",
      title: "COMPRA REALIZADA",
      text: "QUE LA DISFRUTES!. Tu número de compra es: " + idCompra,
      showConfirmButton: true,
      timer: 20000,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  };

  const formatearMonto = (monto) => {
    return (
      "$ " +
      monto.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const getCantidadTotal = () => {
    let resultado = 0;
    carrito.forEach((item) => {
      resultado += item.producto.precio * item.cantidad;
    });
    return resultado;
  };

  return (
    <>
      <CarritoContext.Provider
        value={{
          carrito,
          agregarProducto,
          quitarProducto,
          vaciarCarrito,
          compraRealizada,
          formatearMonto,
          getCantidadTotal,
        }}
      >
        {props.children}
      </CarritoContext.Provider>
    </>
  );
};

export { CarritoContext, CarritoProvider };
