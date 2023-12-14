import { useState, createContext, PropsWithChildren } from 'react';

interface iContext {
    cidade: string,
    tickets: number,
    card: boolean,
    hasCart: boolean,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    setTickets: React.Dispatch<React.SetStateAction<number>>,
    setCard: React.Dispatch<React.SetStateAction<boolean>>,
    setHasCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const GeneralContext = createContext<iContext>({} as iContext);

export const GeneralProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [cidade, setCidade] = useState<string>('Imperatriz');
    const [tickets, setTickets] = useState<number>(0);
    const [card, setCard] = useState<boolean>(false); //false é Crétido, True é Débito.
    const [hasCart, setHasCart] = useState<boolean>(false);

    return (
        <GeneralContext.Provider
            value={{
                cidade, setCidade,
                tickets,  setTickets,
                card, setCard,
                hasCart, setHasCart
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}