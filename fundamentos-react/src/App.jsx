/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div>
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - Com Parametro">
            <ComParametro
                titulo="Situação"
                aluno="Pedro Silva"
                nota={9.3} />
        </Card>

        <Card titulo="#01 - Com Parametro">
            <Primeiro></Primeiro>
        </Card>


    </div>