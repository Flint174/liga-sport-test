import { FC, useCallback, useEffect } from "react";
import { useStoreMap, useStore } from "effector-react";
import {
  $details,
  $questions,
  $search,
  getQuestions,
  getTagQuestions,
  getUserQuestions,
  sortQuestions,
} from "../../services/store";
import { Table } from "../../components/table";
import type { TableColumn, TableDataRow } from "../../components/table";
import { useNavigate } from "react-router-dom";
import { htmlDecode } from "../../utils/decoders";
import { Question } from "../../models/store";

const columns: TableColumn[] = [
  {
    key: "author",
    name: "Автор",
  },
  { key: "title", name: "Темы" },
  { key: "answerCount", name: "Кол-во ответов" },
  {
    key: "tags",
    name: "Тэги",
  },
];

export const SearchResultsPage: FC = () => {
  const navigate = useNavigate();

  const questionsSelector = useCallback(
    (questions: Question[]): TableDataRow[] =>
      questions.map((question) => ({
        id: `${question.question_id || ""}`,
        author: (
          <span
            onClick={() =>
              question.owner?.user_id &&
              getUserQuestions(`${question.owner.user_id}`)
            }
          >
            {htmlDecode(question?.owner?.display_name)}
          </span>
        ),
        title: (
          <span onClick={() => navigate(`/question/${question.question_id}`)}>
            {htmlDecode(question.title)}
          </span>
        ),
        answerCount: (
          <span onClick={() => navigate(`/question/${question.question_id}`)}>
            {question.answer_count}
          </span>
        ),
        tags: (
          <>
            {question.tags?.map((tag, index, { length }) => (
              <span key={index}>
                <span onClick={() => getTagQuestions(tag)}>
                  {htmlDecode(tag)}
                </span>
                {length > index + 1 ? ", " : ""}
              </span>
            ))}
          </>
        ),
      })),
    [navigate]
  );

  const questions = useStoreMap($questions, questionsSelector);
  const details = useStoreMap($details, questionsSelector);
  const search = useStore($search);

  useEffect(() => {
    getQuestions({ intitle: search });
  }, [search]);

  return (
    <>
      <h1>Результаты поиска</h1>
      <section>
        <h2>Основное данные</h2>
        <p>Параметры поиска: '{search}'</p>
        <Table columns={columns} data={questions} sort={sortQuestions} />
      </section>
      {!!details.length && (
        <section>
          <h2>Панель быстрого доступа</h2>
          <Table columns={columns} data={details} />
        </section>
      )}
    </>
  );
};
