import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function HomePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6 text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
          >
            <Brain className="w-10 h-10 text-primary" />
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Brain Quest
            </h1>
            <p className="text-muted-foreground">
              Test your knowledge with our exciting quiz!
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <span className="font-bold text-xl text-foreground">5</span>
                Questions
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <span className="font-bold text-xl text-foreground">30s</span>
                Per Question
              </div>
            </div>

            <Button 
              className="w-full text-lg h-12"
              onClick={() => navigate("/quiz")}
            >
              Start Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
