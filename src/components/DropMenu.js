import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DropMenu({ menuItems, onNavigate }) {
    const navigate = useNavigate()
    return (<>
        <mdui-list id='list-menu'>
            {menuItems.map((item, index) => (
                <mdui-list-item key={index} onClick={() => item.external ? navigate(item.path) : onNavigate(item.path)}>
                    {item.label}
                </mdui-list-item>
            ))}
        </mdui-list>
    </>
    )

}
