import { CardMedia } from '@mui/material'
import { CardContent, Typography, Card, Button } from '@mui/joy'
import { green } from '@mui/material/colors'
import { IMAGES } from '../../constant'

const BonnesPratiquesCard = () => {
  return (
    <Card sx={{ borderRadius: 0, p: 0 }}>
      <CardMedia
        component="img"
        src={IMAGES.manioc}
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
        <Typography level='h4'>Comment produire le composant à base de la paille de riz en millieu aerien ?</Typography>
        <Typography textColor={'gray'}>
          Fiche technique élaborée par la CNRA portant sur la production d'engrais sous forme de compost à partir de la paille de riz.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BonnesPratiquesCard