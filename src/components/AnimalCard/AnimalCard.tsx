import "./styles.css";
import type { AnimalCardProps } from "./types";

function AnimalCard({ 
    name, species = "unknown animal", 
    imgSrc,
 }: AnimalCardProps) {
  return (
    <div className="animal-card-wrapper">
      <h3>{name}</h3>
      <div>{species}</div>
      <img src={imgSrc} />
    </div>
  );
}

export default AnimalCard;

