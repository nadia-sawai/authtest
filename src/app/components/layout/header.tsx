import Link from 'next/link'
import Styles from './header.module.scss'
import AuthButton from '../authButton/authButton';

export default function Header() {
  return (
    <header className={Styles.header}>
      <Link href={"/"}>logo</Link>
      <div className={Styles.buttons}>
        <Link href={"/dashboard"}>ダッシュボード</Link>
        <AuthButton />
      </div>
    </header>
  )
}

