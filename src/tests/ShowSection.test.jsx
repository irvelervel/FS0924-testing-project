// qui dentro andremo a scrivere diversi tests per verificare il corretto
// funzionamento del componente ShowSection in modo AUTOMATIZZATO

import { render, screen, fireEvent } from '@testing-library/react'
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
  it('shows initially label "MOSTRA" in the button', () => {
    // 1)
    render(<ShowSection />)
    // 2)
    const button = screen.getByText(/mostra/i) // cerca "mostra", ma anche "MOSTRA", ma anche "Mostra"
    // 3)
    // 4)
    expect(button).toBeInTheDocument()
  })
  it("doesn't show the card initially", () => {
    // 1)
    render(<ShowSection />)
    // 2)
    const img = screen.queryByRole('img') // <-- torna null
    // uso queryBy perchè mi aspetto che img NON ESISTA nella pagina!
    // 3)
    // 4)
    // mi devo aspettare che "img" NON CI SIA nel documento...
    expect(img).not.toBeInTheDocument()
  })
})

describe('Testing button interaction', () => {
  it('should change label value after a button click', () => {
    // 1)
    render(<ShowSection />)
    // 2)
    const button = screen.getByText(/mostra/i)
    // 3)
    fireEvent.click(button) // clicco UNA volta il bottone
    // 4)
    const sameButton = screen.getByText(/nascondi/i)
    expect(sameButton).toBeInTheDocument()
  })

  it('should render the card after a button click', () => {
    render(<ShowSection />)
    const button = screen.getByText(/mostra/i)
    fireEvent.click(button) // clicco UNA volta il bottone
    // cerco la card
    const cagnolone = screen.getByRole('img')
    expect(cagnolone).toBeInTheDocument()
  })
  it('should restore "MOSTRA" label after 2 clicks on the button', () => {
    render(<ShowSection />)
    const button = screen.getByText(/mostra/i)
    fireEvent.click(button)
    fireEvent.click(button)
    // ho cliccato 2 volte!
    const sameButton = screen.getByText(/mostra/i)
    expect(sameButton).toBeInTheDocument()
  })
  it('should hide cagnolone after 2 clicks', () => {
    render(<ShowSection />)
    const button = screen.getByText(/mostra/i)
    fireEvent.click(button)
    fireEvent.click(button)
    // ho cliccato 2 volte!
    const cagnolone = screen.queryByRole('img') // <-- null?
    expect(cagnolone).not.toBeInTheDocument()
  })
})
