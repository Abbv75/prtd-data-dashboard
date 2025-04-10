import { Stack, Tab, tabClasses, TabList, Tabs } from '@mui/joy'
import { green, orange } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { TECHNIQUE_CATEGORIE_T } from '../../types';
import { getTechniquesCategorie } from '../../functions/techniquesCategorie/getTechniquesCategorie';
import { toast } from 'react-toastify';

const Accueil = () => {
    const [categorie, setcategorie] = useState([] as TECHNIQUE_CATEGORIE_T[]);

    const loadTechniqueCategorie = async () => {
        const res = await getTechniquesCategorie();

        if (typeof res === "string") {
            toast.error(res);
            return;
        }

        setcategorie(res);
    }

    useEffect(
        () => {
            loadTechniqueCategorie();
        }, []
    )

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
                    {
                        categorie.map((value, index) => (
                            <Tab key={index} disableIndicator value={value.idTechniquesCategorie}>{value.nomTechniquesCategorie}</Tab>
                        ))
                    }
                </TabList>
            </Tabs>
        </Stack>
    )
}

export default Accueil