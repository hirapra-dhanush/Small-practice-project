import React, { useState } from 'react';

function Qna() {
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const quiz = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'],
      answer: 'New Delhi',
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: [
        'Charles Dickens',
        'J.K. Rowling',
        'William Shakespeare',
        'Mark Twain',
      ],
      answer: 'William Shakespeare',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter',
    },
    {
      question: 'In which year did the first man land on the moon?',
      options: ['1965', '1969', '1972', '1980'],
      answer: '1969',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2', 'H2O', 'HO2'],
      answer: 'H2O',
    },
    {
      question: "Who is known as the 'Father of Computers'?",
      options: [
        'Albert Einstein',
        'Isaac Newton',
        'Charles Babbage',
        'Nikola Tesla',
      ],
      answer: 'Charles Babbage',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
      answer: 'Mount Everest',
    },
    {
      question:
        'Which organ is responsible for pumping blood throughout the body?',
      options: ['Lungs', 'Liver', 'Heart', 'Kidneys'],
      answer: 'Heart',
    },
    {
      question: 'What is the freezing point of water in degrees Celsius?',
      options: ['0', '32', '-32', '100'],
      answer: '0',
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ['Oxygen', 'Osmium', 'Oganesson', 'Olivine'],
      answer: 'Oxygen',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Claude Monet',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      answer: 'Diamond',
    },
    {
      question: 'Which country is the largest by land area?',
      options: ['Canada', 'China', 'United States', 'Russia'],
      answer: 'Russia',
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ['Elephant', 'Tiger', 'Lion', 'Leopard'],
      answer: 'Lion',
    },
    {
      question: 'What is the smallest unit of life?',
      options: ['Cell', 'Molecule', 'Atom', 'Organ'],
      answer: 'Cell',
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Nitrogen',
    },
    {
      question: 'Who developed the theory of relativity?',
      options: [
        'Isaac Newton',
        'Galileo Galilei',
        'Albert Einstein',
        'Stephen Hawking',
      ],
      answer: 'Albert Einstein',
    },
    {
      question: 'What is the longest river in the world?',
      options: [
        'Amazon River',
        'Nile River',
        'Yangtze River',
        'Mississippi River',
      ],
      answer: 'Nile River',
    },
    {
      question:
        "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      answer: 'Venus',
    },
  ];

  const handleAnswerClick = (option) => {
    if (option === quiz[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQ(0);
    setIsCompleted(false);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-6'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center'>
        {isCompleted ? (
          <>
            <h1 className='text-2xl font-bold text-gray-800'>
              Quiz Completed!
            </h1>
            <p className='text-lg text-gray-700 my-4'>
              Your Score: {score}/{quiz.length}
            </p>
            <button
              onClick={restartQuiz}
              className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all'>
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <h1 className='text-2xl font-bold text-gray-800'>
              Quiz {currentQ + 1}
            </h1>
            <p className='text-lg text-gray-700 my-4'>
              {quiz[currentQ].question}
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {quiz[currentQ].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all'>
                  {option}
                </button>
              ))}
            </div>
            <p className='mt-4 text-gray-600'>Score: {score}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Qna;
