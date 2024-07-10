import { auth } from '@/lib/auth'
import Styles from './authButton.module.scss'
import {Login, Logout} from '../auth/auth';

export default async function authButton() {
  const session = await auth()
  if(!session) return <Login />
  return (
    <>
      {JSON.stringify(session, null, 2)}
      <Logout />
    </>
  )
}