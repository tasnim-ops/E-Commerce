import Api from "../Axios/Api";
const CATEGORIE_API="/categories"
const fetchCategories=async()=> {
return await Api.get(CATEGORIE_API);
}
const fetchCategorieById=async(categorieId)=> {
return await Api.get(CATEGORIE_API + '/' + categorieId);
}
const deleteCategorie=async(categorieId) =>{
return await Api.delete(CATEGORIE_API + '/' + categorieId);
}
const addCategorie=async(categorie)=> { 
return await Api.post(CATEGORIE_API,categorie);
} 
const editCategorie=(categorie) =>{ 
return Api.put(CATEGORIE_API + '/' + categorie._id, categorie);
}
export const CategorieService = {
fetchCategories,
fetchCategorieById,
deleteCategorie,
addCategorie,
editCategorie
}