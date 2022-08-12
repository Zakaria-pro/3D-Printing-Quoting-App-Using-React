import "./Quote.css";
import QuoteImage from "./QuoteImage";
import QuoteInfo from "./QuoteInfo";
import QuoteAction from "./QuoteAction";
function Quote(props) {
  let quoteFile = props.quoteInfo.model;
  const quoteActionHandler = (componentState) => {
    props.quoteAction(componentState);
  };
  return (
    <div className="quote-container">
      {/* (Stateless - Presentative - DOM) Componenet */}
      <QuoteImage quoteFile={quoteFile} />
      <QuoteInfo quoteInfo={props.quoteInfo} />

      {/* (Statefull - Smart) Componenet */}
      <QuoteAction
        quoteInfo={props.quoteInfo}
        quoteAction={quoteActionHandler}
      />
    </div>
  );
}

export default Quote;
