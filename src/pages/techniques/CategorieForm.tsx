import { Button, FormControl, FormLabel, Input, Modal, ModalDialog, Stack, Textarea, Typography } from '@mui/joy'
import { LOADING_STATE_T, USE_STATE_T } from '../../types'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { addTechniquesCategorie } from '../../functions/techniquesCategorie/addTechniquesCategorie'
import { TechniqueContext } from '../../providers/TechniqueContext'

const CategorieForm = (
    {
        open = false,
        setOpen,
    }: {
        open: boolean,
        setOpen: USE_STATE_T,
    }
) => {
    const { loadTechniqueCategorie } = useContext(TechniqueContext);

    const [data, setData] = useState({
        name: undefined as undefined | string,
        description: undefined as undefined | string
    });
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!data.name) {
                toast.error('Veuillez saisir le nom de la filiere');
                return;
            }

            setloadingState("En cours de chargement.");

            const res = await addTechniquesCategorie(data.name, data.description)

            if (!res) {
                toast.error("Ajout echoué");
                setloadingState(null);
                return;
            }

            toast.success("Filiere ajoutée avec success");
            setloadingState(null);
            setData({ name: undefined, description: undefined });
            loadTechniqueCategorie();
            setOpen(false);
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez reessayer");
            setloadingState(null);
        }

    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <Typography level='h3'>Ajouter une nouvelle filière</Typography>

                <Stack
                    component="form"
                    gap={1}
                    onSubmit={onSubmit}
                >
                    <FormControl required>
                        <FormLabel>Nom de la filiere</FormLabel>
                        <Input
                            placeholder='Nom de la filiere'
                            value={data.name}
                            onChange={({ target }) => setData({ ...data, name: target.value })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>description de la filiere</FormLabel>
                        <Textarea
                            placeholder='description de la filiere'
                            value={data.description}
                            onChange={({ target }) => setData({ ...data, description: target.value })}
                        />
                    </FormControl>

                    <Stack
                        direction={"row"}
                        gap={1}
                    >
                        {
                            loadingState != "En cours de chargement." && (
                                <Button
                                    variant='plain'
                                    color='danger'
                                    type='reset'
                                    onClick={() => setOpen(false)}
                                >Annuler</Button>
                            )
                        }

                        <Button
                            fullWidth
                            disabled={loadingState == "En cours de chargement."}
                            loading={loadingState == "En cours de chargement."}
                            type='submit'
                        >Créer la filière</Button>
                    </Stack>
                </Stack>
            </ModalDialog>

        </Modal>
    )
}

export default CategorieForm