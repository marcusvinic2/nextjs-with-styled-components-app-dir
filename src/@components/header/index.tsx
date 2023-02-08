'use client'
import React from "react";
import * as Component from './styles'

const Header: React.FC = () => {
    return (
        <Component.Header>

            <Component.ColunmOffers>Ofertas</Component.ColunmOffers>
            
            <Component.Colunm style={{ background: 'green' }}>
                <Component.ItemColunm style={{ width: '40%', justifyContent: 'flex-start' }}>item 1</Component.ItemColunm>
                <Component.ItemColunm style={{ width: '60%', justifyContent: 'flex-end' }}>item 2</Component.ItemColunm>
            </Component.Colunm>

            <Component.Colunm style={{ background: 'white', justifyContent: 'space-between' }}>
                <Component.ItemColunm><img src="https://nwsys.com.br/images/logo_b.png" /></Component.ItemColunm>
                <Component.ItemColunm><input placeholder="pesquise aqui" /></Component.ItemColunm>
                <Component.ItemColunm>Cadastre-se ou entre</Component.ItemColunm>
                <Component.ItemColunm>Carrinho</Component.ItemColunm>
            </Component.Colunm>

            <Component.Colunm style={{ background: 'gray' }}>
                MENU
            </Component.Colunm>

        </Component.Header>
    )
}

export default Header