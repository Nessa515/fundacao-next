import Cabecalho from "@/components/Cabecalho";
import ListPesquisa from "@/components/ListPesquisa";
import Paginacao from "@/components/Paginacao";
import Resultado from "@/components/Resultado";
import RodapeContato from "@/components/RodapeContato";

export default function resultadoBusca(){
    return(
        <>
        <Cabecalho />
        <Resultado />
        <ListPesquisa />
        <Paginacao />
        <RodapeContato />
        </>
    )
}