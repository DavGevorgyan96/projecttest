import './App.css';
import React from 'react';
import Header from "./pages/header";
import Category from './pages/navbarCategory';

function App() {
  const navCategory = [
    {name: "ВЕСТЕРН"},
    {name: "БИОГРАФИЯ"},
    {name: "БОЕВИК"},
    {name: "ВОЕННЫЙ"},
    {name: "ДЕТЕКТИВ"},
    {name: "ДРАМА"},
    {name: "ДОКУМЕНТАЛЬНЫЙ"},
    {name: "ИСТОРИЯ"},
    {name: "КОМЕДИЯ"},
    {name: "КРИМИНАЛ"},
    {name: "МЕЛОДРАМА"},
    {name: "МУЗЫКА"},
    {name: "МУЛЬТФИЛЬМ"},
    {name: "ПРИКЛЮЧЕНИЯ"},
    {name: "СЕМЕЙНЫЙ"},
    {name: "СЕРИАЛЫ"},
    {name: "СПОРТ"},
    {name: "ТРИЛЛЕР"},
    {name: "УЖАСЫ"},
    {name: "ФЭНТЕЗИ"},
    {name: "ФАНТАСТИКА"}
  ]
  return (
    <div className="App">
      <Header />
      <Category navCategory={navCategory}/>
    </div>
  );
}

export default App;
