import React from 'react'

export default function FavoriteButton(props) {
    return (
        <button onClick={()=>props.clickHandler(props.data,props.whereToSave)}>Save</button>
    )
}
