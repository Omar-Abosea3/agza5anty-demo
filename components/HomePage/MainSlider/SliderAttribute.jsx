import { Box } from "@mui/material";
import Image from "next/image";
import styles from './sliderAttribute.module.css'
import percentageIcon from '@/assets/images/sliders/percentage.svg'

export default function SliderAttribute({ title, icon }) {
  return (
    <Box className={`flex justify-between align-center ${styles.attributeContainer}`}>
      <Box className={`flex justify-center align-center ${styles.attributeIcon}`} >
        <Image src={percentageIcon} alt={title} loading='lazy' aria-label={title} width={88} height={88} />
      </Box>
      <Box component='p' className={`${styles.attributeTitle}`}>
        {title}
      </Box>
    </Box>
  )
}
