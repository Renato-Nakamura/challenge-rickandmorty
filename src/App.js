import './App.css';
import Card from './components/cards/Cards';
import styled from "styled-components";
import { gql,useQuery } from '@apollo/client';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

function App() {
  //modal
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  //modal
  
  const CHARACTERS = gql`
  query {
    characters(page:1) {
      info {
        count,
        pages,
      }
      results {
        id,
        name,
        image,
        status
      }
    }
  }
  `
  const {loading, error, data} = useQuery(CHARACTERS)
  if (loading) return null;
  if (error) return `Error! ${error}`;
  
  // const info = data.info
  console.log(data.characters.results)
  const characters = data.characters.results
  return (
    <div className="App">
      <header className="App-header">
          <h1>Rick and Morty characters by Renato Nakamura</h1>
      </header>
      <main>
      {characters.map(character => {
        return (<Card 
        onClick={() => onOpenModal(character.id)}
        img={character.image}
        title={character.name}
        description= {character.status}
      />)
      })}
      </main>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Modal limpo</h2>
      </Modal>
    </div>
  );
}

export default App;
