import React from 'react';

function Footer(props) {
    return (
      
        <div className="d-flex justify-content-center mt-5 container fixed-bottom">
            <a className="socialLinks text-center" href="https://www.linkedin.com/in/mark-prodehl-95a04433/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
            <a className="socialLinks text-center" href="https://github.com/markprodehl" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
            <a className="socialLinks text-center" href="https://drive.google.com/file/d/14iVFh84eDVwlfkKFU06_3wRoTF_uE_8A/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="far fa-file fa-3x"></i></a>
        </div>
    )
}

export default Footer