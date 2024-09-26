import { useState } from "react";

export function ShowAnswer(props) {
    const { answer, others } = props
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleAnswerOptionClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleCheckAnswer = () => {
        setIsSubmitted(true)
    }

    return (
        <>
            <span className="flex flex-col items-center justify-center h-30 transition-opacity ease-in-out delay-500 duration-500 ">
                <div className="answer-section grid grid-cols-2 gap-4">
                    {others.map((option, index) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = option === answer;
                        const color = isSubmitted & isCorrect ? 'green' : (isSubmitted & isSelected & !isCorrect ? 'red' : (!isSubmitted & isSelected) ? 'yellow' : 'gray')
                        return (
                            <label key={index} className={`flex items-center border rounded-lg p-2 shadow-md ${!isSubmitted ? 'cursor-pointer' : ''} border-${color}-500`}>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => handleAnswerOptionClick(option)}
                                    className={`absolute opacity-0 ${!isSubmitted ? 'cursor-pointer' : ''}`}
                                    disabled={isSubmitted}
                                />
                                <span className="ml-2">{option}</span>
                            </label>
                        )
                    })}
                </div>

                <button onClick={handleCheckAnswer} disabled={!selectedAnswer | isSubmitted}
                    className=" mt-10 inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                    <span
                        className="relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    >
                        Enviar respuesta 🫣
                    </span>
                </button>
            </span>
        </>
    )
}