// import styles from "./ButtonPage.module.css"
import { Checkbox_IU5 } from "../../components/customized/Checkbox_IU5";
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";

export const CheckboxPage = () => {

    return (
        <div>
            <ComponentTemplate name={'Чекбокс'}/>
            <Checkbox_IU5/>
            <Checkbox_IU5 disabled/>
            <Checkbox_IU5 disabled checked/>
        </div>
    )
}
