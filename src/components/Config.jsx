import React, { useState } from "react";
import Option from "./Option";
const Config = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkboxes, setCheckboxes] = useState({
        cuartil: true,
        decil: true,
        percentil: true
    });

    const toggleConfig = () => {
        setIsOpen(!isOpen);
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const updatedCheckboxes = { ...checkboxes, [name]: checked };

        // Verificar si al menos una opción está seleccionada
        const isAnyChecked = Object.values(updatedCheckboxes).some((value) => value);
    
        // Si no hay ninguna opción seleccionada, no permitir la deselección
        if (!isAnyChecked) {
          return;
        }
    
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <>
            <div className="flex items-center justify-center mt-5 cursor-pointer" onClick={toggleConfig}>
                <p className="text-2xl text-center justify-center">Configuración {isOpen}</p>
                <img className="mx-2" src="config.svg" alt="" width="30px" />
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleConfig}>
                    <div className="bg-gray-800 p-10 rounded-xl z-60" onClick={(e) => e.stopPropagation()}>
                        <h2>Selecciona tus opciones</h2>
                        <div className="flex flex-col my-3">
                            <Option name="cuartil" checked={checkboxes.cuartil} handleCheckboxChange={handleCheckboxChange}></Option>
                            <Option name="decil" checked={checkboxes.decil} handleCheckboxChange={handleCheckboxChange}></Option>
                            <Option name="percentil" checked={checkboxes.percentil} handleCheckboxChange={handleCheckboxChange}></Option>
                        </div>
                        <button onClick={toggleConfig}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    )
};

export default Config;