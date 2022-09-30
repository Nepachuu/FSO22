 // DONE
  // Tässä kirjoitetaan jsx-koodia, ja js:ää silloin, kun
  // on aaltosulkeissa.

const App = () => {
  // Tässä on määritelty mitä nämä muuttujat sisältävät.
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  //Refaktoroidaan, niin, että on
  //Header huolehtii kurssin nimen renderöimisestä
  // Content osista ja tehtävämääristä
  // Total tehtävien yhteismäärästä.

  // Ensin refaktoroidaan Header, Content ja Total.
  
  return (
    <div>
      {/*tämä kohta on vähän kuin main-funktio.
      Kutsutaan course parametrilla Headeri: */}
      <Header courses = {course} />
      {/*Ja samalla tavalla muut: */}
      <Content 
       /* Aaltosulkeissa oleva teksti on js ja se on otettu
      ylhäältä missä on const-määrittelyt.*/
        parts1 = {part1} 
        parts2 = {part2} 
        parts3 = {part3}
        /*Ja myös exerciset kuuluu tähän:*/
        exercise1 = {exercises1} 
        exercise2 = {exercises2}
        exercise3 = {exercises3}/>

      <Total num_of_ex = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

//Kerrotaan mitä Header-funktio tekee:
//Se tulostaa div html elementin missä on header, joka
// sisältää funktiolle annetun parametrin. 
const Header = (i) => {
  return(
    <div>
      {/*Ensin tulee parametri ja sitten piste ja course*/}
      <h1>{i.courses}</h1>
    </div>
  )
}

// Content tulostaa seuraavat rivit:
const Content = (i) => {
  return(
    <div>
      <p>
        {i.parts1 + " " + i.exercise1}
      </p>
      <p>
        {i.parts2 + " " + i.exercise2}
      </p>
      <p>
        {i.parts3 + " " + i.exercise3}
      </p>
    </div>
  )
}

// Total tulostaa seuraavan rivin:
const Total = (i) => {
  return(
    <div>
      <p>
        Number of exercises {i.num_of_ex}
      </p>
    </div>
  )
}

export default App