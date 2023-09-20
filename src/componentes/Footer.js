import './FooterStyles.css'

import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div>
                <a href='/'><i className="fa-brands fa-square-facebook"></i></a>
                <a href='/'><i className="fa-brands fa-square-instagram"></i></a>
                <a href='/'><i className="fa-brands fa-square-behance"></i></a>
                <a href='/'><i className="fa-brands fa-square-twitter"></i></a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>ChangeLog</a>
                <a href='/'>Status</a>
                <a href='/'>Licence</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>Github</a>
                <a href='/'>Issuse</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>TroublSutting</a>
                <a href='/'>Contact US</a>
            </div>

            <div>
                <h4>Others</h4>
                <a href='/'>Terms & Service</a>
                <a href='/'>Privacy Polices</a>
                <a href='/'>Licence</a>
            </div>
        </div>
    </div>
  )
}

export default Footer