import { useParams } from "react-router-dom"
import { useContext } from "react";
import { BeansContext } from "../../BeansContext";

export const Bean = () => {
    const { id } = useParams();
    const beans = useContext(BeansContext);
    const bean = beans.find(item => item.id === parseInt(id));
  
    if (!beans) return <h1>Bean not found!</h1>;
    
    return (
      <div>
        <h1>Bean detail - {id}</h1>
        <h2>Bean name - {bean.title}</h2>
      </div>
    );
}

