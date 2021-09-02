import { PokeType, TypesOptions } from '../types'

export const bg = (types: Array<PokeType>): string => {
  const typeColors: TypesOptions =
  {
    normal: "RGBA(168,168,120,1)",
    fighting: "RGBA(192,48,40,1)",
    flying: "RGBA(168,144,240,1)",
    poison: "RGBA(181,90,165,1)",
    ground: "RGBA(224,192,104,1)",
    rock: "RGBA(189,165,90,1)",
    bug: "RGBA(168,184,32,1)",
    ghost: "RGBA(99,99,181,1)",
    steel: "RGBA(184,184,208,1)",
    fire: "RGBA(240,128,48,1)",
    water: "RGBA(104,144,240,1)",
    grass: "RGBA(120,200,80,1)",
    electric: "RGBA(248,208,48,1)",
    psychic: "RGBA(248,88,136,1)",
    ice: "RGBA(152,216,216,1)",
    dragon: "RGBA(112,56,248,1)",
    dark: "RGBA(115,90,74,1)",
    fairy: "RGBA(238,153,172,1)",
  }

  if (types.length === 1) {
    return typeColors[types[0]?.type.name as keyof TypesOptions]
  } else {
    return `linear-gradient(
      50deg, ${typeColors[types[0]?.type.name as keyof TypesOptions]} 0%,
      ${typeColors[types[0]?.type.name as keyof TypesOptions]} 40%,
      ${typeColors[types[1]?.type.name as keyof TypesOptions]}60%,
      ${typeColors[types[1]?.type.name as keyof TypesOptions]} 100%)`
  }
}