import { QuestionType } from "../types";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type QuestionCardProps = {
    question:QuestionType
}


export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className='m-5'>
      <Card.Header as="h5">Question</Card.Header>
      <Card.Body>
        <Card.Title>{ question.question }</Card.Title>
        <Form.Label>Answer:</Form.Label>
        <Form.Control name='answer' type="text" placeholder="Answer" />
        <Button className='m-2' variant="success">Submit</Button>
      </Card.Body>
    </Card>
  )
}