 // MITEN TEEN TUON PART FUNKTION JA KUTSUN SITÄ???
  // Tässä kirjoitetaan jsx-koodia, ja js:ää silloin, kun
  // on aaltosulkeissa.

  const App = () => {
    // tämä kohta on vähän kuin main-funktio.
    // Tässä on määritelty mitä nämä muuttujat sisältävät.

    //olio joka on array
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
    

    
  
    //Refaktoroidaan, niin, että on
    //Header huolehtii kurssin nimen renderöimisestä
    // Content parts ja exercises käyttäen part-funktiota.
    // Total tehtävien yhteismäärästä.
    
    return (
      // Kutsutaan nyt vain content ja total funktioita, jotka
      // hyödyntää parttia ja listaa.
      <div>      
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  }

  //Header tulostaa div html elementin missä on header, joka
  // sisältää funktiolle annetun parametrin. 
  const Header = ({title}) => {
    return(
      <div>
        {/*Ensin tulee parametri ja sitten piste ja course*/}
        <h1>{title}</h1>
        
      </div>
    )
  }
  // Part funktio käyttää contenttia hyödykseen tulostamaan 
  // kunkin halutun rivin.
  const Part = (props) => {
    return (
      <div>
        <p>
        {console.log("part: ", props)}
        {`${props.parts.name} ${props.parts.exercises}`}
         {//props. props.
  }
        </p>
      </div>
    )
  }
  
  // TODO: Contentin tulee muodostaa Part-funktiolle se minkä avulla
  // se Part funktio hakee listasta oikean yksilön. Pitää antaa
  // samassa myös exercise sen partin jälkeen.
  // Ottaa siis listasta oikean kohdan ja tulostaa Partin.
  const Content = ({parts}) => {
    return(
      <div>
        <Part parts={parts[0]}/>
        <Part parts={parts[1]}/>
        <Part parts={parts[2]}/>
      </div>
    )
  }
  
  // Total tulostaa seuraavan rivin:
  const Total = (props) => {
    return(
      <div>
        <p>
          {console.log(props)}
          {"Number of exercises "}
          {props.parts.reduce((sumOfEx,pre) => sumOfEx + pre.exercises,0)}
        </p>
      </div>
    )
  }
  
  export default App