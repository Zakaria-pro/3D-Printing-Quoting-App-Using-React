import "./QuoteAction.css";
import React, { useState } from "react";

const QuoteAction = (props) => {
  let detailText = "Quote details";

  const [text, setText] = useState(detailText);

  const clickHandler = (action) => {
    const componentState = {
      componenetId: props.quoteInfo.id,
      componentStatus: action,
    };
    props.quoteAction(componentState);
  };

  return (
    <div className="action-conatiner">
      <div className="actions">
        <a onClick={() => clickHandler("duplicate")}>Duplicate</a>
        <a onClick={() => clickHandler("share")}>Share</a>
        <a onClick={() => clickHandler("delete")}>Delete</a>
      </div>
      <div className="details">
        <button className="button-style">{text}</button>
      </div>
    </div>
  );
};

export default QuoteAction;
