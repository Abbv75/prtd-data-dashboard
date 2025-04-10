import { Card, Divider, Typography } from '@mui/joy'
import { green, orange } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Card
            sx={{
                flexDirection: "row",
                gap: 2,
                background: green[800],
                borderRadius: 0,
                p: 1,
                flexWrap: "wrap",
                border: 0,
                "&>a": {
                    color: orange[300]
                },
                "&>hr": {
                    bgcolor: orange[300]
                },
                justifyContent: "center"
            }}
        >
            <Typography textColor={"white"} >
                Copyright © 2024 Projet de Pôle Agro-Industriel dans la région du Bélier
            </Typography>
            <Divider orientation='vertical' />
            <Link to={""}>
                A PROPOS 2PAI-BÉLIER
            </Link>
            <Divider orientation='vertical' />
            <Link to={""}>
                NOS ACTUALITÉS
            </Link>
            <Divider orientation='vertical' />
            <Link to={""}>
                AGENDA
            </Link>
            <Divider orientation='vertical' />
            <Link to={""}>
                CONTACT
            </Link>
        </Card>
    )
}

export default Footer