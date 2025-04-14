import { ClickAwayListener, Collapse, TableCell } from '@mui/material'
import { LOADING_STATE_T, TECHNIQUE_T } from '../../types'
import { Button, ButtonGroup, CircularProgress, Input, Typography } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { TechniqueContext } from '../../providers/TechniqueContext'
import { editTechniqueTitle } from '../../functions/technique/editTechniqueTitle'
import { toast } from 'react-toastify'
import { deleteTechnique } from '../../functions/technique/deleteTechnique'

const THCell = (
    {
        value
    }: {
        value: TECHNIQUE_T
    }
) => {
    const { loadTechniqueCategorie } = useContext(TechniqueContext);

    const [editMode, seteditMode] = useState(false);
    const [newValue, setNewValue] = useState(value.titre);
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const handleClickAway = async () => {
        try {
            if (newValue == value.titre) {
                seteditMode(false);
                return;
            }

            setloadingState("En cours de chargement.");

            const res = await editTechniqueTitle(value.idTechnique, newValue);

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
        try {
            if (!window.confirm("Etes voous sur de vouloir les supprimer ?")) {
                return;
            }

            const res = await deleteTechnique(value.idTechnique);

            if (typeof res === "string" || !res) {
                toast.error(res);
            }
            else {
                loadTechniqueCategorie();
                seteditMode(false);
                toast.success("Element supprimé avec succès");
            }

            setloadingState(null)

        } catch (error) {
            toast.error(`Une erreur est survenue lors de la suppression`);
            setloadingState(null);
        }
    }

    return (
        <TableCell>
            <Collapse in={!editMode} unmountOnExit>
                <Typography
                    onDoubleClick={() => seteditMode(true)}
                >
                    {value.titre}
                </Typography>
            </Collapse>

            <ClickAwayListener onClickAway={handleClickAway} >
                <Collapse in={editMode} unmountOnExit>
                    <Input
                        value={newValue}
                        onChange={({ target }) => setNewValue(target.value)}
                        endDecorator={
                            loadingState == "En cours de chargement."
                                ? (
                                    <CircularProgress />
                                )
                                : (
                                    <Button color='danger'
                                        endDecorator={
                                            < FontAwesomeIcon icon={faTrashAlt} />
                                        }
                                        sx={{
                                            px: 0.5,
                                            m: 0,
                                            fontSize: 11
                                        }}
                                        variant='outlined'
                                        disabled={!newValue || newValue == "" || (loadingState as any) == "En cours de chargement."}
                                        loading={(loadingState as any) == "En cours de chargement."}
                                        onClick={handleDelete}
                                    >
                                        Sup.
                                    </Button>
                                )
                        }
                        sx={{
                            px: 0.5,
                            fontSize: 11
                        }}
                    />
                </Collapse>
            </ClickAwayListener>

        </TableCell >
    )
}

export default THCell