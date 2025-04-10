import { Avatar, Button, ButtonGroup, Stack, Typography } from "@mui/joy"
import { CardMedia } from "@mui/material"
import { IMAGES } from '../constant'
import { green } from "@mui/material/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <Stack
            px={"5%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
            >
                <CardMedia
                    component="img"
                    src={IMAGES.banqueMondialLogo}
                    sx={{
                        height: 40,
                        width: "auto"
                    }}
                />
                <CardMedia
                    component="img"
                    src={IMAGES.armorie}
                    sx={{
                        height: 40,
                        width: "auto"
                    }}
                />
                <CardMedia
                    component="img"
                    src={IMAGES.logo}
                    sx={{
                        height: 40,
                        width: "auto"
                    }}
                />
            </Stack>

            {
                window.innerWidth > 800 && (
                    <Stack
                        alignItems={"center"}
                    >
                        <Typography level="h3">
                            Projet de Restauration des Terres Dégradées (PRTD-MALI)
                        </Typography>

                        <Typography level="h4" textColor={green[800]} >Interface de gestion</Typography>
                    </Stack>
                )
            }

            <ButtonGroup
                variant="plain"
            >
                <Button>
                    <Avatar color="success" />
                </Button>

                <Button>
                    <Avatar color="danger">
                        <FontAwesomeIcon icon={faLock} />
                    </Avatar>
                </Button>
            </ButtonGroup>

        </Stack>
    )
}

export default Header