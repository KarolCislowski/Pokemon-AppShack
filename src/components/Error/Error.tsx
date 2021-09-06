import pika from '../../static/pikachu-pokemon.gif'
import { GoBack } from '../GoBack/GoBack'
import { ErrPage } from './Error.ui'

export const ErrorPage = () => (
  <ErrPage>
    <img src={pika} alt="pikachu" />
    <h1>Something went wrong!</h1>
    <GoBack />
  </ErrPage>
)
