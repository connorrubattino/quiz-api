import { QuestionType } from "../types";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

type QuestionCardProps = {
    question:QuestionType
}


export default function QuestionCard({ question }: QuestionCardProps) {

  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer)
  };

  return (
    <Card className='m-5'>
      <Card.Header as="h5">Question</Card.Header>
      <Card.Body>
        <Card.Title>{ question.question }</Card.Title>
        <Form.Label>Answer:</Form.Label>
        <Button className='m-2 w-100' variant={showAnswer ? "warning" : "primary"} onClick={handleClick}>{showAnswer ? `${question.answer}` : "Reveal Answer"}</Button>
      </Card.Body>
    </Card>
  )
}