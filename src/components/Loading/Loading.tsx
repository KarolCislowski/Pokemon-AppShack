import pika from '../../static/pika-pikachu.gif'
import { LoadingPage } from './Loading.ui'

export const Loading = () => (
  <LoadingPage>
    <img src={pika} alt="pikachu" />
    <h1>Loading...</h1>
  </LoadingPage>
)
