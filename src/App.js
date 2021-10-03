import './App.css';
import Card from './components/cards/Cards';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Rick and Morty characters by Renato Nakamura</h1>
      </header>
      <main>
        <Card
        title= "Rick Sanchez"
        img= "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description= "Alive">
        </Card>
        <Card
        title= "Rick Sanchez"
        img= "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description= "Alive">
        </Card>
        <Card
        title= "Rick Sanchez"
        img= "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description= "Alive">
        </Card>
        <Card
        title= "Rick Sanchez"
        img= "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description= "Alive">
        </Card>
        <Card
        title= "Rick Sanchez"
        img= "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        description= "Alive">
        </Card>
      </main>
    </div>
  );
}

export default App;
