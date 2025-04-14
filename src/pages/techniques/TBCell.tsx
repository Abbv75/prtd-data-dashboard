import { ClickAwayListener, Collapse, TableCell } from '@mui/material'
import { LOADING_STATE_T, TECHNIQUE_T } from '../../types'
import { Button, ButtonGroup, Stack, Textarea, Typography } from '@mui/joy'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { editTechniqueContent } from '../../functions/technique/editTechniqueContent'
import { TechniqueContext } from '../../providers/TechniqueContext'

const TBCell = (
    {
        value
    }: {
        value: TECHNIQUE_T
    }
) => {
    const { loadTechniqueCategorie } = useContext(TechniqueContext);

    const [editMode, seteditMode] = useState(false);
    const [newValue, setNewValue] = useState(value.content);
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const handleSubmit = async () => {
        try {
            setloadingState("En cours de chargement.");

            const res = await editTechniqueContent(value.idTechnique, newValue);

            if (typeof res === "string" || !res) {
                toast.error(res);
            }
            else {
                loadTechniqueCategorie();
                seteditMode(false);
                toast.success("Element modifié avec succès");
            }

            setloadingState(null)

        } catch (error) {
            toast.error(`Une erreur est survenue lors de la modification`);
            setloadingState(null);
        }
    }

    const handleDelete = async () => {

    }

    return (
        <TableCell>
            <Collapse in={!editMode} unmountOnExit>
                <Typography
                    onDoubleClick={() => seteditMode(true)}
                    sx={{ whiteSpace: "pre-line" }}
                >
                    {value.content}
                </Typography>
            </Collapse>

            <Collapse
                in={editMode}
                unmountOnExit
            >
                <ClickAwayListener onClickAway={() => seteditMode(false)} >
                    <Stack gap={1}>
                        <Textarea
                            value={newValue}
                            onChange={({ target }) => setNewValue(target.value)}
                            placeholder="Entrez votre contenu"
                        />

                        <ButtonGroup size='sm' >
                            {
                                loadingState != "En cours de chargement." && (
                                    <Button color='neutral' onClick={() => seteditMode(false)} >Annuler</Button>
                                )
                            }
                            <Button
                                fullWidth
                                color='primary'
                                disabled={!newValue || newValue == "" || loadingState == "En cours de chargement."}
                                loading={loadingState == "En cours de chargement."}
                                onClick={() => handleSubmit()}
                            >Valider</Button>
                        </ButtonGroup>
                    </Stack>
                </ClickAwayListener>
            </Collapse>
        </TableCell>
    )
}

export default TBCell