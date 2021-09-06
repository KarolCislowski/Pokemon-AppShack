import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Pokemons } from './pages/Pokemons/Pokemons'
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails'
import { TypeChart } from './pages/TypeChart/TypeChart'
import { Header } from './components/Header/Header'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/page/:page" exact>
            <Header />
            <Pokemons />
          </Route>
          <Route path="/" exact>
            <Header />
            <Pokemons />
          </Route>
          <Route path="/types" exact>
            <Header />
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
