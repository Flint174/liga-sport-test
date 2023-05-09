import { FC } from "react";
import { Route, Routes } from "react-router";
import { SearchPage } from "../../pages/search";
import { SearchResultsPage } from "../../pages/search-results";
import { Error404Page } from "../../pages/error-404";
import { QuestionDetailsPage } from "../../pages/question-details";

export const App: FC = () => {
  return (
    <main>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/question/:id" element={<QuestionDetailsPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </main>
  );
};
