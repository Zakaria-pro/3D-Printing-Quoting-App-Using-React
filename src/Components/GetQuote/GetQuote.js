import React, { useState } from "react";

import Quote from "./Quote/Quote";
import NewQuote from "./NewQuote/NewQuote";

import Model1 from "../../assets/model1.png";
import Model2 from "../../assets/model2.png";

import stickman from "../../assets/OBJ/stickman.obj";
import bunny from "../../assets/OBJ/bunny.obj";
import "./GetQuote.css";

// Initial List Of Quotes
// Add New Quote

// Delete an existed Quote
// Duplicate and existed Quote

const INITIAL_LIST_QUOTES = [
  {
    id: "1299302",
    model: Model1,
    date: Date(2022, 2, 2),
    autoQuoted: true,
    process: "FDM",
    quantity: 2,
    pieces: 2,
    price: 50,
  },
  {
    id: "122112",
    model: Model2,
    date: Date(2022, 12, 1),
    autoQuoted: false,
    process: "PBF",
    quantity: 5,
    pieces: 5,
    price: 25,
  },
];

const GetQuote = () => {
  const [quotes, setQuotes] = useState(INITIAL_LIST_QUOTES);

  function fileUploadHandler(uploadedFile) {
    const url = URL.createObjectURL(uploadedFile);
    var newQuote = {
      ...quotes[0],
      id: Date.now(),
      date: Date(1999, 1, 2),
      model: url,
    };
    var updatedList = [...quotes, newQuote];

    setQuotes(updatedList);
  }

  function quoteActionHandler(componentState) {
    /* Delete Quote Request: 
    Algorithm: Filter Quotes that their ID is different than the ID of the Requested Deleted Quote
    Complexity: O(n)
    */

    if (componentState.componentStatus === "delete") {
      var updatedList = quotes.filter((quote) => {
        return quote.id != componentState.componenetId;
      });
      setQuotes(updatedList);
    }

    /* Duplicate Quote Request: 
    Algorithm: Search the Element  -> Make a modified copy of the Element -> Add Duplicated Element to List
    Complexity: O(n)
    */

    // Duplicate Action //
    if (componentState.componentStatus === "duplicate") {
      var Element = quotes.filter((quote) => {
        return quote.id === componentState.componenetId;
      })[0];

      var duplicateElement = {
        ...Element,
        id: Date.now(),
        date: Date(1999, 1, 2),
      };

      var updatedList = [...quotes, duplicateElement];
      setQuotes(updatedList);
    }
  }

  return (
    <div className="quotes-container">
      <div>
        <h1>My Quotes</h1>
        <hr className="solid"></hr>
        <br />
      </div>

      {quotes.map((quote) => (
        <Quote quoteInfo={quote} quoteAction={quoteActionHandler} />
      ))}

      <NewQuote fileUpload={fileUploadHandler}></NewQuote>
    </div>
  );
};

export default GetQuote;
