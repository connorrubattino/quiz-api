import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import { getAllQuestions } from "../lib/apiWrapper";
import { QuestionType } from "../types";


type QuestionsProps = {}


export default function Questions({}: QuestionsProps) {

    const [questions, setQuestions] = useState<QuestionType[]>([])

    useEffect(() => {
        async function fetchData(){
            const response = await getAllQuestions();
            if (response.data){
                let recievedQuestions = response.data['questions'];
                setQuestions(recievedQuestions)
            }
        }
        fetchData();
    }, [])


  return (
    <>
        <h1 className='text-center mt-3'>All Questions</h1>
        {questions.map( q => <QuestionCard question={q}/> )}
    </>
  )
}