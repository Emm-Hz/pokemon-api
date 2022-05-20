import React from "react";

const MyComponent = ({ setPage, page }) => {
  return (
    <div>
      {page === 0 ? (
        <div className="paginations">
          <span onClick={() => setPage(page + 1)}>Next Page</span>
        </div>
      ) : (
        <div className="paginations">
          <span onClick={() => setPage(page - 1)}>Prev Page</span>
          <span onClick={() => setPage(page + 1)}>Next Page</span>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
