interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
    const pages: number[] = [];

    for (
        let p = Math.max(1, page - 2);
        p <= Math.min(totalPages, page + 2);
        p++
    ) {
        pages.push(p);
    }

    return (
        <div className="pagination">
            <button
                className="pagination__btn"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                Previous
            </button>

            {pages.map((p) => (
                <button
                    key={p}
                    className={`pagination__btn ${
                        p === page ? "pagination__btn--active" : ""
                    }`}
                    onClick={() => onPageChange(p)}
                >
                    {p}
                </button>
            ))}

            <button
                className="pagination__btn"
                disabled={page === totalPages || totalPages === 0}
                onClick={() => onPageChange(page + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
