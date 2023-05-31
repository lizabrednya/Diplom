// import styles from "./ButtonPage.module.css"
import { Switch_IU5 } from "../../components/customized/Switch_IU5";
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";

export const SwitchPage = () => {

    return (
    <div>
        <ComponentTemplate name={'Переключатель'}/>
        <Switch_IU5 defaultChecked />
        <Switch_IU5 />
        <Switch_IU5 disabled defaultChecked />
        <Switch_IU5 disabled />
    </div>
    )
}
