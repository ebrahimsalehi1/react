import React from 'react'
import { render, fireEvent } from '@testing-library/react'

const Context = React.createContext()

const RootComponent = function() {
  const [name, setName] = React.useState('Ali')
  return (
    <Context.Provider value={{ name, setName }}>
      <ComponentA />
    </Context.Provider>
  )
}

const ComponentA = function() {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <ComponentB />
        </div>
      </div>
    </div>
  )
}

const ComponentB = function() {
  const context = React.useContext(Context)
  return (
    <div>
      <span>{context.name}</span>
      <button data-testid='btn' onClick={() => context.setName('Mahdi')}>
        set name to Mahdi
      </button>
    </div>
  )
}

describe('testing context', () => {
  const comp = render(<RootComponent />)

  it('should pass the context', () => {
    expect(comp.getByText('Ali'))
    const btn = comp.getByTestId('btn')
    fireEvent.click(btn)
    expect(comp.getByText('Mahdi'))
  })
})
