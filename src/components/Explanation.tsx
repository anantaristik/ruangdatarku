import { quizData } from '@/data/QuizData';
import React from 'react';

interface ExplanationProps {
    quizData: {
        question: string;
        explanation: string;
    }[];
}

const ExplanationComponent: React.FC<ExplanationProps> = ({ quizData }) => {
    return (
        <div className='bg-white rounded-lg shadow-lg lg:w-3/4 py-6 px-10 w-full max-h-[600px] overflow-y-auto'>
            {quizData.map((item, index) => (
                <div key={index} className="mb-6">
                    <p className="text-2xl font-bold">Pernyataan:</p>
                    <p className="mt-2 text-justify">{item.question}</p>
                    <p className="text-2xl font-bold mt-4">Faktanya:</p>
                    <p className="mt-2 text-justify">{item.explanation}</p>
                    {index !== quizData.length - 1 && <hr className="my-6" />}
                </div>
            ))}
        </div>
    );
};

export default ExplanationComponent;