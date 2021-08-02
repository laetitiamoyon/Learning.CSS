import React from 'react';
import Join from './images/join.svg'
import Send from './images/send.svg'

const App = () => 
{
    // Vérifier l'ordre
    // Responsive, tester sur un petit écran style iphone
    return <>
        <div className="container">
            <div className="usernameContainer">
                <div className="title">Scouting Group</div>
                <input className="input" placeholder="Username"/>
            </div>

            <div className="descriptionContainer">
                <div className="titleDescription">Welcome to the Streamline scouting chat</div>
                <div className="description">We can now freely colaborate regarding our current 
                Demand. Any question about the documentation or the project, please feel free to get
                in contact us.
                </div>
            </div>

            <div className="messageDate">Tuesday, April 7th at 1:21 PM</div>

            <div className="messageFromOtherUser">
                <div className="messageTitle">Jess sent a message to the group</div> 
                <div className="conversationContainer">
                    <img className="profilImage"/>
                    <div>
                        <div className="message">Awesome!It's going to amazing deal!</div>
                        <div className="message">I've ran through different docs</div>
                        <div className="message">Hope for the best</div>
                    </div>
                </div>
            </div>

            <div className="messageFromUser">
                <div className="messageTitle">You sent a message to everybody</div> 
                <div className="conversationContainer">
                    <img className="profilImage"/>
                    <div>
                        <div className="message">Thanks you for sending the deal, I'll review it
                        and get come back to you shortly</div>
                    </div>
                </div>
            </div>

            <div className="messageFromOtherUser">
                <div className="messageTitle">Jess sent a message to the group</div> 
                <div className="conversationContainer">
                    <img className="profilImage"/>
                    <div>
                        <div className="message">Awesome!It's going to amazing deal!</div>
                    </div>
                </div>
            </div>

            <div className="messageFromUser">
                <div className="messageTitle">You sent a message to everybody</div> 
                <div className="conversationContainer">
                    <img className="profilImage"/>
                    <div>
                        <div className="message">Leo, can you provide the lastest doc ?</div>
                    </div>
                </div>
            </div>

            <div className="messageDestinationInputContainer">
                <input className="input" placeholder="Write a message..."/>
                <img src={Send}/>
            </div>

            <div className="messageDestinationInputContainer">
                <input className="input" placeholder="Write a message..."/>
                <input className="input" placeholder="Group Name"/>
                <img src={Join}/>
                <img src={Send}/>
            </div>

            <div className="messageDestinationInputContainer">
                <input className="input" placeholder="Write a message..."/>
                <input className="input" placeholder="Username"/>
                <img src={Send}/>
            </div>
        </div>
    </>
}

export default App;
