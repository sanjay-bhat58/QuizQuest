import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  disabled?: boolean;
}

export default function QuestionCard({ question, onAnswer, disabled }: QuestionCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6 space-y-4">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full text-left justify-start h-auto py-4 px-6"
                onClick={() => onAnswer(index)}
                disabled={disabled}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
