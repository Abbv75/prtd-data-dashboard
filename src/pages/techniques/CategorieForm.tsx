import { Button, FormControl, FormLabel, Input, Modal, ModalDialog, Stack, Textarea, Typography } from '@mui/joy'
import { USE_STATE_T } from '../../types'
import { useState } from 'react'

const CategorieForm = (
    {
        open = false,
        setOpen
    }: {
        open: boolean,
        setOpen: USE_STATE_T
    }
) => {
    const [data, setData] = useState({
        name: undefined as undefined | string,
        description: undefined as undefined | string
    });

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <Typography level='h3'>Ajouter une nouvelle filière</Typography>

                <Stack component="form" gap={1}>
                    <FormControl>
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
                        <Button
                            variant='plain'
                            color='danger'
                            type='reset'
                            onClick={() => setOpen(false)}
                        >Annuler</Button>

                        <Button fullWidth>Créer la filière</Button>
                    </Stack>
                </Stack>
            </ModalDialog>

        </Modal>
    )
}

export default CategorieForm