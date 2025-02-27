import { useState, useEffect } from "react";
import { ShowAnswer } from "./ShowAnswer"



export function QuestionAndNext(props) {
    const [points, setPoints] = useState(0);
    const [total, setTotal] = useState(0);
    const [question, setQuestion] = useState(0);
    const [problem, setProblem] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('');


    useEffect(() => {
        fetch('https://nutritious-sallyanne-yitzhakp-2ef75de7.koyeb.app/')
            .then(respuesta => respuesta.json())
            .then(datos => setProblem(datos))
            .catch(error => console.error(error));
    }, [question]);

    const nextQuestion = () => {
        setQuestion(question + 1);
        if (selectedAnswer === ""){
            setTotal(total + 1);
            return
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


    return (
        <>
            <p className="mt-5 text-xl">Score: {points}/{total}</p>
            {problem ? (
                <article className="w-9/10 my-5 p-5 bg-[#13151a] rounded flex-col pb-10 lg:mt-15 lg:pb-20">
                    <p className="p-10 text-3xl ">
                        {problem.question}
                    </p>
                    <ShowAnswer selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} oneMorePoint={oneMorePoint} oneMoreTotal={oneMoreTotal} answer={problem.answer} others={problem.others} client:visible></ShowAnswer>
                </article>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={nextQuestion}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 lg:m-10"
            >
                <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                    Siguiente 🏅
                </span>
            </button>
        </>
    )
}
