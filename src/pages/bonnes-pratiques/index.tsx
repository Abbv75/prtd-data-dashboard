import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Input, Stack } from "@mui/joy"

const BonnesPratiques = () => {
    return (
        <Stack>
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
                >Ajouter</Button>
            </Card>
        </Stack>
    )
}

export default BonnesPratiques