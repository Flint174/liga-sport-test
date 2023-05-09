import { createStore, createEffect, createEvent, attach } from "effector";
import { Question, Answer } from "../models/store";
import {
  fetchAnswers,
  fetchQuestions,
  fetchTagQuestions,
  fetchUserQuestions,
} from "./api";
import { orderBy } from "lodash";

export const $search = createStore("");

export const setSearch = createEvent<string>();

$search.on(setSearch, (_, search: string) => search);

export const $questions = createStore<Question[]>([]);

export const getQuestions = createEffect(fetchQuestions);

export const sortQuestions = createEvent<{
  key: string;
  order: "asc" | "desc";
}>();

$questions
  .on(getQuestions.doneData, (_, { items }) => items)
  .on(sortQuestions, (state, { key, order }) => orderBy(state, [key], [order]))
  .reset(setSearch);

export const $answers = createStore<Answer[]>([]);

export const getAnswers = createEffect(fetchAnswers);

$answers.on(getAnswers.doneData, (_, { items }) => items);

export const $details = createStore<Question[]>([]);

export const getUserQuestions = createEffect(fetchUserQuestions);
export const getTagQuestions = createEffect(fetchTagQuestions);

$details
  .on(getUserQuestions.doneData, (_, { items }) => items)
  .on(getTagQuestions.doneData, (_, { items }) => items)
  .on(sortQuestions, (state, { key, order }) => orderBy(state, [key], [order]))
  .reset(setSearch);

// export interface DetailsParams {
//   type: "user" | "tag";
//   value: string;
// }

// export const $detailsParams = createStore<DetailsParams | null>(null);

// export const setDetailsParams = createEvent<DetailsParams>();

// $detailsParams.on(setDetailsParams, (_, params) => params);
