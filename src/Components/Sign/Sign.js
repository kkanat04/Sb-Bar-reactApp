import React, {useState} from 'react';
import './Sign.css'
import ModalSign from '../ModalSign/ModalSign';
const Sign = () => {
    const [sign, setSign] = useState(false)
    const [reg, setReg] = useState(false)

    return (
        <div>
            <div>
                <h2 onClick={ () => setSign(false)}>Войти</h2>
                <h2 onClick= { () => setReg(true)}>Регистрация</h2>
                {
                    sign === false? <div className='sign-reg'><p onClick={() => setSign(true)}>X</p>
                        <ModalSign/>
                    </div>
                    : <p></p>

                }
            </div>
        </div>
    );
};

export default Sign;