import { Type } from "typescript"

export interface PokeType {
  type: {
    name: string
  }
}

export interface Ability {
  ability: {
    name: string
  }
}

export interface Stat {
  base_stat: number
  stat: {
    name: string
  }
}

export interface TypesOptions {
  normal: string
  fighting: string
  flying: string
  poison: string
  ground: string
  rock: string
  bug: string
  ghost: string
  steel: string
  fire: string
  water: string
  grass: string
  electric: string
  psychic: string
  ice: string
  dragon: string
  dark: string
  fairy: string
}

export interface PokemonListItem {
  name: string
  url: string
}

export type PokemonList = Array<PokemonListItem>

export interface Pokemon {
  name: string
  id: number
  types: Array<PokeType>
  img: string
  abilities?: Array<Ability>
  stats?: Array<Stat>
}

export interface TypeListItem {
  name: string
  url: string
}

export type TypeList = Array<TypeListItem>

export interface pokeType {
  super: TypeList
  resistant: TypeList
  notEffective: TypeList
  weak: TypeList
}