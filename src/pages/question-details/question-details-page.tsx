import { FC, useEffect, useRef } from "react";
import { useStore } from "effector-react";
import { $answers, getAnswers } from "../../services/store";
import { useParams } from "react-router-dom";

export const QuestionDetailsPage: FC = () => {
  const answers = useStore($answers);
  const { id } = useParams();
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    id && getAnswers(id);
  }, [id]);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = answers
        .map((answer) => `<li>${answer.body}</li>`)
        .join("");
    }
  }, [answers]);
  return (
    <>
      <h1>Ответы</h1>
      <ul ref={ref}></ul>
    </>
  );
};
