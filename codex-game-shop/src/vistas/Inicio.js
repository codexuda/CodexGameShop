import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player';
import RutaVideo from '../assets/videos/videoInicio.mp4'

const obtenerEstilos = makeStyles((tema) => ({
    raiz: {
        width: '100%',
        height: '90.5vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        }
    },
    superponer: {
        position: 'absolute',
        top: 64,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    titulo: {
        paddingBottom: tema.spacing(4),
    }
}
)
);

const Inicio = () => {
    const estilos = obtenerEstilos();
    return (
        <section className={estilos.raiz}>
            <ReactPlayer
                url={RutaVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <div className={estilos.superponer}>
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                >

                    <Typography variant="h6" component="h1" className={estilos.titulo}>
                        Bienvenidos a Codex Store
                    </Typography>
                </Box>
            </div>
        </section >
    );
}

export default Inicio;