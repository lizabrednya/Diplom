// import styles from "./ButtonPage.module.css"
import { RadioButton_IU5 } from "../../components/customized/RadioButton_IU5";
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";

export const RadiobuttonPage = () => {
    const values = [
        {value: 'female', label: 'Female'}, 
        {value: 'male', label: 'Male'},
        {value: 'disabled', label: 'Disabled', disabled: true}
    ]
    return (
        <div>
            <ComponentTemplate name={'Радиобаттон'}/>
            <RadioButton_IU5 
                options={values}
                orientation={'row'}
                ></RadioButton_IU5>
            <br/>
            <RadioButton_IU5 
            options={values}
            orientation={'column'}
            ></RadioButton_IU5>
        </div>
    )
}
