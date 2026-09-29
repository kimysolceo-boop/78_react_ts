import { AnimalCardWrapper,
AnimalCardTitle,
AnimalCardImage, 
Species} from "./styles";
import type { AnimalCardProps } from "./types";

function AnimalCard({ 
    name, species = "unknown animal", 
    imgSrc,
 }: AnimalCardProps) {
  return (
  <AnimalCardWrapper>
    <AnimalCardImage src={imgSrc} alt={name} />
    <AnimalCardTitle>{name}</AnimalCardTitle>
    <Species>{species}</Species>
  </AnimalCardWrapper>
);
}

export default AnimalCard;

