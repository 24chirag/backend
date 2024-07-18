import React from "react";

function Post({ id, title }) {
  return (
    <div className="container">
      <h1> joke id is : {id}</h1>
      <h1> joke title is : {title}</h1>
    </div>
  );
}

export default Post;
