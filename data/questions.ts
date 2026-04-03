export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    explanation: 'Paris is the capital and most populous city of France.',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    explanation: 'Mars is called the Red Planet because of its reddish appearance caused by iron oxide on its surface.',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    explanation: 'The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth\'s surface.',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    explanation: 'Romeo and Juliet was written by William Shakespeare around 1594–1596.',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'The chemical symbol for gold is Au, derived from the Latin word "Aurum".',
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'A hexagon is a polygon with exactly six sides and six angles.',
  },
  {
    question: 'Which country is home to the kangaroo?',
    options: ['New Zealand', 'South Africa', 'Brazil', 'Australia'],
    correctAnswer: 3,
    explanation: 'Kangaroos are native to Australia and are one of the country\'s most iconic animals.',
  },
  {
    question: 'What is the fastest land animal?',
    options: ['Lion', 'Horse', 'Cheetah', 'Leopard'],
    correctAnswer: 2,
    explanation: 'The cheetah is the fastest land animal, capable of reaching speeds up to 70–75 mph (112–120 km/h).',
  },
  {
    question: 'In what year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: 2,
    explanation: 'World War II ended in 1945, with Germany surrendering in May and Japan in September.',
  },
  {
    question: 'What is the smallest prime number?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 2,
    explanation: '2 is the smallest and the only even prime number. 0 and 1 are not considered prime numbers.',
  },
];
