import React from 'react'
import './Header.css'
function Header() {
    return (
        <>

            <div className='container-header'>
                <div><b>Hello Evano</b> <i class="fa-regular fa-hand"></i>,</div>
                <div class="search-container">
                    <input type="text" placeholder="&#x1F50D; Search" class="search-input" />
                </div>
            </div>

        </>
    )
}

export default Header