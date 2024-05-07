import { SessionProvider } from 'next-auth/react';
import { PayPalProvider } from './PayPalProvider';

interface Props {
    children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <PayPalProvider>
                {children}
            </PayPalProvider>
        </SessionProvider>
    )
}
