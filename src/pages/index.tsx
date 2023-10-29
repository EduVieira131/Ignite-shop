import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$primary100'
})

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  )
}
