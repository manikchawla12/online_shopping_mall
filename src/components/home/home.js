import { Fragment } from "react"
import { Top_crousel } from "./homeComponent/top_crousel";
import { Mid_home } from "./homeComponent/mid_home";
import { Mid_home_cards } from "./homeComponent/mid_home_cards";

const Home=()=>{
    return(
        <Fragment>
            <Top_crousel/>
            <Mid_home/>
            <Mid_home_cards/>
        </Fragment>
    )
}

export default Home;