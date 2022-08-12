import CanvasComponent from "../../LandingPage/CanvasComponent";
import "./QuoteImage.css";

function QuoteImage(props) {
  return (
    <div className="image-container">
      {/* <CanvasComponent quoteFile={props.quoteFile} /> */}
      <img
        className="image"
        src={props.quoteImage}
        width="120"
        height="120"
        alt="MDN logo — a dinosaur logo with the text MDN"
      />
    </div>
  );
}
export default QuoteImage;
