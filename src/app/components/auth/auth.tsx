import React, { useCallback, useState } from 'react'
import Button from '../button/button'
import Styles from './login.module.scss'
import { signIn, signOut } from '@/lib/auth'

export const Login = (props:any) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type='primary'>ログイン</Button>
    </form>
  )
}

export const Logout = (props:any) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type='primary'>ログアウト</Button>
    </form>
  )
}
