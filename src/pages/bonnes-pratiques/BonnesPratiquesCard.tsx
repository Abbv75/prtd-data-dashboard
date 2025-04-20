import { CardMedia, Collapse } from '@mui/material'
import { CardContent, Typography, Card, ButtonGroup, Button } from '@mui/joy'
import { green } from '@mui/material/colors'
import { BONNES_PRATIQUES_IMAGES } from '../../constant'
import { useContext, useState } from 'react'
import { deleteBonnePratique } from '../../functions/bonnesPratiques/deleteBonnePratique'
import { toast } from 'react-toastify'
import { BonnesPratiquesContext } from '../../providers/BonnesPratiquesContext'
import { LOADING_STATE_T } from '../../types'

const BonnesPratiquesCard = (
  {
    titre,
    description,
    image,
    id
  }: {
    titre: string,
    description: string,
    image?: string,
    id: number
  }
) => {
  const { laodData } = useContext(BonnesPratiquesContext);

  const [showEditZone, setshowEditZone] = useState(false);
  const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);;

  const handleDelete = async () => {
    try {
      if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette bonne pratique ?")) return;

      setloadingState("En cours de chargement.");

      const res = await deleteBonnePratique(id);
      if (typeof res === "string" || !res) {
        toast.error("Une erreur est survenue lors de la suppression.");
        setloadingState(null);
        return;
      }

      toast.success("Suppression réussie.");
      laodData();
      setloadingState(null);
    } catch (error) {
      toast.error("Une erreur est survenue lors de la suppression.");
      setloadingState(null);
    }
  }

  return (
    <Card
      sx={{ borderRadius: 0, p: 0 }}
      onMouseEnter={() => setshowEditZone(true)}
      onMouseLeave={() => setshowEditZone(false)}
      variant='outlined'
      color='neutral'
    >
      <CardMedia
        component="img"
        src={`${BONNES_PRATIQUES_IMAGES}/${image}`}
        sx={{ height: 200 }}
      />

      <CardContent sx={{ position: 'absolute', alignSelf: "flex-end", p: 2 }}>
        <Typography
          sx={{ p: 0.5, borderRadius: 30, backgroundColor: green[800], width: 80 }}
          textColor={'white'}
          textAlign={"center"}
          level='h3'
        >
          Riz
        </Typography>
      </CardContent>

      <CardContent sx={{ px: 2, gap: 2 }}>
        <Typography level='h4'>{titre}</Typography>
        <Typography textColor={'gray'}>{description}</Typography>
      </CardContent>

      <CardContent>
        <Collapse in={showEditZone} unmountOnExit>
          <ButtonGroup
            sx={{
              borderRadius: 0
            }}
            variant='soft'
          >
            <Button
              fullWidth
              color="danger"
              loading={loadingState === "En cours de chargement."}
              onClick={handleDelete}
            >Supprimer</Button>
            <Button fullWidth color="neutral">Modifier</Button>
          </ButtonGroup>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default BonnesPratiquesCard