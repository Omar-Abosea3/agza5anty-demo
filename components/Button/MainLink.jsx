'use client'
import Link from "next/link";
import styles from './styles.scss'
import { usePathname } from "next/navigation";

export default function MainLink({ url, label, color, fontWeight, fontSize, letterSpacing }) {
  const pathName = usePathname()
  return (
    <Link className={`mainLink ${pathName === url ? styles.active : ''} `} href={url} aria-label={label}
      style={{
        color,
        fontWeight,
        fontSize,
        letterSpacing,
        textTransform: 'capitalize'
      }}
    >
      {label}
    </Link>
  )
}
