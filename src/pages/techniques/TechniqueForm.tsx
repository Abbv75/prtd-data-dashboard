import { Button, FormControl, FormLabel, Input, Modal, ModalDialog, Stack, Textarea, Typography } from '@mui/joy'
import { LOADING_STATE_T, USE_STATE_T } from '../../types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { addTechnique } from '../../functions/technique/addTechnique'

const TechniqueForm = (
    {
        open = false,
        setOpen,
        categorieId,
        loadTechniqueCategorie
    }: {
        open: boolean,
        setOpen: USE_STATE_T,
        categorieId: number | null,
        loadTechniqueCategorie: any
    }
) => {
    const [data, setData] = useState({
        titre: undefined as undefined | string,
        contenue: undefined as undefined | string,
        index: 1 as undefined | string | number,
    });
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!data?.titre || !data?.contenue || !categorieId) {
                toast.error('Veuillez verifier les differents champs');
                return;
            }

            setloadingState("En cours de chargement.");

            const res = await addTechnique(
                data.titre,
                data.contenue,
                categorieId,
                data.index as any,
            )

            if (!res) {
                toast.error("Ajout echoué");
                setloadingState(null);
                return;
            }

            toast.success("Filiere ajoutée avec success");
            setloadingState(null);
            setData({ index: 1, contenue: undefined, titre: undefined });
            loadTechniqueCategorie();
            setOpen(false);
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez reessayer");
            setloadingState(null);
        }
    }

    if (open && !categorieId) {
        toast.warning("Aucune filiere de selectionné donc ajout impossible");

        return null;
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <Typography level='h3'>Ajouter une nouvelle information</Typography>

                <Stack
                    component="form"
                    gap={1}
                    onSubmit={onSubmit}
                >
                    <FormControl required>
                        <FormLabel>Titre</FormLabel>
                        <Input
                            placeholder='Exemple: transformation, ...'
                            value={data.titre}
                            onChange={({ target }) => setData({ ...data, titre: target.value })}
                        />
                    </FormControl>

                    <FormControl required>
                        <FormLabel>Contenue</FormLabel>
                        <Textarea
                            placeholder='Texte a affiché'
                            value={data.contenue}
                            onChange={({ target }) => setData({ ...data, contenue: target.value })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Index de la collone</FormLabel>
                        <Input
                            placeholder='Definira son ordre de priorité'
                            value={data.index}
                            type='number'
                            onChange={({ target }) => setData({ ...data, index: target.value })}
                            defaultValue={1}
                            slotProps={{ input: { min: 1, } }}
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
                        >Valider</Button>
                    </Stack>
                </Stack>
            </ModalDialog>

        </Modal>
    )
}

export default TechniqueForm