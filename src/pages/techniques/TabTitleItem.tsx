import { Avatar, Button, ButtonGroup, CircularProgress, Input, Stack, Tab, Tooltip, Typography } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFeather, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from '@mui/material';
import { useContext, useState } from 'react';
import { TechniqueContext } from '../../providers/TechniqueContext';
import { deleteTechniquesCategorie } from '../../functions/techniquesCategorie/deleteTechniquesCategorie';
import { toast } from 'react-toastify';
import { LOADING_STATE_T } from '../../types';
import { editTechniquesCategorie } from '../../functions/techniquesCategorie/editTechniquesCategorie';

const TabTitleItem = (
    {
        id,
        nom
    }: {
        id: string | number,
        nom: string
    }
) => {
    const { setcategorieId, loadTechniqueCategorie } = useContext(TechniqueContext);

    const [showOption, setshowOption] = useState(false);
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);
    const [editMode, seteditMode] = useState(false);
    const [nomEdit, setnomEdit] = useState(nom);

    const handleDelete = async () => {
        try {
            if (!window.confirm("Etes vous sur de vouloir supprimer cet element?")) {
                return;
            }

            setloadingState("En cours de chargement.");

            const res = await deleteTechniquesCategorie(id as number);

            if (typeof res === "string" || !res) {
                toast.error(res);
            }
            else {
                loadTechniqueCategorie();
                toast.success("Element supprimé avec succès");
            }

            setloadingState(null);
            return;
        } catch (error) {
            toast.error(`Une erreur est survenue lors de la suppresion`);
            setloadingState(null);
        }
    }

    const handleFormSubmit = async () => {
        try {
            setloadingState("En cours de chargement.");

            const res = await editTechniquesCategorie(id, nomEdit);

            if (typeof res === "string" || !res) {
                toast.error(res);
            }
            else {
                loadTechniqueCategorie();
                seteditMode(false);
                toast.success("Element modifié avec succès");
            }

            setloadingState("Chargement finit.")

        } catch (error) {
            toast.error(`Une erreur est survenue lors de la modification`);
            setloadingState(null);
        }
    }

    return (
        <Tab
            disableIndicator
            value={id}
            onMouseDown={() => setcategorieId(id)}
            onMouseEnter={() => setshowOption(true)}
            onMouseLeave={() => setshowOption(false)}
        >
            {
                loadingState == "En cours de chargement."
                    ? (
                        <CircularProgress />
                    )
                    : editMode
                        ? (
                            <Input
                                variant='soft'
                                placeholder='Saisissez le nouveau titre'
                                value={nomEdit}
                                onChange={({ target }) => setnomEdit(target.value)}
                                endDecorator={
                                    <ButtonGroup color='primary'>
                                        <Button onClick={() => handleFormSubmit()} >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </Button>
                                        <Button color='danger' onClick={() => seteditMode(false)} >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </Button>
                                    </ButtonGroup>
                                }
                            />
                        )
                        : (
                            <Typography
                                endDecorator={
                                    <Tooltip title="Supprimer">
                                        <Collapse in={showOption} orientation='horizontal' unmountOnExit >
                                            <Stack
                                                direction={"row"}
                                                gap={1}
                                                sx={{
                                                    "& > div:hover": {
                                                        transform: `scale(1.1)`
                                                    }
                                                }}
                                            >
                                                <Avatar
                                                    color='primary'
                                                    size='sm'
                                                    onClick={() => seteditMode(true)}
                                                >
                                                    <FontAwesomeIcon icon={faFeather} />
                                                </Avatar>
                                                <Avatar
                                                    color='danger'
                                                    size='sm'
                                                    onClick={() => handleDelete()}
                                                >
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </Avatar>
                                            </Stack>
                                        </Collapse>
                                    </Tooltip>
                                }
                            >
                                {nom}
                            </Typography>
                        )
            }

        </Tab>
    )
}

export default TabTitleItem