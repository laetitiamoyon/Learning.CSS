import React from 'react';
import './App.css';
import Join from './images/join.svg'
import Send from './images/send.svg'


const App = () => 
{
    // Ce n'est pas un message container, il ne contientp as que des messages
    // description conteneur doit englobé tout l'espace
    // pensé au gradients
    // Par ailleurs la description ne doit pas prendre tou l'espace dispo
    // Pas les m^mes arrondies sur les message
    return <>
        <div className="container">
            <div className="scouting-container">
                <div className="title">Scouting Group</div>
                <input className="username" placeholder="Username"/>
            </div>

            <div className="description-container">
                <div className="title-description">Welcome to the Streamline scouting chat</div>
                <div className="text-description">We can now freely colaborate regarding our current 
                Demand. Any question about the documentation or the project, please feel free to get
                in contact us.
                </div>
            </div>
            <div className="date-message">Tuesday, April 7th at 1:21 PM</div>

            <div className="messageFromOtherUser">
                <div className="title-message">Jess sent a message to the group</div> 
                <div className="conversationFromOtherUser">
                    <img className="profilPhotoFromOtherUser"/>
                    <div className="message-container">
                        <div className="message-received">Awesome!It's going to amazing deal!</div>
                        <div className="message-received">I've ran through different docs</div>
                        <div className="message-received">Hope for the best</div>
                    </div>
                </div>
            </div>

            <div className="messagetoEverybody">
                <div className="title-message">You sent a message to everybody</div> 
                <div className="conversationToEverybody">
                    <img className="profilPhoto"/>
                    <div className="message-container">
                        <div className="message-sent">Thanks you for sending the deal, I'll review it
                        and get come back to you shortly</div>
                    </div>
                </div>
            </div>

            <div className="messageFromOtherUser">
                <div className="title-message">Jess sent a message to the group</div> 
                <div className="conversationFromOtherUser">
                    <img className="profilPhotoFromOtherUser"/>
                    <div className="message-container">
                        <div className="message-received">Awesome!It's going to amazing deal!</div>
                    </div>
                </div>
            </div>

            <div className="messagetoEverybody">
                <div className="title-message">You sent a message to everybody</div> 
                <div className="conversationToEverybody">
                    <img className="profilPhoto"/>
                    <div className="message-container">
                        <div className="message-sent">Leo, can you provide the lastest doc ?</div>
                    </div>
                </div>
            </div>

            <div className="message-to-everybody-container">
                <input className="text-area"
                placeholder="Write a message..."/>
                <div className="send-button"></div>
                <img src={Send}/>
            </div>

            <div className="group-message-container">
                <input className="text-area-group"
                placeholder="Write a message..."/>
                <input className="group-name"
                placeholder="Group Name"/>
                <img src={Join}/>
                <img src={Send}/>
            </div>

            <div className="private-message-container">
                <input className="text-area-private"
                placeholder="Write a message..."/>
                <input className="username"
                placeholder="Username"/>
                <img src={Send}/>
            </div>

        </div>
    </>
}

export default App;
