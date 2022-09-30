// props vaatii tuon parametrin sulkeisiin:
const Hello = (props) => {
  return (
    
      <p>Hello {props.name}, you are {props.age} years old</p>
    
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