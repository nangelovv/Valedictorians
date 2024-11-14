import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DropMenu({ menuItems }) {
    const navigate = useNavigate()
    return (<>
        <mdui-list id='list-menu'>
            {menuItems.map((item, index) => (
                <mdui-list-item key={index} onClick={() => navigate(item.path)}>
                    {item.label}
                </mdui-list-item>
            ))}
        </mdui-list>
    </>
    )

}
