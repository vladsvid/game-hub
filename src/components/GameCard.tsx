import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <HStack justifyContent="space-between" marginBottom={2}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
