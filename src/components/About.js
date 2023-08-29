import React from 'react'

export default function About(props) {

    //Page color
    // const [myStyle, setMyStyle] = useState({
    //     color: '#041e45',
    //     backgroundColor: 'white'

    // })
let myStyle = {
    color:props.mode==='dark'?'white': '#041e45',
    backgroundColor:props.mode==='dark'?'#041e45':'white'
}

    //Button text 
    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const togglestyle = () => {
    //     if (myStyle.color === '#041e45') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#041e45',
    //             border: '2px solid white'
    //         })
    //         setBtnText("Enable White Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: '#041e45',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


    return (
        <><div className='container' style={myStyle}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong> Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                    Explore the latest features. Get insights into the new additions and improvements in our product. Stay up-to-date with the enhancements that can benefit you. You can even share your thoughts and suggestions to help shape the future updates.                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>Usage Terms</strong>  
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Understand the usage terms. Familiarize yourself with our terms and conditions. Learn how you can use our product and services responsibly. It's important to be aware of the guidelines to ensure a smooth and productive experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <strong>Customer Support</strong>                          </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Assistance when you need it. Our dedicated support team is available to help you with any queries or issues you may encounter. Whether it's troubleshooting, clarifications, or general assistance, we're here to provide timely and effective support to ensure a seamless experience.
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* <div className="container my-3">
                <button onClick={togglestyle} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </>


    )
}
