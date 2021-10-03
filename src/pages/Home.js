import Card from "../components/cards/Cards";
import Header from "../components/header/Header";
import { useQuery } from "@apollo/client";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { CHARACTERS } from "../service/characterQuery";

export default function Home() {
  //modal
  const [open, setOpen] = useState(false);
  const [selectedId, setId] = useState(1);

  const onOpenModal = (id) => {
    setOpen(true);
    setId(id);
  };
  const onCloseModal = () => setOpen(false);
  //modal

  //getting data from graphql
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return null;
  if (error) return `Algo deu errado! ${error}`;

  const characters = data.characters.results;

  return (
    <div>
      <Header></Header>
      <main>
        {characters.map((character) => {
          return (
            <Card
              onClick={() => onOpenModal(character.id)}
              img={character.image}
              title={character.name}
              description={character.status}
            />
          );
        })}
      </main>
      <Modal open={open} onClose={onCloseModal} center>
        <img src={characters[selectedId - 1].image} alt="character" />
        <h2>{characters[selectedId - 1].name}</h2>
        <h3>Episodes</h3>
        <ul>
          {characters[selectedId - 1].episode.map((i) => {
            return <li>{i.name}</li>;
          })}
        </ul>
      </Modal>
    </div>
  );
}
