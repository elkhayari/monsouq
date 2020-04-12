import React from 'react';
import styled from 'styled-components';

export default function CartItem({ product, value }) {
    /** style sheet**/
    

    /** style sheet**/

    const { id, title, img, price, total, count } = product;
    const { increment, decrement, removeItem } = value;

    

    return (

        <ButtonWrapper>
             <div className='button-container'>
                <div className="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                   <div className="btn-group  btn-group-sm" role="group" aria-label="First group">
                     <button type="button" className="btn btn-secondary mx-2"  onClick={() => decrement(id)}> 
                            <i className="fas fa-minus-circle"></i>
                     </button>
                     <div className='count'>
                     <span style={ count   ? { color:'red', paddingTop: '50%'} : {}}  >
                         {count}
                     </span>
                     </div>
                     
                     <button type="button" className="btn btn-secondary mx-2" onClick={() => increment(id)}>
                         <i className="fas fa-plus-circle"></i>
                    </button>
                    
                   </div>
                 </div>
            </div>
            
        </ButtonWrapper>

    )


}

const ButtonWrapper = styled.div`

.button-container .count{
    border: 2px solid #7f857d;
    padding: 4px 4px 0px 4px;
    border-radius: 20px 0px 20px ;
    height: 2.5rem;
    
}

.button-container button{
    height: 2rem;
}




`



