import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack, Typography } from '@mui/joy'
import { green } from '@mui/material/colors'

const CardTitleZone = ({
    title = `Intrants et équipements`,
    icon = faBookAtlas
}) => {
    return (
        <Stack
            sx={{
                p: 1,
                bgcolor: green[100],
                borderRadius: `10px 10px 0 0`,
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Typography fontWeight={700} textColor={green[900]} component={"h1"}>{title}</Typography>
            <FontAwesomeIcon icon={icon} />
        </Stack>
    )
}

export default CardTitleZone