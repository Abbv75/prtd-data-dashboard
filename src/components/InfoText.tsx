import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@mui/joy'
import { SxProps } from '@mui/material'

const InfoText = (
    {
        text,
        maxWidth = "initial",
        sx
    }: {
        text: string,
        maxWidth?: "initial" | number,
        sx?: SxProps
    }
) => {
    return (
        <Typography maxWidth={maxWidth} sx={sx}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
            {text}
        </Typography>
    )
}

export default InfoText