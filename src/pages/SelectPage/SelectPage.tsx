import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";
import { Select_IU5 } from "../../components/customized/Select_IU5";

export const SelectPage = () => {

    const choose_from = [{name: 'Ничего', value: ""}, {name: 'МГТУ им. Баумана', value: 2}, {name: 'МГУ им. Ломоносова', value: 3}]

    return (
        <div>
            <ComponentTemplate name={'Select'}/>
            <Select_IU5 choose_from={choose_from} label={'Университет'} sx={{width: '20em', mt: '2em', mr: '2em'}}></Select_IU5>
        </div>
    )
}
