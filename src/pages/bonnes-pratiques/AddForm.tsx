import { Button, FormControl, FormLabel, Input, Modal, ModalDialog, Option, Select, Stack, Textarea, Typography } from '@mui/joy'
import { LOADING_STATE_T, USE_STATE_T } from '../../types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { CardMedia } from '@mui/material'

const AddForm = (
    {
        open = false,
        setOpen,
    }: {
        open: boolean,
        setOpen: USE_STATE_T,
    }
) => {
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez reessayer");
            setloadingState(null);
        }

    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <Typography level='h3'>Ajouter une bonnes pratiques</Typography>

                <Stack
                    component="form"
                    gap={1}
                    onSubmit={onSubmit}
                >
                    <FormControl required>
                        <FormLabel>Intitulé</FormLabel>
                        <Input
                            placeholder="Saisissez l'intitulé"
                            name='intitule'
                        />
                    </FormControl>

                    <FormControl required>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            placeholder='Saisissez la description'
                            name='description'
                        />
                    </FormControl>


                    <FormControl sx={{ flex: 1 }}>
                        <FormLabel>Filière concernée</FormLabel>
                        <Select name='filiere'>
                            <Option value={null}>Aucun</Option>
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                        </Select>
                    </FormControl>

                    <Stack direction={"row"} gap={1} >
                        <FormControl>
                            <FormLabel>Image de couverture</FormLabel>
                            <input
                                type='file'
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                name='image'
                            />
                        </FormControl>

                        <CardMedia
                            component={"img"}
                            sx={{ width: 50, objectFit: "contain" }}
                        />
                    </Stack>

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

export default AddForm