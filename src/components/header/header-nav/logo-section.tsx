import Link from "next/link"
import LunaIcon from "@/components/icons/luna-icon"

interface LogoSectionProps {
  onClick: () => void
}

export default function LogoSection({ onClick }: LogoSectionProps) {
  return (
    <Link className="on-hover on-tap" href="/" onClick={onClick}>
      <span className="sr-only">Открыть главную страницу Аптеки</span>
      <LunaIcon />
    </Link>
  )
}
