import { Card, Stack, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";
import { PAGE_PATH } from '../constant';

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
                    PAGE_PATH.map((value, index) => (
                        <Link to={value.path} key={index}>
                            <Typography level="h4" textColor={"white"} >
                                {value.title}
                            </Typography>
                        </Link>
                    ))
                }
            </Stack>


        </Card>
    )
}

export default PlainNavbar