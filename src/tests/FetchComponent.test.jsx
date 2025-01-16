import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FetchComponent from '../components/FetchComponent'

describe('list behavior', () => {
  it('mounts the component correctly', () => {
    render(<FetchComponent />)
    // controllo l'esistenza nella pagina dell'input field
    const filterInput = screen.getByPlaceholderText(/cerca utenti/i)
    // 4)
    expect(filterInput).toBeInTheDocument()
  })

  it("shouldn't have any element in the users list", () => {
    render(<FetchComponent />)
    // ho etichettato i miei ListGroup.Item con data-testid="list element"
    const usersArray = screen.queryAllByTestId('list element')
    expect(usersArray).toHaveLength(0)
  })

  it('creates a list of 10 users when the useEffect has finished', async () => {
    render(<FetchComponent />)
    // ho etichettato i miei ListGroup.Item con data-testid="list element"
    const usersArray = await screen.findAllByTestId('list element')
    // aspetto dunque che il montaggio del componente sia completato
    expect(usersArray).toHaveLength(10)
    expect(usersArray.length).toBeGreaterThan(0)
  })

  it('should filter less results after searching in the input field', async () => {
    render(<FetchComponent />)
    // ho etichettato i miei ListGroup.Item con data-testid="list element"
    const usersArrayBefore = await screen.findAllByTestId('list element')
    console.log('BEFORE', usersArrayBefore.length)
    const filterInput = screen.getByPlaceholderText(/cerca utenti/i)
    fireEvent.change(filterInput, { target: { value: 'k' } })
    const usersArrayAfter = await screen.findAllByTestId('list element')
    console.log('AFTER', usersArrayAfter.length)
    expect(usersArrayAfter.length).toBeLessThan(usersArrayBefore.length)
  })
})
