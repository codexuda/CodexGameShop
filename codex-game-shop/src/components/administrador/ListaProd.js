import React, { useState, useEffect } from 'react'
import 'styled-components'

import DataTable, { createTheme } from 'react-data-table-component'

const data = [
  {
    "id": "GGOEAFKA087499",
    "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
    "name": "Android Small Removable Sticker Sheet",
    "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
    "price": "2.99"
  },
  {
    "id": "GGOEAFKA087599",
    "urlImagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
    "name": "Android Large Removable Sticker Sheet",
    "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    "features": "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
    "price": "2.99"
  }

]
const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'Imagen',
    selector: row => <img src= {row.urlImagen}	height="60" width="60"/>
  },
  {
    name: 'Nombre',
    selector: row => row.name
  },
  {
    name: 'Descripción',
    selector: row => row.description
  },
  {
    name: 'Caracteristicas',
    selector: row => row.features
  },
  {
    name: 'Valor',
    selector: row => row.price
  }
]
const ListaProd = () => {
  //se configura los hooks
  const [users, setUsers] = useState([])

  //Funcion para mostrar los datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
  useEffect( () =>{
    showData()
  },[])

   return (
    <div>
       <h1>Inventario</h1>
       <DataTable
         columns={columns}
         data={data}
         pagination
         theme='solarized'
       />
     </div>
     
   )



}
export default ListaProd