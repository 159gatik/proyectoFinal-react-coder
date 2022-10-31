import React from 'react';

const Contacto = () => {

    const formularioReferenciado = React.useRef()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(formularioReferenciado.current)
        console.log(Object.fromEntries(datosFormulario));
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={consultarFormulario} ref={formularioReferenciado}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="consulta" className="form-label">Consulta</label>
                        <textarea className="form-control" name="consulta" rows={3} defaultValue={"Escriba su consulta"} />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar consulta</button>
                </form>
            </div>
        </>
    );
}

export default Contacto;
