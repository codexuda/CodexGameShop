import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, ListItem, ListItemText, Box, List } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }
    })
);

const MenuPrincipal = () => {
    const estilos = obtenerEstilos();

    //manejo del estado del menú
    const [estadoMenu, setEstadoMenu] = useState(false);

    //rutina que dactiva el despliegue del menú
    const mostrarMenu = (estado) => () => {
        setEstadoMenu(estado);
    }

    const menu = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={mostrarMenu(false)}
        >
            <List>
                {['Administrador', 'Clientes'].map((texto, indice) => (
                    <ListItem button component="a" href={`/${texto}`}>
                        <img src={require(`../assets/iconos/${texto}.png`).default} />
                        <ListItemText primary={texto} />
                    </ListItem>
                )
                )
                }
            </List>
        </Box>
    )

    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    ClassName={estilos.botonMenu}
                    onClick={mostrarMenu(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" classsName={estilos.titulo}>
                    Tienda Codex Store
                </Typography>

            </Toolbar>
            <Drawer
                anchor="left"
                open={estadoMenu}
                onClose={mostrarMenu(false)}
            >
                {menu()}

            </Drawer>


        </AppBar>
    );

}
export default MenuPrincipal