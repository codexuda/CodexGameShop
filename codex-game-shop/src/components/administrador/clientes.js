import React, { useState, useEffect } from 'react'
import 'styled-components'

import DataTable, { createTheme } from 'react-data-table-component'

const data = [
    {
        'clientes': [
            {
                identificacion: 111111,
                apellido: 'Smith',
                edad: 34,
                dirección: {
                    calle: '21 2nd Street',
                    ciudad: 'New York',
                    localidad: 'NY',
                    codigopostal: 10021
                },
                telefono: [
                    {
                        tipo: 'home',
                        numero: '212 555-1234'
                    },
                    {
                        tipo: 'fax',
                        numero: '646 555-4567'
                    }
                ],
                nombre: 'John',
                correo: 'ja@prueba.com'
            },
            {
                'identificacion': 22222,
                apellido: 'Claus',
                edad: 25,
                dirección: {
                    calle: '21 2nd Street',
                    ciudad: 'New York',
                    localidad: 'NY',
                    codigopostal: 10021
                },
                telefono: [
                    {
                        tipo: 'home',
                        numero: '313 555-1234'
                    },
                    {
                        tipo: 'fax',
                        numero: '654 555-4567'
                    }
                ],
                nombre: 'Mario',
                correo: 'mas@prueba.com'
            }
        ],
]
const columns = [

    {
        name: 'ID',
        selector: row => row.id
    },
    {
        name: 'apellido',
        selector: row => row.apellido
    },
    {
        name: 'edad',
        selector: row => row.edad
    },
    //direccion
    {
        name: 'calle',
        selector: row => row.calle
    },
    {
        name: 'ciudad',
        selector: row => row.ciudad
    },
    {
        name: 'localidad',
        selector: row => row.localidad
    },
    {
        name: 'codigopostal',
        selector: row => row.codigopostal
    },
    {
        name: 'codigopostal',
        selector: row => row.codigopostal
    },

    //telefono
    {
        name: 'tipo',
        selector: row => row.tipo
    },

    {
        name: 'numero',
        selector: row => row.numero
    },
    {
        name: 'nombre',
        selector: row => row.nombre
    },
    {
        name: 'correo',
        selector: row => row.correo
    },
]

const clientes = () => {
    //se configura los hooks
    const [users, setUsers] = useState([])