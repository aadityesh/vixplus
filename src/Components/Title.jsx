import React from "react";

const Title = ({ title, searchTerm }) => {
  return (
    <>
      <h1 className="mb-3 text-3xl">
        {" "}
        {!searchTerm && (
          <>
            <span>{title ? title : "Title"}</span>
            <span className="font-medium text-orange-600"> Videos</span>
          </>
        )}
        {searchTerm && (
          <>
            <span>Search results for:</span>
            <span className="font-medium text-orange-600"> {searchTerm}</span>
          </>
        )}
      </h1>
    </>
  );
};

export default Title;
