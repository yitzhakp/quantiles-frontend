import { useState, useEffect } from "react";
import { ShowAnswer } from "./ShowAnswer"
import Option from "./Option";




export function QuestionAndNext(props) {
    const [points, setPoints] = useState(0);
    const [total, setTotal] = useState(0);
    const [question, setQuestion] = useState(0);
    const [problem, setProblem] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [checkboxes, setCheckboxes] = useState({
        cuartil: true,
        decil: true,
        percentil: true
    });


    useEffect(() => {
        fetch(`https://nutritious-sallyanne-yitzhakp-2ef75de7.koyeb.app/?cuartil=${checkboxes.cuartil}&decil=${checkboxes.decil}&percentil=${checkboxes.percentil}`)
            .then(respuesta => respuesta.json())
            .then(datos => setProblem(datos))
            .catch(error => console.error(error));
    }, [question]);

    const nextQuestion = () => {
        setQuestion(question + 1);
        if (!isSubmitted) {
            setTotal(total + 1);
        }
        setSelectedAnswer('');
        setIsSubmitted(false)

    }

    const oneMoreTotal = () => {
        setTotal(total + 1);
    }

    const oneMorePoint = () => {
        setPoints(points + 1);
    }

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
            <p className="mt-5 text-xl">Score: {points}/{total}</p>
            {problem ? (
                <article className="w-9/10 mt-5 p-5 bg-[#13151a] rounded flex-col pb-10 lg:mt-15 lg:pb-20">
                    <p className="px-18 mb-5 text-3xl ">
                        {problem.question}
                    </p>
                    <ShowAnswer selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} oneMorePoint={oneMorePoint} oneMoreTotal={oneMoreTotal} answer={problem.answer} others={problem.others} client:visible></ShowAnswer>
                </article>
            ) : (
                <p>Loading...</p>
            )}

            <div className="mt-10 mb-16 flex w-3/5 min-w-80 justify-around items-center">
                <div className="flex items-center justify-center cursor-pointer" onClick={toggleConfig}>
                    <p className="text-base text-center justify-center lg:text-2xl">Configuración {isOpen}</p>
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
                    </div>)}

                <button onClick={nextQuestion}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 lg:mt-5"
                >
                    <span
                        className="relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                        Siguiente
                    </span>
                </button>
            </div>
        </>
    )
}
