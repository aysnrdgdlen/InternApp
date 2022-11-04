import InternList from "./components/InternList"
import Intern from "./components/Intern"
import Internform from "./components/InternInform"
import Navbar from "./components/Navbar"
import InternContextProvider from "./contexts/Interncontext"
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Container } from 'semantic-ui-react'

function App() {



  return (

    <Container>
      <InternContextProvider>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Grid columns={2} padded='vertically'>

          <Grid.Column floated='left' width={7}>
            <br></br>
            <h2>Add Intern</h2>
            <br></br>
            <Internform />
          </Grid.Column>

          <Grid.Column floated='right' width={8}>
            <br></br>
            <h2>Interns</h2>
            <br></br>

            <InternList />

          </Grid.Column>
        </Grid>
      </InternContextProvider>
    </Container>


  );
}

export default App;

