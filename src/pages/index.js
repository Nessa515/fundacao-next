import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'
import Postagem1 from '@/components/Postagem1'
import Postagem2 from '@/components/Postagem2'
import ListaImagens from '@/components/ListaImagens'
import RodapeContato from '@/components/RodapeContato'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Cabecalho />
     <Postagem1 />
     <Postagem2 />
     <ListaImagens />
     <RodapeContato />
    </>
  )
}
