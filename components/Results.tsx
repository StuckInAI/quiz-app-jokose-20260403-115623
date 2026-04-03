'use client';

import styles from './Results.module.css';
import type { Question } from '@/data/questions';

interface ResultsProps {
  score: number;
  total: number;
  answers: number[];
  questions: Question[];
  onRestart: () => void;
}

export default function Results({ score, total, answers, questions, onRestart }: ResultsProps) {
  const percentage = Math.round((score / total) * 100);

  const getEmoji = () => {
    if (percentage >= 80) return '🏆';
    if (percentage >= 60) return '👍';
    if (percentage >= 40) return '📚';
    return '💪';
  };

  const getMessage = () => {
    if (percentage >= 80) return 'Excellent work!';
    if (percentage >= 60) return 'Good job!';
    if (percentage >= 40) return 'Keep studying!';
    return 'Better luck next time!';
  };

  return (
    <div className={styles.container}>
      <div className={styles.scoreSection}>
        <div className={styles.emoji}>{getEmoji()}</div>
        <h2 className={styles.message}>{getMessage()}</h2>
        <div className={styles.scoreCircle}>
          <span className={styles.scoreNumber}>{percentage}%</span>
          <span className={styles.scoreLabel}>{score} / {total} correct</span>
        </div>
      </div>

      <div className={styles.review}>
        <h3 className={styles.reviewTitle}>Review Answers</h3>
        {questions.map((q, qIndex) => {
          const isCorrect = answers[qIndex] === q.correctAnswer;
          return (
            <div key={qIndex} className={isCorrect ? styles.reviewItemCorrect : styles.reviewItemWrong}>
              <div className={styles.reviewQuestion}>
                <span className={styles.reviewIcon}>{isCorrect ? '✓' : '✗'}</span>
                <span>{q.question}</span>
              </div>
              {!isCorrect && (
                <div className={styles.reviewDetails}>
                  <p className={styles.yourAnswer}>Your answer: {q.options[answers[qIndex]]}</p>
                  <p className={styles.correctAnswer}>Correct answer: {q.options[q.correctAnswer]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className={styles.restartButton} onClick={onRestart}>
        🔄 Play Again
      </button>
    </div>
  );
}
