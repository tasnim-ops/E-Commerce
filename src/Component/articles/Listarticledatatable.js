import {ArticleService} from '../../Services/ArticleService';
import { useState,useEffect } from 'react';
//npm install @mui/material @emotion/react @emotion/styled
//npm install mui-datatables
import MUIDataTable from "mui-datatables";
//npm i @mui/styles
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
const Listarticledatatable=()=>{
const [articles, setArticles] = useState([]);


useEffect(() => {
  GetListArticles();
},[]); 



const GetListArticles=async()=>{
    await ArticleService.fetchArticles()
    .then((res) => {
    setArticles(res.data);
    });
}
const delArticle= async (_id) => { 
    await ArticleService.deleteArticle(_id)
    var newarticles=articles.filter((item)=>{
    return item._id!==_id
    })
    setArticles(newarticles);
}
const columns = [
{
label: "Référence",
name: "reference"
},
{
label: "Désignation",
name: "designation"
},
{
label: "Prix",
name: "prix"
},
{
label: "Marque",
name: "marque"
},
{
label: "Quatité Stock",
name: "qtestock"
},
{
name:"imageart",
label: "Image",options: {
  customBodyRender : (rowData) => (
  <img
  style={{ height: 80, borderRadius: '50%' }}
  src={rowData}
  alt=""
  />
  )}
  },
  {
  name:"scategorieID",
  label: "S/Catégorie",
  options: {
  customBodyRender : (scateg) => (
  scateg? scateg.nomscategorie :null
  )}
  },
  {
  name: "_id",
  label: "Actions",
  options: {
  customBodyRender: (value) => (
  <div>
  <IconButton > { <Link to={"/editartc/:id" + value} > <EditIcon color='secondary' />
  </Link> }
  </IconButton> <IconButton onClick={()=>{delArticle(value)}}> <DeleteIcon sx={{ color: pink[500] }} />
  </IconButton>
  </div>
  ) }
  },
  ];
  
  
  return(
    <div>
      <div style={{padding:5,margin:5}}> 
        <Button color="success" startIcon={<AddCircleIcon />} variant="contained"> 
          { <Link to={"/Insertarticle"} style={{textDecoration:"none",color:"white"}}>Ajouter</Link> }
        </Button>
      </div>
      {articles.length>0? 
        <ThemeProvider theme={createTheme()}> 
          <MUIDataTable title="Liste des articles" data={articles} columns={columns}/>
        </ThemeProvider> 
        :null
      }
      </div>
    )}
    export default Listarticledatatable;