import React, { useState, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { VscDebugRestart } from "react-icons/vsc";
import ExplanationComponent from './Explanation';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { quizData } from '@/data/quizData';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const loadingBarRef = useRef<LoadingBarRef>(null);

  const totalQuestions = quizData.length;
  const maxScore = 100;

  const handleAnswer = (isTrue: boolean) => {
    const isCorrect = quizData[currentQuestion].isTrue === isTrue;
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    }

    setUserAnswer(isCorrect);
    setShowExplanation(true);
    loadingBarRef.current?.continuousStart();

    setTimeout(() => {
      setShowExplanation(false);
      setUserAnswer(null);
      loadingBarRef.current?.complete();

      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
      }
    }, 5000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswers(0);
    setQuizFinished(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className={`min-h-screen pt-20 flex flex-col`}>
      <div
        className="container flex justify-center items-center bg-white rounded-lg shadow-lg min-h-[800px] min-w-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(106, 90, 205, 0.5))',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <LoadingBar color="#f11946" ref={loadingBarRef} />

        {quizFinished ? (
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center text-center bg-white py-10 rounded-lg shadow-lg w-full">
              <p className="absolute -translate-y-16 bg-green-600 text-white text-2xl font-bold lg:w-1/4 w-1/2 rounded-md py-2">
                Kuis selesai!
              </p>
              <p className="text-2xl font-bold bg-white p-5 rounded-lg">
                Anda Benar {correctAnswers} dari {totalQuestions}
                <br /> Skor Anda: <br />
              </p>

              <div className="text-4xl font-bold text-kuning p-5 rounded-full bg-biru mb-10">
                {Math.round((correctAnswers / totalQuestions) * maxScore)}
              </div>
              <button
                onClick={toggleExplanation}
                className="items-center lg:w-3/4 w-3/4 flex h-14 bg-white border text-primary border-black rounded-full text-lg hover:bg-accent mb-4"
              >
                <span className="ml-6">{showExplanation ? 'Tutup Pembahasan' : 'Lihat Pembahasan'}</span>
              </button>

              {showExplanation && <ExplanationComponent quizData={quizData} />}
              <button
                onClick={restartQuiz}
                className="relative lg:w-3/4 mt-5 w-3/4 flex h-14 pl-5 bg-accent text-primary py-3 border border-black rounded-full text-lg hover:text-white hover:bg-accent"
              >
                <span className="ml-6">Mulai Lagi!</span>
                <div className="absolute bg-secondary text-white rounded-full flex justify-center items-center h-14 w-14 right-0 bottom-0">
                  <VscDebugRestart className="text-2xl" />
                </div>
              </button>
            </div>
          </div>
        ) : showExplanation ? (
          <div className="bg-white rounded-lg shadow-lg lg:w-3/4 py-6 px-10 w-full">
            <div className="text-center w-full">
              {userAnswer ? (
                <div className="flex items-center text-center justify-center gap-3 mb-6 text-green-600">
                  <p className="flex justify-center text-3xl font-bold items-center">Benar!</p>
                  <FaCheckCircle size={20} />
                </div>
              ) : (
                <div className="flex items-center text-center justify-center gap-3 mb-6 text-red-600">
                  <p className="flex justify-center text-3xl font-bold items-center">Salah!</p>
                  <FaTimesCircle size={20} />
                </div>
              )}
              <p className="text-3xl font-bold">Faktanya:</p>
              <p className="mt-2 text-justify">{quizData[currentQuestion].explanation}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6 px-10 w-full">
            <div className="flex flex-col items-center text-center bg-white py-10 rounded-lg shadow-lg w-full">
              <p className="absolute -translate-y-16 text-primary bg-accent text-lg font-bold lg:w-1/4 w-1/2 rounded-md py-2">
                Soal {currentQuestion + 1} dari {totalQuestions}
              </p>
              <p className="mt-4 bg-white py-8 rounded-lg lg:text-xl px-2">
                {quizData[currentQuestion].question}
              </p>
              <div className="mt-4 flex flex-col justify-center gap-4 w-full items-center">
                <button
                  className="flex items-center justify-between w-[75%] lg:w-[50%] py-2 px-4 bg-green-400 text-white font-bold rounded-full hover:bg-green-500 shadow-lg"
                  onClick={() => handleAnswer(true)}
                >
                  BENAR
                  <FaCheckCircle className="ml-2 inline-block text-lg" />
                </button>
                <button
                  className="flex items-center justify-between w-[75%] lg:w-[50%] py-2 px-4 bg-red-400 text-white font-bold rounded-full hover:bg-red-500 shadow-lg"
                  onClick={() => handleAnswer(false)}
                >
                  SALAH
                  <FaTimesCircle className="ml-2 inline-block text-lg" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
