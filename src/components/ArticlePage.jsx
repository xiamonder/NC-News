import { useLocation } from "react-router-dom";

export const ArticlePage = () => {
const {pathname} = useLocation()
  return <>
  <h2>{pathname}</h2></>;
};
