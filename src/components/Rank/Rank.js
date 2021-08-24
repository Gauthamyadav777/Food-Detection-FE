import React from "react";

const Rank = ({ user }) => {
  return (
    <div className="tc">
      <div className="white f3 f1-ns mt0 b">
        Hi {user.username}, show me what you eat.
      </div>
      <div className="white f3 f1-ns mt0 b">
        You have shown me {user.entries} times.
      </div>
    </div>
  );
};

export default Rank;
