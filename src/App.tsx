import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Pokemons } from './pages/Pokemons/Pokemons'
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails'
import { TypeChart } from './pages/TypeChart/TypeChart'

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
          <Route path="/types" exact>
            <TypeChart />
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
