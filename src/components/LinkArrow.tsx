import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/joy'

const LinkArrow = (
    {
        text,
        path,
        buttonStyle
    }: {
        text?: string,
        path?: string,
        buttonStyle?: React.CSSProperties
    }
) => {
    return (
        <Button
            fullWidth
            sx={[
                {
                    background: "white",
                    p: 0,
                    py: 1,
                    fontWeight: "normal"
                }
            ]}
            style={buttonStyle}
            endDecorator={
                <FontAwesomeIcon icon={faArrowRight} />
            }
            component={path ? "a" : "button"}
            href={path}
        >
            <Typography sx={{ width: "100%" }} textAlign={"left"}>{text}</Typography>
        </Button>
    )
}

export default LinkArrow