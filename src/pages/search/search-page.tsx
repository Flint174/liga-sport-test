import { ChangeEventHandler, FC, FormEventHandler } from "react";
import { useNavigate } from "react-router";
import { $search, setSearch } from "../../services/store";
import { useStore } from "effector-react";

export const SearchPage: FC = () => {
  const navigate = useNavigate();
  const search = useStore($search);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    navigate(`/search`);
  };

  return (
    <>
      <h1>Поиск</h1>
      <form onSubmit={onSubmit}>
        <input value={search} onChange={onChange} />
        <button type="submit">Искать</button>
      </form>
    </>
  );
};
