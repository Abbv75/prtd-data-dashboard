import { Stack, Typography } from "@mui/joy"
import { CardMedia } from "@mui/material"
import { IMAGES } from '../constant'
import { green } from "@mui/material/colors"

const Header = () => {
    return (
        <Stack
            py={2}
            px={"5%"}
            direction={"row"}
            justifyContent={"space-between"}
        >
            <CardMedia
                component="img"
                src={IMAGES.logo}
                sx={{
                    height: 80,
                    width: "auto"
                }}
            />

            {
                window.innerWidth > 800 && (
                    <Stack
                        alignItems={"center"}
                    >
                        <Typography level="h2">
                            Projet de Restauration des Terres Dégradées (PRTD-MALI)
                        </Typography>

                        <Typography level="h1" textColor={green[800]} >DATA</Typography>
                    </Stack>
                )
            }

            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
            >
                <CardMedia
                    component="img"
                    src={IMAGES.banqueMondialLogo}
                    sx={{
                        height: 80,
                        width: "auto"
                    }}
                />
                <CardMedia
                    component="img"
                    src={IMAGES.armorie}
                    sx={{
                        height: 80,
                        width: "auto"
                    }}
                />

            </Stack>

        </Stack>
    )
}

export default Header