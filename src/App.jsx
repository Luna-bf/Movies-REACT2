import { MovieAPI } from "./components/MovieAPI";
import { SignUp } from './components/pages/SignUp'

export function App() {
    //Revoir la difference entre les export normaux et par defaut
    //Redemander se qu'il faut integrer sur l'API Movies !!!
    
    //DEMANDER DE L AIDE FAUT QUE JE RATTRAPE MON ENORME RETARD

    return (
        <>
            {/*Tout ce qui est ici, c'est le contenu de mon routeur*/}
            <MovieAPI />
            <SignUp />
            {/*Ici il va y avoir chaques routes individuelles*/}
        </>
    )
}