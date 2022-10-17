import React from "react";

function Info(){
    return (
        <div>
            <img src="../images/eu.jpg" className="info--img" />
            <div className="info--info">
                <h1>Mariana Schmidt</h1>
                <p>Frontend Developer</p>
                <span>marianaschmidt.website</span>
            
                <div className="info--btn">
                    <button type="button" className="btn">
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </button>
                    
                    <button type="button" className="btn">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </button>
                    
                </div>
            </div>   
        </div>
    );
}

export default Info