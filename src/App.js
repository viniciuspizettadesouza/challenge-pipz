import React, { useEffect, useState } from 'react';
import api from './services/api';

import Crawl from 'react-star-wars-crawl'
import moment from 'moment'
import romannumerals from 'roman-numerals'

import './App.css';
import 'react-star-wars-crawl/lib/index.css'

import logo from './assets/sw-logo.png'

function App() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('/films', {
      })
      setFilms(response.data.results)
    }
    loadFilms()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <p>A long time ago in a galaxy far, far away...</p>
        </div>
        <img className="App-logo" src={logo} alt="logo" />
      </header>
      <div>
        <Crawl>
          <ul>
            {films.map(film => (
              <div>
                <p className="App-episode">Episode {romannumerals.toRoman(film.episode_id)}</p>
                <p className="App-title">{film.title}</p>
                <p className="App-release">Release Date: {moment(film.release_date).format('LL')}</p>
                <p className="App-space">.</p>
              </div>
            ))}
          </ul>
        </Crawl>
      </div>
    </div>
  );
}

export default App;