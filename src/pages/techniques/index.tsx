import { Button, Stack, Tab, tabClasses, Table, TabList, TabPanel, Tabs } from '@mui/joy';
import { green, orange } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { TECHNIQUE_CATEGORIE_T, TECHNIQUE_T } from '../../types';
import { getTechniquesCategorie } from '../../functions/techniquesCategorie/getTechniquesCategorie';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Collapse, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getTechnique } from '../../functions/technique/getTechnique';
import CategorieForm from './CategorieForm';
import { TechniqueContext } from '../../providers/TechniqueContext';
import TechniqueForm from './TechniqueForm';

const Techniques = () => {
    const [categorie, setcategorie] = useState([] as TECHNIQUE_CATEGORIE_T[]);
    const [techniqueData, settechniqueData] = useState([] as TECHNIQUE_T[]);
    const [showAddCategorie, setshowAddCategorie] = useState(false);
    const [showCategorieForm, setshowCategorieForm] = useState(false);
    const [showTechniqueForm, setshowTechniqueForm] = useState(false);

    const loadTechniqueCategorie = async () => {
        const res = await getTechniquesCategorie();
        const techniqueListe = await getTechnique();

        if (typeof res === "string") {
            toast.error(res);
            return;
        }

        setcategorie(res);
        settechniqueData(typeof techniqueListe === "string" ? [] : techniqueListe);
    }

    useEffect(
        () => {
            loadTechniqueCategorie();
        }, []
    )

    return (
        <TechniqueContext.Provider
            value={{
            }}
        >
            <Stack>
                <CategorieForm
                    open={showCategorieForm}
                    setOpen={setshowCategorieForm}
                    loadTechniqueCategorie={loadTechniqueCategorie}
                />

                <TechniqueForm
                    open={showTechniqueForm}
                    setOpen={setshowTechniqueForm}
                />

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
                        onMouseEnter={() => setshowAddCategorie(true)}
                        onMouseLeave={() => setshowAddCategorie(false)}
                        defaultValue={categorie[0]?.idTechniquesCategorie}
                    >
                        {
                            categorie.map((value, index) => (
                                <Tab
                                    key={index}
                                    disableIndicator
                                    value={value.idTechniquesCategorie}
                                >{value.nomTechniquesCategorie}</Tab>
                            ))
                        }

                        <Collapse in={showAddCategorie} orientation='horizontal' unmountOnExit>
                            <Button
                                endDecorator={<FontAwesomeIcon icon={faPlusCircle} />}
                                sx={{ borderRadius: 0 }}
                                onClick={() => setshowCategorieForm(true)}
                            >Ajouter</Button>
                        </Collapse>

                    </TabList>

                    {
                        categorie.map((value, index) => (
                            <TabPanel
                                key={index}
                                value={value.idTechniquesCategorie}
                                sx={{
                                    bgcolor: orange[50],
                                    border: 'none',
                                }}
                            >
                                <TableContainer>
                                    <Button
                                        sx={{ mb: 1 }}
                                        endDecorator={<FontAwesomeIcon icon={faPlusCircle} />}
                                        onClick={() => setshowTechniqueForm(true)}
                                    >Ajouter  une techniques ou categorie</Button>

                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                {
                                                    techniqueData.filter(x => x.id_techniquesCategorie === value.idTechniquesCategorie)
                                                        .map((x, index) => (
                                                            <TableCell key={index}>{x.titre}</TableCell>
                                                        ))
                                                }
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                {
                                                    techniqueData.filter(x => x.id_techniquesCategorie === value.idTechniquesCategorie)
                                                        .map((x, index) => (
                                                            <TableCell key={index}>{x.content}</TableCell>
                                                        ))
                                                }
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </Stack>
        </TechniqueContext.Provider>
    )
}

export default Techniques