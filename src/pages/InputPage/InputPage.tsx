import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";
import { TextField_IU5 } from "../../components/customized/TextField_IU5";


export const InputPage = () => {

    return (
        <div>
            <ComponentTemplate name={'Input'}/>
            <TextField_IU5 label="Фамилия"></TextField_IU5>
            <TextField_IU5 label="Ошибочное" error={true}></TextField_IU5>
            <TextField_IU5 label="Заблокированное" disabled value={'Блок'}></TextField_IU5>
        </div>
    )
}