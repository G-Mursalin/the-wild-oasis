import styles from "./Pagination.module.css";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <div className={styles.pagination}>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div className={styles.buttons}>
        <button
          className={styles.paginationButton}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>

        <button
          className={styles.paginationButton}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
