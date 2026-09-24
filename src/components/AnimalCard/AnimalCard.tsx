import { AnimalCardWrapper,
AnimalCardTitle,
AnimalCardImage } from "./styles";
import type { AnimalCardProps } from "./types";

function AnimalCard({ 
    name, species = "unknown animal", 
    imgSrc,
 }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalCardTitle>{name}</AnimalCardTitle>
      <div>{species}</div>
      <AnimalCardImage src={imgSrc} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

