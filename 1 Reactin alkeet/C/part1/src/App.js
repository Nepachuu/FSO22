// props vaatii tuon parametrin sulkeisiin:
const Hello = (props) => {
  const { name, age } = props
  // Luotiin juuri olio propsista desktrukturoinnilla.
  //props = {
  //  name: 'Maya',
  //  age: 36,
  //}

  //Funktio, kun käyttäjä antaa iän niin
  // se vähentää iän siitä vuodesta missä
  // nyt mennään.
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p> Hello {name}, you are {age} years old
      </p>
      <p> So you were probably born on {bornYear()}</p>
    </div>
  )
}
const App = () => {
  const mantaAge = 5
  const nimi = 'Mette'
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Manta" age={mantaAge} />
    <Hello name={nimi} age={5+5+(11/12)} />
  </div>
)
}

export default App