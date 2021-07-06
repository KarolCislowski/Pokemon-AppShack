import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Pokemons } from './pages/Pokemons/Pokemons'
import { PokemonDetails } from './pages/PokemenDetails/PokemonDetails'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/page/:page" exact>
            <Pokemons />
          </Route>
          <Route path="/" exact>
            <Pokemons />
          </Route>
          <Route path="/:pokemonName" exact>
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
