import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";
function Question() {
  // console.log(question);
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}

export default Question;
