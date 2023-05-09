import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import styles from "./table.module.css";

export interface TableColumn {
  key: string;
  name: string;
}

export interface TableDataRow {
  id: string;
  [key: string]: ReactNode;
}

interface SortDir {
  key: string;
  order: "asc" | "desc";
}

export interface TableProps {
  columns: TableColumn[];
  data: TableDataRow[];
  sort?: (sortDir: SortDir) => void;
}

export const Table: FC<TableProps> = ({ columns, data, sort = () => {} }) => {
  const [sortDir, setSortDir] = useState<SortDir | null>(null);

  const onColumnClick = (column: TableColumn) => {
    setSortDir((prev) =>
      prev && prev.key === column.key
        ? {
            ...prev,
            order: prev?.order === "asc" ? "desc" : "asc",
          }
        : { key: column.key, order: "asc" }
    );
  };

  useEffect(() => {
    sortDir && sort(sortDir);
  }, [sortDir, sort]);

  const tableColumns = useMemo(
    () =>
      columns.map((column) => {
        const arrowStyle =
          sortDir && sortDir.key === column.key && sortDir.order === "asc"
            ? styles["arrow--down"]
            : sortDir && sortDir.key === column.key && sortDir.order === "desc"
            ? styles["arrow--up"]
            : "";
        return (
          <th
            scope="col"
            key={column.key}
            className={arrowStyle}
            onClick={() => onColumnClick(column)}
          >
            {column.name}
          </th>
        );
      }),
    [sortDir, columns]
  );

  const tableData = useMemo(
    () =>
      data.map((dataItem) => (
        <tr key={dataItem.id}>
          {columns.map((column) => (
            <td key={column.key}>{get(dataItem, column.key)}</td>
          ))}
        </tr>
      )),
    [data, columns]
  );
  return (
    <table className={styles.table}>
      <thead>
        <tr>{tableColumns}</tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};
