import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Grid, Input, LinearProgress, Stack } from "@mui/joy"
import BonnesPratiquesCard from "./BonnesPratiquesCard"
import AddForm from "./AddForm"
import { useEffect, useState } from "react"
import { BONNES_PRATIQUES_T, LOADING_STATE_T } from "../../types"
import { getAllBonnesPratiques } from "../../functions/bonnesPratiques/getAllBonnesPratiques"
import { toast } from "react-toastify"
import { BonnesPratiquesContext } from "../../providers/BonnesPratiquesContext"

const BonnesPratiques = () => {
    const [isFormOpen, setisFormOpen] = useState(false);
    const [data, setdata] = useState([] as BONNES_PRATIQUES_T[]);
    const [laodingState, setlaodingState] = useState(null as LOADING_STATE_T);

    const laodData = async () => {
        try {
            const dataTmp = data;
            setdata([]);

            setlaodingState("En cours de chargement.");
            const res = await getAllBonnesPratiques();

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
        <BonnesPratiquesContext.Provider
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
                                    md={3}
                                    key={index}
                                >
                                    <BonnesPratiquesCard
                                        titre={value.intitule}
                                        description={value.description}
                                        image={value.image}
                                        id={value.idBonnesPratiques}
                                    />
                                </Grid>
                            ))
                        )
                }

            </Grid>
        </BonnesPratiquesContext.Provider>
    )
}

export default BonnesPratiques