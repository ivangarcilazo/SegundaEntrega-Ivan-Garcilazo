import './App.css';

import Layout from './Components/Layout/Layout';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';

import{Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Layout>    
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route caseSensitive path='category/:id' element={<ItemListContainer/>}/>
                <Route caseSensitive path='item/:id' element={<ItemDetailContainer/>}></Route>

            </Routes>
        </Layout>
    </div>
  );
}

export default App;
