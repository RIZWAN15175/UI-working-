import React from "react"
import ai from "../../assetss/assets/ai.png"
import people from "../../assetss/assets/people.png"
import "./Header.css"


const Headers1 =()=>{
    return (
       <div className="gpt3__header section__padding">
         <div className="gpt3__header-content">
            <h1 className="gradient__text">Let,s Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for travelling assistance includese Not throught all exercise blessing includings way everythings joy alteration the attachments partly we years to order allow asked of </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="your Email address"/>
                <button type="button">Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1,6000 people request aceess a visit in last 24 hours </p>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
       </div>
    )
}

export default Headers1