import React from "react"

import Filho from "./Filho"

export default props =>
    <div>
        <Filho {...props}><mark>João</mark></Filho>
        <Filho sobrenome={props.sobrenome}><mark>Maria</mark></Filho>
        <Filho sobrenome="Silva"><mark>Pedro</mark></Filho>
    </div>