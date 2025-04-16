import { Button, FormControl, FormLabel, Input, Modal, ModalDialog, Option, Select, Stack, Textarea, Typography } from '@mui/joy'
import { LOADING_STATE_T, USE_STATE_T } from '../../types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { CardMedia } from '@mui/material'
import axios from 'axios'
import { AxiosInstense } from '../../helpers/AxiosInstense'

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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            if (selectedImage) {
                const imageFile = e.target.image.files[0];
                formData.append('image', imageFile);
            }

            setloadingState("En cours de chargement.");
            await AxiosInstense.postForm('/bonnes-pratiques/add.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success("Form submitted successfully!");
            setOpen(false);
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez reessayer");
            setloadingState(null);
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
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
                                onChange={handleImageChange}
                            />
                        </FormControl>

                        <CardMedia
                            component={"img"}
                            src={selectedImage || undefined}
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
