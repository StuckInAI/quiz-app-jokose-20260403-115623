'use client';

import styles from './QuestionCard.module.css';
import type { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  answered: boolean;
  onSelect: (index: number) => void;
}

export default function QuestionCard({
  question,
  selectedOption,
  answered,
  onSelect,
}: QuestionCardProps) {
  const getOptionClass = (index: number): string => {
    if (!answered) {
      return selectedOption === index ? styles.optionSelected : styles.option;
    }
    if (index === question.correctAnswer) return styles.optionCorrect;
    if (index === selectedOption) return styles.optionWrong;
    return styles.option;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onSelect(index)}
            disabled={answered}
          >
            <span className={styles.optionLetter}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className={styles.optionText}>{option}</span>
            {answered && index === question.correctAnswer && (
              <span className={styles.icon}>✓</span>
            )}
            {answered && index === selectedOption && index !== question.correctAnswer && (
              <span className={styles.icon}>✗</span>
            )}
          </button>
        ))}
      </div>
      {answered && (
        <div className={styles.explanation}>
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}
