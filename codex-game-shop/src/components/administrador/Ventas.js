import React, { useState, useEffect } from 'react'
import 'styled-components'

import DataTable, { createTheme } from 'react-data-table-component'

const data = [
  {
    id: 1,
    fecha: '2022/06/22',
    venta: 2500000,
    factura: 'FV-001'
  },
  {
    id: 2,
    fecha: '2022/06/22',
    venta: 5500000
  },
  {
    id: 3,
    fecha: '2022/06/22',
    venta: 6500000
  },
  {
    id: 4,
    fecha: '2022/07/22',
    venta: 7500000,
    factura: 'FV-001'
  }

]
const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'FACTURA',
    selector: row => row.factura
  },
  {
    name: 'FECHA',
    selector: row => row.fecha
  },
  {
    name: 'VENTAS',
    selector: row => row.venta
  }
]
const Ventas = () => {
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

  //Definimos la columnas con Datatable
  /*const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'NAME',
      selector: row => row.name
    },
    {
      name: 'E-MAIL',
      selector: row => row.email
    }
  ]*/
  // Crear Temas
  /*createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
  });*/

  return (
   <div>
      <h1>Ventas</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        //theme='solarized'
      />
    </div>
    
  )
}

export default Ventas

