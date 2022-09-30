 // MITEN TEEN TUON PART FUNKTION JA KUTSUN SITÄ???
  // Tässä kirjoitetaan jsx-koodia, ja js:ää silloin, kun
  // on aaltosulkeissa.

  const App = () => {
    // tämä kohta on vähän kuin main-funktio.
    // Tässä on määritelty mitä nämä muuttujat sisältävät.
    const course = 'Half Stack application development'


    const part1 = 'Fundamentals of React'
    const exercises1 = 10

    const part2 = 'Using props to pass data'
    const exercises2 = 7

    const part3 = 'State of a component'
    const exercises3 = 14

    const partList = [
      /*yksi part ja exercise kokonaisuus tulee yksien
        aaltosulkeiden sisälle. Row mahdollistaa sen, että
        tietty tieto voidaan napata listasta. */
      {
        part: part1, 
        exercises: exercises1
      },
      {
        part: part2, 
        exercises: exercises2
      },
      {
        part: part3,
        exercises: exercises3
      }
    ]
  
    //Refaktoroidaan, niin, että on
    //Header huolehtii kurssin nimen renderöimisestä
    // Content parts ja exercises käyttäen part-funktiota.
    // Total tehtävien yhteismäärästä.
    
    return (
      // Kutsutaan nyt vain content ja total funktioita, jotka
      // hyödyntää parttia ja listaa.
      <div>
        
        {/*Kutsutaan course parametrilla Headeri: */}
        <Header title={course} />
        {/*Ja samalla tavalla muut: */}
        <Content partList={partList} />
  
        <Total partList={partList}/>
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
        {`${props.partList.part} ${props.partList.exercises}`}
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
  const Content = ({partList}) => {
    return(
      <div>
        <Part partList={partList[0]}/>
        <Part partList={partList[1]}/>
        <Part partList={partList[2]}/>
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
          {props.partList.reduce((sumOfEx,pre) => sumOfEx + pre.exercises,0)}
        </p>
      </div>
    )
  }
  
  export default App