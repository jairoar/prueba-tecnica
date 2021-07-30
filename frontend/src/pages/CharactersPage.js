import React, { useState } from "react";

import CharacterList from "../components/CharacterList";
import "./styles/CharactersPage.css";

export default function CharactersPage() {
  const [page, setPage] = useState(1);

  //Pagination events
  const handlePrevPage = (e) => {
    if (page > 1) {
      return setPage(page - 1);
    }
  };

  const handleNextPage = (e) => {
    if (page < 34) {
      return setPage(page + 1);
    }
  };

  return (
    <div className="CharactersPage">
      <div className="container">
        <div className="CharactersPagination">
          <button onClick={handlePrevPage} className="btn btn-dark m-3">
            Prev
          </button>
          <button onClick={handleNextPage} className="btn btn-dark m-3">
            Next
          </button>
        </div>

        <div className="row row-cols-md-4 g-4">
          <CharacterList page={page} />
        </div>
      </div>
    </div>
  );
}
