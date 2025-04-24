import { CardMedia } from '@mui/material'
import { CardContent, Typography, Card, Button, ButtonGroup } from '@mui/joy'
import { green } from '@mui/material/colors'
import { FICHES_PROJETS_T, LOADING_STATE_T } from '../../types'
import { useContext, useState } from 'react'
import { deleteFichesProjets } from '../../functions/fichesProjets/deleteFichesProjets'
import { toast } from 'react-toastify'
import { FichesProjetsContext } from '../../providers/FichesProjetsContext'
import { faFilePdf, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FichesProjetsCard = (
    {
        value
    }: {
        value: FICHES_PROJETS_T
    }
) => {
    const { laodData } = useContext(FichesProjetsContext);

    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);;

    const handleDelete = async () => {
        try {
            if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette fiche de projet ?")) return;

            setloadingState("En cours de chargement.");

            const res = await deleteFichesProjets(value.idFichesProjets);
            if (typeof res === "string" || !res) {
                toast.error("Une erreur est survenue lors de la suppression.");
                setloadingState(null);
                return;
            }

            toast.success("Suppression réussie.");
            laodData();
            setloadingState(null);
        } catch (error) {
            toast.error("Une erreur est survenue lors de la suppression.");
            setloadingState(null);
        }
    }

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
                src={`${process.env.REACT_APP_IMG_URL}/fiches-projets/${value.image}`}
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
                    {value.intitule}
                </Typography>
                <Typography textColor={'white'}>
                    {value.description}
                </Typography>

                <ButtonGroup
                    sx={{
                        borderRadius: 0,
                        "> *:is(button, a)": {
                            color: "white",
                        },
                        "> *:is(button, a):hover": {
                            color: "green",
                        }
                    }}
                >
                    <Button
                        component="a"
                        target='_blank'
                        fullWidth
                        href={`${process.env.REACT_APP_PDF_URL}/fiches-projets/${value.fichier}`}
                        startDecorator={<FontAwesomeIcon icon={faFilePdf} />}
                    >Telecharger</Button>

                    <Button
                        color="danger"
                        loading={loadingState === "En cours de chargement."}
                        onClick={handleDelete}
                        endDecorator={<FontAwesomeIcon icon={faTimes} />}
                    >Supprimer</Button>

                </ButtonGroup>
            </CardContent>

        </Card>
    )
}

export default FichesProjetsCard