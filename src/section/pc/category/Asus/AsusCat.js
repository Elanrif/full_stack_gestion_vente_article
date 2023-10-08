import React,{useEffect,useState} from 'react'
import Header from './Header'
import ListAsus from './ListAsus'
import axios from 'axios';
import { ArticleContext } from '../../../../Context'; 

function AsusCat() {

  const [articles,setArticles] = useState(null) ;

  useEffect(() => {
  displayArticle()
  }, [])

  const displayArticle = ()=>{
      axios.get(`/article/find-by-category/2`)
      .then((res)=>{
        //filtrer par les articles que le reste de Carde est != 0
        const filter = res.data.filter((item) => item.remaining !== 0)

        setArticles(filter)
      })
      .catch((err)=>{
        console.log("Err : " , err) 
      })

  }

  return (
    <> {/* un contexte peut prendre plusieurs valeurs et appellé plusieur fois ou imbriqué sur lui même, tjours les composant prendront le context le plus proche d'eux dans l'ARBRE */}
      {articles && (
        <ArticleContext.Provider value={{ articles, setArticles }}>
          <Header />
          <ListAsus />
        </ArticleContext.Provider>
      )}
    </>
  );
}

export default AsusCat
