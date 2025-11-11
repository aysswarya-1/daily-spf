import { useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const go = (p) => {
        if (p < 1 || p > totalPages) return;
        onPageChange(p);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    return (
        <div className="flex justify-center items-center gap-3 mt-12 mb-20">

            {/* previous */}
            <button
                onClick={() => go(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3.5 py-2 border rounded-full text-sm hover:bg-slate-100
                ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
                aria-label="Previous page"
            >
                &lt;
            </button>

            {/* pg number */}
            {pages.map((n) => (
                <button
                    key={n}
                    onClick={() => go(n)}
                    onKeyDown={(e) => (e.key === "Enter" ? go(n) : null)}
                    aria-current={n === currentPage ? "page" : undefined}
                    className={`px-3.5 py-2 rounded-full text-sm ${n === currentPage
                        ? "bg-secondary text-white"
                        : "hover:bg-slate-100 border"
                        }`}>
                    {n}
                </button>
            ))}

            {/* next */}
            <button
                onClick={() => go(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`py-2 px-3.5 border rounded-full text-sm hover:bg-slate-100
                ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
                aria-label="Next page"
            >
                &gt;
            </button>
        </div>
    )
}

export default Pagination
