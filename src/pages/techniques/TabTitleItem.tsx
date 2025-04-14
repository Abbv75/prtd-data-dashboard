import { Avatar, CircularProgress, Stack, Tab, Tooltip, Typography } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from '@mui/material';
import { useContext, useState } from 'react';
import { TechniqueContext } from '../../providers/TechniqueContext';
import { deleteTechniquesCategorie } from '../../functions/techniquesCategorie/deleteTechniquesCategorie';
import { toast } from 'react-toastify';
import { LOADING_STATE_T } from '../../types';

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

    return (
        <Tab
            disableIndicator
            value={id}
            onMouseDown={() => setcategorieId(id)}
            onMouseEnter={() => setshowOption(true)}
            onMouseLeave={() => setshowOption(false)}
        >
            <Typography
                endDecorator={
                    loadingState != "En cours de chargement."
                        ? (
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
                                        <Avatar color='primary' size='sm'>
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
                        )
                        :
                        <CircularProgress />
                }
            >
                {nom}
            </Typography>
        </Tab>
    )
}

export default TabTitleItem