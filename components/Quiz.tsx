'use client';

import { useState } from 'react';
import styles from './Quiz.module.css';
import { questions } from '@/data/questions';
import QuestionCard from './QuestionCard';
import Results from './Results';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...selectedAnswers, selectedOption];
    setSelectedAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
    setAnswered(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>🧠 Quiz App</h1>
          {!showResult && (
            <p className={styles.progress}>
              Question {currentQuestion + 1} of {questions.length}
            </p>
          )}
        </div>

        {!showResult ? (
          <>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <QuestionCard
              question={questions[currentQuestion]}
              selectedOption={selectedOption}
              answered={answered}
              onSelect={handleOptionSelect}
            />
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        ) : (
          <Results
            score={score}
            total={questions.length}
            answers={selectedAnswers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
