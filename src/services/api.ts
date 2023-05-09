import { ApiResponse } from "../models/api";
import { Answer, Question } from "../models/store";
// import fakeQuestions from "../fakeData/fakeQuestions.json";
// import fakeAnswers from "../fakeData/fakeAnswers.json";
// import fakeUserQuestions from "../fakeData/fakeUserQuestions.json";
// import fakeTagQuestions from "../fakeData/fakeTagQuestions.json";

const baseUrl = "https://api.stackexchange.com";
const apiVer = "2.3";

const fetchRequest = <ReturnType = unknown>(
  url: string,
  options?: RequestInit
) =>
  fetch(`${baseUrl}/${apiVer}${url}`, options).then((res) =>
    res.ok ? (res.json() as Promise<ReturnType>) : Promise.reject()
  );

export interface FetchQuestionsQuery {
  intitle: string;
  order?: "desc" | "asc";
}

export const fetchQuestions = (query: FetchQuestionsQuery) => {
  const newQuery = new URLSearchParams({
    order: "desc",
    sort: "activity",
    site: "stackoverflow",
    ...query,
  });
  return fetchRequest<ApiResponse<Question>>(`/search?${newQuery}`);
};

export const fetchAnswers = (id: string) =>
  fetchRequest<ApiResponse<Answer>>(
    `/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`
  );

export const fetchUserQuestions = (
  id: string,
  query?: { order?: "desc" | "asc" }
) => {
  const newQuery = new URLSearchParams({
    order: "desc",
    sort: "votes",
    site: "stackoverflow",
    ...query,
  });

  return fetchRequest<ApiResponse<Answer>>(
    `/users/${id}/questions?${newQuery.toString()}`
  );
};

export const fetchTagQuestions = (
  tag: string
  //   query?: { order?: "desc" | "asc" }
) => {
  const newQuery = new URLSearchParams({
    site: "stackoverflow",
    // ...query,
  });
  return fetchRequest<ApiResponse<Answer>>(`/tags/${tag}/faq?${newQuery}`);
};

/** fakes */
// export const fetchQuestions = (query: FetchQuestionsQuery) =>
//   Promise.resolve(fakeQuestions) as Promise<ApiResponse<Question>>;

// export const fetchAnswers = (id: string) =>
//   Promise.resolve(fakeAnswers) as Promise<ApiResponse<Answer>>;

// export const fetchUserQuestions = (
//   id: string,
//   query?: { order?: "desc" | "asc" }
// ) => Promise.resolve(fakeUserQuestions) as Promise<ApiResponse<Answer>>;

// export const fetchTagQuestions = (
//   tag: string
//   //   query?: { order?: "desc" | "asc" }
// ) => Promise.resolve(fakeTagQuestions) as Promise<ApiResponse<Answer>>;
