import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Grid, Input, Stack } from "@mui/joy"
import BonnesPratiquesCard from "./BonnesPratiquesCard"
import AddForm from "./AddForm"
import { useState } from "react"

const BonnesPratiques = () => {
    const [isFormOpen, setisFormOpen] = useState(false);

    return (
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

            <Grid
                xs={12}
                sm={4}
            >
                <BonnesPratiquesCard />
            </Grid>
            <Grid
                xs={12}
                sm={4}
            >
                <BonnesPratiquesCard />
            </Grid>

        </Grid>
    )
}

export default BonnesPratiques