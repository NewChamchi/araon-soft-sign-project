import React from 'react';
import '../index.css';

/* 계약서 내용 */
const SignatureTextArea = ({ }) => {
    const tempLabel = "계약 내용"
    const tempContent = "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie"
    return (
        <div className='SignatureTextArea'>
            <label for="article">{tempLabel}</label>
            <textarea
                id="article"
                name="article"
                disabled
            >
                {tempContent}
            </textarea>
        </div>
    )
};

export default SignatureTextArea;