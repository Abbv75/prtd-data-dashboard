import { CardMedia } from '@mui/material'
import { CardContent, Typography, Card, Button } from '@mui/joy'
import { green } from '@mui/material/colors'
import { FICHES_PROJETS_T } from '../../types'

const FichesProjetsCard = (
    {
        value
    }: {
        value: FICHES_PROJETS_T
    }
) => {
    return (
        <Card
            sx={{
                borderRadius: 0,
                p: 0,
                background: green[800],
                border: 0
            }}
        >
            <CardMedia
                component="img"
                // src={IMAGES.image1}
                sx={{
                    height: 200,
                }}
            />

            <CardContent
                sx={{
                    px: 2,
                    pb: 2,
                    gap: 2
                }}
            >
                <Typography level='h4' textColor={"white"} >
                    Projet d'implantation d'une unité de transformation du riz dans la zone du projet 2PAI-Belier
                </Typography>
                <Typography textColor={'gray'}>
                    Fiche technique élaborée par la CNRA portant sur la production d'engrais sous forme de compost à partir de la paille de riz.
                </Typography>
                <Button
                    sx={{
                        borderRadius: 0,
                        width: "fit-content"
                    }}
                    color='warning'
                >Voir la fiche</Button>
            </CardContent>

        </Card>
    )
}

export default FichesProjetsCard