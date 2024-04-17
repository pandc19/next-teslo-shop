import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
