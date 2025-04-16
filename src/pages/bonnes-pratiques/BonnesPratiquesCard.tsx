import { CardMedia } from '@mui/material'
import { CardContent, Typography, Card } from '@mui/joy'
import { green } from '@mui/material/colors'
import { BONNES_PRATIQUES_IMAGES, IMAGES } from '../../constant'

const BonnesPratiquesCard = (
  {
    titre,
    description,
    image
  }: {
    titre: string,
    description: string,
    image?: string
  }
) => {
  return (
    <Card sx={{ borderRadius: 0, p: 0 }}>
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
      <CardContent sx={{ px: 2, pb: 2, gap: 2 }}>
        <Typography level='h4'>{titre}</Typography>
        <Typography textColor={'gray'}>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default BonnesPratiquesCard