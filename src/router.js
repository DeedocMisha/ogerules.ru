import { createRouter,createWebHashHistory } from "vue-router";
import RusIaz from "./components/RusIaz.vue";
import MaIne from "./components/MaIne.vue";
import AboutMe from "./components/AboutMe.vue"
import Math from "./components/MaTh.vue"
import Chem from "./components/CheMistry.vue"
import inf from "./components/InforNat.vue"
import RusVop from "./components/RusVopr.vue"
import MatVopr from "./components/MathVopr.vue"
import CheVopr from "./components/ChemVopr.vue"
import InfoVopr from "./components/InfVopr.vue"

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/Rusiaz', component: RusIaz },
        {path: '/',component:MaIne},
        {path: '/AboutMe',component:AboutMe},
        {path: '/Math',component:Math},
        {path: '/Chemistry',component:Chem},
        {path: '/Informatica',component:inf},
        {path: '/Rusiaz/RusVoprosy' ,component:RusVop},
        {path: '/Math/MathVoprosy',component:MatVopr},
        {path: '/Chemistry/ChemVoprosy' ,component:CheVopr},
        {path: '/Informatica/InfVoprosy' ,component:InfoVopr},
    ]
})
