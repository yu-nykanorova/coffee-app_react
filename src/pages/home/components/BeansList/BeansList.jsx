import { Link } from "react-router-dom";
import "./BeansList.scss";
import { useContext } from "react";
import { BeansContext } from "../../../../BeansContext";

export const BeansList = () => {
  const beans = useContext(BeansContext);

  return (
    <div>
      {beans.map(bean => (
        <div key={bean.id}>
          <Link to={`/beans/${bean.id}`}>{bean.title}</Link>
        </div>
      ))}
    </div>
  )
}