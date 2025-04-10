import { Card, Stack, Typography } from "@mui/joy"
import { HEADER_LINKS } from "../constant"
import { Link } from "react-router-dom"
import { green } from "@mui/material/colors"

const PlainNavbar = () => {
    return (
        <Card
            sx={{
                borderRadius: 0,
                border: 0,
                background: green[800],
            }}
        >
            <Stack
                justifyContent="center"
                direction="row"
                gap={3}
            >
                {
                    HEADER_LINKS.map((value, index) => (
                        <Link to={value.path} key={index}>
                            <Typography level="h4" textColor={"white"} >
                                {value.text}
                            </Typography>
                        </Link>
                    ))
                }
            </Stack>


        </Card>
    )
}

export default PlainNavbar