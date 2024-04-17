import { BeansProvider } from "../../BeansContext";
import { Bean } from "./Bean";

export const BeanPage = () => {
  
  return (
    <BeansProvider>
      <Bean />
    </BeansProvider>
  )
} 

