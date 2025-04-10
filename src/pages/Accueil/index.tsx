import { Stack, Tab, tabClasses, TabList, Tabs } from '@mui/joy'
import { green, orange, red } from '@mui/material/colors'

const index = () => {
    return (
        <Stack>
            <Tabs>
                <TabList
                    tabFlex={"auto"}
                    sx={{
                        bgcolor: orange[500],
                        fontWeight: 700,
                        [`& .${tabClasses.root}`]: {
                            [`&[aria-selected="true"]`]: {
                                color: 'white',
                                bgcolor: green[800],
                            },
                        },
                    }}
                >
                    <Tab disableIndicator value="1">One</Tab>
                    <Tab disableIndicator value="2">One</Tab>
                    <Tab disableIndicator value="3">One</Tab>
                </TabList>
            </Tabs>
        </Stack>
    )
}

export default index