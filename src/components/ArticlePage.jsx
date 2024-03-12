import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { getArticleById } from "../articles_api_utils";
import { FullArticleCard } from "./FullArticleCard";
import { RelatedArticles } from "./RelatedArticles";

export const ArticlePage = () => {
const {articleId} = useParams()
console.log(articleId)
const [article, setArticle] = useState('')


useEffect(()=> {
  getArticleById(articleId).then(({article})=> {
    setArticle(article)
  })
}, [articleId])
  return (
<div>
  <FullArticleCard article = {article}/>
  <RelatedArticles article = {article} articleId ={articleId}/>
</div>
    )
  };
