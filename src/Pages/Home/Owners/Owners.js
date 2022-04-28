import React from 'react';
import css from './Owners.css'
import owner1 from '../../../images/owner/owner2.png'
import owner2 from '../../../images/owner/owner11.png'


const Owners = () => {

    return (
        <div className='owner-section '>

            <div className='owner-container' >

                {/* owner-1 */}

                <div className='owner '>
                    <div className='owner-img'>
                        <img src={owner2} className='img-fluid' alt="" />
                    </div>
                    <div className='owner-text mt-3'>
                        <h4>Sotto Paul</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, eveniet.</p>
                    </div>
                </div>

                {/* owner-2  */}

                <div className='owner '>
                    <div className='owner-img '>
                        <img src={owner1} className="img-fluid" alt="" />
                    </div>
                    <div className='owner-text mt-3 overflow-hidden'>
                        <h4>Manoranjan paul</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio molestias vitae
                            Lorem ipsum dolor sit  </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Owners;