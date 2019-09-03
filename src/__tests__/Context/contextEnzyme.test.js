import React from 'react'
import { mount } from 'enzyme'

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
          <ComponentB id={2} />
        </div>
      </div>
    </div>
  )
}

const ComponentB = function(props) {
  const context = React.useContext(Context)
  return (
    <div>
      <span>{props.ok}</span>
      <span>{context.name}</span>
      <button data-testid='btn' onClick={() => context.setName('Mahdi')}>
        set name to Mahdi
      </button>
    </div>
  )
}

describe('testing context', () => {
  it('should pass the context', () => {
    const comp = mount(<RootComponent />)
    expect(comp.find('ComponentB').prop('id')).toBe(2)
    expect(
      comp
        .find('ComponentB span')
        .last()
        .text()
    ).toBe('Ali')
    comp.find('button').simulate('click')
    expect(
      comp
        .find('ComponentB span')
        .last()
        .text()
    ).toBe('Mahdi')
  })
})
