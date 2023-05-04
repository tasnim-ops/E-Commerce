import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Listearticles from './Component/articles/Listearticles';
import Listcategories from './Component/Categories/Listcategories';
import Listescategories from './Component/Scategories/Listescategories';
import Insertarticle from './Component/articles/Insertarticle';
import Insertcategorie from './Component/Categories/Insertcategorie';
import Insertscategorie from './Component/Scategories/Insertscategorie';
import Editarticle from './Component/articles/Editarticle';
import Editcategorie from './Component/Categories/Editcategorie';
import Editscategorie from './Component/Scategories/Editscategorie';
import Menu from './Component/Menu';
import Listarticlecard from './Component/articles/Listarticlecard';
import Listarticledatatable from './Component/articles/Listarticledatatable';


function App() {
  return (
<Router>
  <Menu/>
  <Routes>
  <Route path="/articles" element={<Listearticles/>}/>
  <Route path="/categories" element={<Listcategories/>}/>
  <Route path="/scategories" element={<Listescategories/>}/>

  <Route path="/addartc" element={<Insertarticle/>}/>
  <Route path="/addcat" element={<Insertcategorie/>}/>
  <Route path="/addscat" element={<Insertscategorie/>}/>


  <Route path="/editartc/:id" element={<Editarticle/>}/>
  <Route path="/editcat/:id" element={<Editcategorie/>}/>
  <Route path="/editscat/:id" element={<Editscategorie/>}/>

  <Route path="/listartccard" element={<Listarticlecard/>}/>
  <Route path="/articledatatable" element={<Listarticledatatable/>}/>
  <Route path="/Insertarticle" element={<Insertarticle/>}/>


  
  </Routes>
  
</Router>
  );
}

export default App;
