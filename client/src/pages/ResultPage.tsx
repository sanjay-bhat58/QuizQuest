import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation, useParams } from "wouter";
import { motion } from "framer-motion";
import { Trophy, XCircle } from "lucide-react";

export default function ResultPage() {
  const [, navigate] = useLocation();
  const params = useParams();
  const isSuccess = params.status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6 text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${
              isSuccess ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isSuccess ? (
              <Trophy className="w-10 h-10 text-green-600" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600" />
            )}
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold">
              {isSuccess ? "Congratulations!" : "Game Over!"}
            </h1>
            <p className="text-muted-foreground">
              {isSuccess 
                ? "You've successfully completed the quiz!" 
                : "Better luck next time!"}
            </p>
          </div>

          <Button 
            className="w-full text-lg h-12"
            onClick={() => navigate("/")}
          >
            Play Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
