import { useState } from "react";

export function ShowAnswer(props) {
    const { respuesta } = props
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(show => !show)}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
                <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                    {show ? "Ocultar respuesta 🫣": "Mostrar respuesta 👀"}
                </span>
            </button>

            <span className="flex justify-center h-10 transition-opacity ease-in-out delay-500 duration-500"> 
                {show ?
                    <p className="p-5 text-4xl  lg:text-5xl lg:p-10 ">{respuesta}</p>
                    : <div></div>
                }
            </span>
        </>
    )
}