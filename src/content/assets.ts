/**
 * ATIVOS VISUAIS — troque os arquivos mantendo os nomes, ou aponte os imports para outros.
 * Fotos: galeria pública da Villa da Praia no Booking.com (uso definitivo depende de autorização).
 * Marca: arquivos oficiais Studio Octus.
 */
import poolDayImg from '../assets/photos/01_piscina_deck_dia.jpg'
import poolNightImg from '../assets/photos/02_piscina_noturna.jpg'
import roomImg from '../assets/photos/03_quarto_casal.jpg'
import courtyardImg from '../assets/photos/04_piscina_patio.jpg'
import facadeImg from '../assets/photos/05_fachada_vegetacao.jpg'
import nightBlueImg from '../assets/photos/06_piscina_noite_azul.jpg'
import logoLight from '../assets/brand/octus-logo.png'
import logoDark from '../assets/brand/octus-logo-dark.png'
import symbol from '../assets/brand/octus-symbol.png'

export type PhotoAsset = { id: string; alt: string; src: string; focus?: string }

export const photos = {
  poolDay: { id: '01_piscina_deck_dia', alt: 'Piscina e deck da Villa da Praia durante o dia', src: poolDayImg, focus: '55% 60%' },
  poolNight: { id: '02_piscina_noturna', alt: 'Piscina e bar externo da Villa da Praia ao anoitecer', src: poolNightImg, focus: '50% 68%' },
  room: { id: '03_quarto_casal', alt: 'Quarto de casal da Villa da Praia', src: roomImg, focus: '55% 40%' },
  courtyard: { id: '04_piscina_patio', alt: 'Café da manhã à beira da piscina, com o pátio ao fundo', src: courtyardImg, focus: '50% 50%' },
  facade: { id: '05_fachada_vegetacao', alt: 'Entrada da Villa da Praia com portão em arco e coqueiros', src: facadeImg, focus: '40% 55%' },
  nightBlue: { id: '06_piscina_noite_azul', alt: 'Piscina iluminada e fachada da Villa da Praia à noite', src: nightBlueImg, focus: '50% 62%' },
} satisfies Record<string, PhotoAsset>

export const brand = { logoLight, logoDark, symbol, name: 'Studio Octus' }
