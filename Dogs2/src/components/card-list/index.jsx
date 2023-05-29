import { Card } from "../card";
import "./styles.css";

export function CardList({ cards, onProductLike, currentUser }) {
  return (
    <div className="cards content__cards">
      {
        cards.map((dataItem, index) => (
          <Card 
            key={index}
            onProductLike={onProductLike}
            currentUser={currentUser}
            {...dataItem} 
            />
        ))
      }
    </div>
  );
}
