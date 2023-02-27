import '../../assets/css/RegisterSection.css';

import Label from '../atoms/Label';
import Input from '../atoms/Input';

function WrapperInput({msn, type, placeholder, name}) {
    return ( 
        <div className="wrapper-input">
            <Label msn={msn}/>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
     );
}

export default WrapperInput;