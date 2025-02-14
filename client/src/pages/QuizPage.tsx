import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { getRandomQuestions, type Question } from "@/data/questions";
import Timer from "@/components/Timer";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

const QUESTION_COUNT = 5;
const QUESTION_DURATION = 30;

export default function QuizPage() {
  const [, navigate] = useLocation();
  const [questions] = useState(() => getRandomQuestions(QUESTION_COUNT));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force timer reset

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex >= QUESTION_COUNT) {
      navigate("/result/success");
    }
  }, [currentQuestionIndex, navigate]);

  const handleAnswer = (answerIndex: number) => {
    setIsAnswering(true);

    setTimeout(() => {
      if (answerIndex === currentQuestion.correctAnswer) {
        setCurrentQuestionIndex(prev => prev + 1);
        setKey(prev => prev + 1); // Reset timer for next question
      } else {
        navigate("/result/fail");
      }
      setIsAnswering(false);
    }, 500);
  };

  const handleTimeout = () => {
    navigate("/result/fail");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 p-4">
      <div className="max-w-2xl mx-auto space-y-6 pt-8">
        <Timer 
          key={key} // Force timer component to reset
          duration={QUESTION_DURATION}
          onTimeout={handleTimeout}
        />

        <ProgressBar 
          current={currentQuestionIndex + 1}
          total={QUESTION_COUNT}
        />

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          disabled={isAnswering}
        />
      </div>
    </div>
  );
}