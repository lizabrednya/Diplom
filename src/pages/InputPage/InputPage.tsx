// import styles from "./ButtonPage.module.css"
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";
import { TextField_IU5 } from "../../components/customized/TextField_IU5";


export const InputPage = () => {

    return (
        <div>
            <ComponentTemplate name={'Поле выбора'}/>
            <TextField_IU5></TextField_IU5>
        </div>
    )
}