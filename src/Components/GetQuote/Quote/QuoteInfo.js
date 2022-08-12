import "./QuoteInfo.css";

function QuoteInfo(props) {
  const quoteInfo = props.quoteInfo;
  return (
    <div className="info-container">
      <div className="id-date">
        <span className="id">
          <a href="https://google.com">E-{quoteInfo.id}</a>
        </span>
        <span className="separator">|</span>
        <p className="date">Created:&nbsp;{quoteInfo.date}</p>
      </div>
      <div className="auto-manualy">
        <p
          className={
            quoteInfo.autoQuoted === true ? "card-auto" : "card-manual"
          }
        >
          {quoteInfo.autoQuoted === true ? "Auto quoted " : "Manualy quoted"}
        </p>
      </div>
      <div className="process-quantity-value">
        <p className="text-format">
          Process: <br /> <span>{quoteInfo.process}</span>
        </p>
        <p className="text-format">
          Quantity: <br />
          <span>
            {quoteInfo.quantity} parts / {quoteInfo.pieces} pcs
          </span>
        </p>
        <p className="text-format">
          Total Value: <br /> <span>€ {quoteInfo.price}</span>
        </p>
      </div>
    </div>
  );
}

export default QuoteInfo;
