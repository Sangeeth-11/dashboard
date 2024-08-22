import React from 'react'
import './Details.css'

function Details() {
    return (
        <>
            <div className='container row m-auto shadow'>
                <div className='col-4 d-flex justify-content-center align-items-center' >
                    <div className='m-3 circle'><i class="fa-solid fa-user-group fa-xl"></i></div>
                    <div>
                        <div className='small-text'>Total customers</div>
                        <div className='large-text'>5780</div>
                        <div className='small-text1'><span style={{color:"green"}}>&#8593; 18% </span>this month</div>
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center'>
                    <div className='m-3 circle'><i className='fa-solid fa-users fa-xl'></i></div>
                    <div>
                        <div className='small-text'>Members</div>
                        <div className='large-text'>1640</div>
                        <div className='small-text1'><span style={{color:"red"}}>&#8595; 1% </span>this month</div>
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center' >
                    <div className='m-3 circle'><i class="fa-solid fa-user-secret fa-2x"></i></div>
                    <div>
                        <div className='small-text '>Active now</div>
                        <div className='large-text'>189</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Details