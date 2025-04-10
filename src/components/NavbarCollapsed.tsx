import { Button, Card, Divider, Drawer, Stack, Typography } from "@mui/joy"
import { PAGE_PATH } from "../constant"
import { Link } from "react-router-dom"
import { green, red } from "@mui/material/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const NavbarCollapsed = () => {
    const [isOpen, setisOpen] = useState(false);

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
                <FontAwesomeIcon
                    color="white"
                    icon={faBars}
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => setisOpen(!isOpen)}
                />
            </Stack>

            <Drawer
                open={isOpen}
                anchor="left"
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: green[800],
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            justifyContent: "center"
                        }
                    }
                }}
                onClose={() => setisOpen(false)}
            >
                <Button
                    color="warning"
                    variant="solid"
                    sx={{
                        aspectRatio: "1/1",
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        bgcolor: red[800],
                        mb: 3
                    }}
                >
                    <FontAwesomeIcon
                        icon={faTimes}
                    />
                </Button>

                {
                    PAGE_PATH.map((value, index) => (
                        <>
                            <Link
                                to={value.path}
                                key={index}
                                onClick={() => setisOpen(false)}
                            >
                                <Typography level="h4" textColor={"white"} >
                                    {value.title}
                                </Typography>
                            </Link>
                            {
                                index === PAGE_PATH.length - 1 ? null : <Divider sx={{ width: "100%", bgcolor: "white" }} />
                            }
                        </>
                    ))
                }
            </Drawer>

        </Card>
    )
}

export default NavbarCollapsed