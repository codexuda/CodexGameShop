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
    }
]
const columns = [

    {
        name: 'ID',
        selector: row => row.id
    },
    {
        name: 'APELLIDO',
        selector: row => row.apellido
    },
    {
        name: 'EDAD',
        selector: row => row.edad
    },
    //direccion
    {
        name: 'CALLE',
        selector: row => row.calle
    },
    {
        name: 'CIUDAD',
        selector: row => row.ciudad
    },
    {
        name: 'LOCALIDAD',
        selector: row => row.localidad
    },
    {
        name: 'CODIGOPOSTAL',
        selector: row => row.codigopostal
    },

    //telefono
    {
        name: 'TIPO',
        selector: row => row.tipo
    },

    {
        name: 'NUMERO',
        selector: row => row.numero
    },
    {
        name: 'NOMBRE',
        selector: row => row.nombre
    },
    {
        name: 'CORREO',
        selector: row => row.correo
    },
]

const Clientes = () => {
    //se configura los hooks
    const [users, setUsers] = useState([])}