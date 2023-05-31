// import styles from "./ButtonPage.module.css"
import { Tabs_IU5 } from "../../components/customized/Tabs_IU5";
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";

export const TabsPage = () => {

    const options = [
        {label: 'Вкладка 1', content: 'Наполнение 1'},
        {label: 'Вкладка 2', content: 'Наполнение 2'},
        {label: 'Вкладка 3', content: 'Наполнение 3'}
    ]

    return (
        <div>
            <ComponentTemplate name={'Вкладка'}/>
            <Tabs_IU5
                options={options}
            />
        </div>
    )
}
