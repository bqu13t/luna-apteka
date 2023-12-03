import Link from "next/link";
import LunaLogo from "@/components/icons/luna-logo";

interface LogoSectionProps {
  onClick: () => void;
}

export default function LogoSection({ onClick }: LogoSectionProps) {
  return (
    <Link className="on-hover on-tap" href="/" onClick={onClick}>
      <span className="sr-only">Открыть главную страницу Луна Фуд</span>
      <LunaLogo />
    </Link>
  );
}
