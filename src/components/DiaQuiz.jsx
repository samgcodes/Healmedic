import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is the normal range for fasting blood glucose?",
    options: [
      { id: "a", text: "70-100 mg/dL" },
      { id: "b", text: "100-140 mg/dL" },
      { id: "c", text: "140-180 mg/dL" },
      { id: "d", text: "180-200 mg/dL" },
    ],
    correctAnswer: "a",
    explanation:
      "A normal fasting blood glucose range is typically between 70-100 mg/dL.",
  },
  {
    id: 2,
    question: "Which of the following is NOT a common symptom of diabetes?",
    options: [
      { id: "a", text: "Increased thirst" },
      { id: "b", text: "Frequent urination" },
      { id: "c", text: "Weight gain" },
      { id: "d", text: "Blurred vision" },
    ],
    correctAnswer: "c",
    explanation:
      "While weight loss is common in uncontrolled diabetes, weight gain is not typically a symptom of diabetes onset.",
  },
  {
    id: 3,
    question: "How often should a person with diabetes check their feet?",
    options: [
      { id: "a", text: "Once a month" },
      { id: "b", text: "Once a week" },
      { id: "c", text: "Every day" },
      { id: "d", text: "Only when they hurt" },
    ],
    correctAnswer: "c",
    explanation:
      "Daily foot checks are important to detect any changes or problems early.",
  },
  {
    id: 4,
    question: "What does this device measure?",
    image: "/api/placeholder/400/300",
    options: [
      { id: "a", text: "Blood pressure" },
      { id: "b", text: "Blood glucose" },
      { id: "c", text: "Body temperature" },
      { id: "d", text: "Heart rate" },
    ],
    correctAnswer: "b",
    explanation:
      "This is a glucose meter, used to measure blood glucose levels at home.",
  },
  {
    id: 5,
    question:
      "Which of these foods would have the least impact on blood sugar levels?",
    image: "/api/placeholder/400/300",
    options: [
      { id: "a", text: "White bread" },
      { id: "b", text: "Brown rice" },
      { id: "c", text: "Leafy greens" },
      { id: "d", text: "Banana" },
    ],
    correctAnswer: "c",
    explanation:
      "Leafy greens are low in carbohydrates and have minimal impact on blood sugar levels.",
  },
  {
    id: 6,
    question: "What does this graph show?",
    image: "/api/placeholder/400/300",
    options: [
      { id: "a", text: "Blood pressure over time" },
      { id: "b", text: "Weight fluctuations" },
      { id: "c", text: "Blood glucose levels throughout the day" },
      { id: "d", text: "Cholesterol levels" },
    ],
    correctAnswer: "c",
    explanation:
      "This graph shows blood glucose levels throughout the day, which is important for managing diabetes.",
  },
  {
    id: 7,
    question:
      "Which of these is a potential long-term complication of poorly managed diabetes?",
    options: [
      { id: "a", text: "Improved eyesight" },
      { id: "b", text: "Stronger bones" },
      { id: "c", text: "Kidney disease" },
      { id: "d", text: "Increased flexibility" },
    ],
    correctAnswer: "c",
    explanation:
      "Kidney disease is a serious long-term complication of poorly managed diabetes.",
  },
  {
    id: 8,
    question:
      "What is the recommended method for testing blood glucose levels at home?",
    options: [
      { id: "a", text: "Urine test" },
      { id: "b", text: "Finger-prick blood test" },
      { id: "c", text: "Saliva test" },
      { id: "d", text: "Breath test" },
    ],
    correctAnswer: "b",
    explanation:
      "The finger-prick blood test is the most common and accurate method for testing blood glucose at home.",
  },
];

const DiabetesPreQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, answerId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    return questions.reduce(
      (score, question) =>
        answers[question.id] === question.correctAnswer ? score + 1 : score,
      0
    );
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Diabetes Knowledge Pre-Quiz
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <>
            <Progress value={progressPercentage} className="mb-4" />
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {questions[currentQuestion].question}
              </h3>
              {questions[currentQuestion].image && (
                <img
                  src={questions[currentQuestion].image}
                  alt="Question visual"
                  className="mb-4 rounded-lg"
                />
              )}
              <RadioGroup
                onValueChange={(value) =>
                  handleAnswerChange(questions[currentQuestion].id, value)
                }
                value={answers[questions[currentQuestion].id]}
              >
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <RadioGroupItem
                      value={option.id}
                      id={`${questions[currentQuestion].id}-${option.id}`}
                    />
                    <Label
                      htmlFor={`${questions[currentQuestion].id}-${option.id}`}
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex justify-between">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button onClick={handleNext}>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">Quiz Results</h3>
            <p className="mb-4">
              You scored {calculateScore()} out of {questions.length}.
            </p>
            {questions.map((question) => (
              <div
                key={question.id}
                className="mb-6 p-4 bg-gray-100 rounded-lg"
              >
                <h4 className="font-semibold mb-2">{question.question}</h4>
                <p className="mb-2">
                  Your answer:{" "}
                  {question.options.find(
                    (opt) => opt.id === answers[question.id]
                  )?.text || "Not answered"}
                </p>
                <p className="mb-2">
                  Correct answer:{" "}
                  {
                    question.options.find(
                      (opt) => opt.id === question.correctAnswer
                    )?.text
                  }
                </p>
                <p className="text-sm text-gray-600">{question.explanation}</p>
              </div>
            ))}
            <p className="mt-4">
              {calculateScore() === questions.length
                ? "Great job! You have a strong understanding of diabetes management."
                : "There are some areas where you could improve your diabetes knowledge. The DSMES course will help you learn more about these topics."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DiabetesPreQuiz;
