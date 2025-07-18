import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Grid, Input, LinearProgress } from "@mui/joy"
import AddForm from "./AddForm"
import { useEffect, useState } from "react"
import { FICHES_PROJETS_T, LOADING_STATE_T } from "../../types"
import { toast } from "react-toastify"
import { getAllFichesProjets } from "../../functions/fichesProjets/getAllFichesProjets"
import FichesProjetsCard from "./FichesProjetsCard"
import { FichesProjetsContext } from "../../providers/FichesProjetsContext"

const FichesProjets = () => {
    const [isFormOpen, setisFormOpen] = useState(false);
    const [data, setdata] = useState([] as FICHES_PROJETS_T[]);
    const [laodingState, setlaodingState] = useState(null as LOADING_STATE_T);

    const laodData = async () => {
        try {
            const dataTmp = data;
            setdata([]);

            setlaodingState("En cours de chargement.");
            const res = await getAllFichesProjets();

            typeof res !== "string" ? setdata(res) : setdata(dataTmp);
            setlaodingState(null);
        } catch (error) {
            setlaodingState(null);
            toast.error("Une erreur est survenue lors de la récupération des bonnes pratiques.")
        }
    }
    useEffect(() => {
        laodData();
    }, [])

    return (
        <FichesProjetsContext.Provider
            value={{
                laodData
            }}
        >
            <Grid
                container
                spacing={2}
                m={0}
            >
                <AddForm open={isFormOpen} setOpen={setisFormOpen} />

                <Grid xs={12}>
                    <Card
                        sx={{ borderRadius: 0, flexDirection: "row", p: 0.5, gap: 1 }}
                    >
                        <Input
                            fullWidth
                            placeholder="Saisissez pour rechercher"
                            startDecorator={<FontAwesomeIcon icon={faSearch} />}
                        />
                        <Button
                            endDecorator={<FontAwesomeIcon icon={faPlusCircle} />}
                            onClick={() => setisFormOpen(true)}
                        >Ajouter</Button>
                    </Card>
                </Grid>

                {
                    laodingState === "En cours de chargement."
                        ? (
                            <Grid
                                xs={12}
                            >
                                <LinearProgress />
                            </Grid>
                        )
                        : (
                            data.map((value, index) => (
                                <Grid
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={index}
                                >
                                    <FichesProjetsCard value={value} />
                                </Grid>
                            ))
                        )
                }

            </Grid>
        </FichesProjetsContext.Provider>
    )
}

export default FichesProjets