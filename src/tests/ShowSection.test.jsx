// qui dentro andremo a scrivere diversi tests per verificare il corretto
// funzionamento del componente ShowSection in modo AUTOMATIZZATO

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ShowSection from '../components/ShowSection'

// test possibili:
// fase di montaggio
// - il corretto montaggio del componente
// - all'avvio, l'etichetta del bottone sarà "MOSTRA"
// - all'avvio, la card NON CI DEVE ESSERE!

// interazione con l'utente
// - cliccato il bottone, l'etichetta deve cambiare
// - cliccato il bottone, la CARD deve comparire
// - cliccato il bottone due volte, l'etichetta deve tornare "MOSTRA"
// - cliccato il bottone due volte, la CARD deve di nuovo sparire

// come di dichiarano i test?
// i test, solitamente, si RAGGRUPPANO in "suites"
describe('Testing mounting phase', () => {
  // qui dentro dichiaro i test individuali
  it('mounts correctly', () => {
    // qui dentro testerò il corretto montaggio del componente ShowSection
    // per farlo, verificherò che il suo <h2> sia finito nel DOM
    // 1) montare il componente nel VIRTUAL DOM
    render(<ShowSection />)
    // 2) devo andare a cercare nel VIRTUAL DOM l'h2
    const h2 = screen.getByText('Esempio di componente ShowSection')
    // 3) saltato perchè non c'è interazione con questo elemento
    // 4) verifica dei risultati ottenuti sulla base delle aspettative
    expect(h2).toBeInTheDocument()
  })
})
