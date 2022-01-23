import Layout from './Layout';
import Speakers from './Speakers'
import Header from './Header'
import {AuthProvider} from '../context/AuthContext'

function App () {
   
    return ( 
        <AuthProvider initialLoggedInUser="">
            <Layout startingTheme="light">
                <div>
                    <Header />
                    <Speakers />    
                </div>
            </Layout>
        </AuthProvider>
    )
}
export default App;