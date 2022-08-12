import "./Card.css";

const Card = (props) => {
  return (
    <div className="page-background">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default Card;
