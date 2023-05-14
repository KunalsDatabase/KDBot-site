
function  Premium(){
    return (
        <>
            <div className = "container-fluid">
                <div className = "row text-center text-light my-5">
                    <div className = "col">
                        <h1 className = "display-4">KDBot Premium </h1>
                        <p className = "lead">KDBot Premium provides additional functionality and features through a dedicated instance that is separate from the main bot. Help keep KDBot running and support the development of new features by enrolling in one of the following tiers on our Patreon. </p>
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    <div className="col-md-3 mx-4">
                        <div className="card mb-4 box-shadow text-light text-center bg-dark">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">KDBot Premium for 1</h4>
                            </div>
                            <div className="card-body">
                                <h1><b>$5 </b><small className="text-muted">/ mo</small></h1>
                                <ul className="my-4 mb-4">
                                    <li>KDBot premium for 1 Discord guilds you own or moderate</li>
                                </ul> <button type="button" className="btn btn-lg btn-block btn-success" onclick="location.href='https://www.patreon.com/join/kdbase/checkout?rid=3151036'">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-4">
                        <div className="card card-middle mb-4 box-shadow text-light text-center bg-dark">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">KDBot Premium for 3</h4>
                            </div>
                            <div className="card-body">
                                <h1><b>$7 </b><small className="text-muted">/ mo</small></h1>
                                <ul className="my-4 mb-4">
                                    <li>KDBot premium for 3 Discord guilds you own or moderate</li>
                                </ul> <button type="button" className="btn btn-lg btn-block btn-success" onclick="location.href='https://www.patreon.com/join/kdbase/checkout?rid=5382119'">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mx-4">
                        <div className="card mb-4 box-shadow text-light text-center bg-dark">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">KDBot Premium for 5</h4>
                            </div>
                            <div className="card-body">
                                <h1><b>$10 </b><small className="text-muted">/ mo</small></h1>
                                <ul className="my-4 mb-4">
                                    <li>KDBot premium for 5 Discord guilds you own or moderate</li>
                                </ul> <button type="button" className="btn btn-lg btn-block btn-success" onclick="location.href='https://www.patreon.com/join/kdbase/checkout?rid=3954908'">Join</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row text-white md-5">
                    <div className = "col">
                        <h1 className = "display-4 text-center">Features</h1>
                    </div>
                </div>
                <div className = "row text-white my-4">
                    <div className = "col">
                        <div className="media">
                        <img src="icons/hdd.svg" className="white-icon" width="32" height="32" alt="..."/>
                        <div className="media-body">
                            <h5 className="mt-0 fw-bold">Dedicated Instance</h5>
                            KDBot Premium is a separate bot from the main bot that runs on a separate cloud server in order to offer maximum availability for our users. Having a separate instance also enables you to have KDBot and KDBot Premium in the same server, allowing for usage in two voice channels separately. 
                        </div>
                        </div>
                    </div>
                    <div className = "col">
                        <div className="media">
                        <img src="icons/volume-up-fill.svg" className="white-icon" width="32" height="32" alt="..."/>
                        <div className="media-body">
                            <h5 className="mt-0 fw-bold">Access to 15 Amazon Polly voices</h5>
                            KDBot Premium provides access to additional voices from Amazon Polly. The following voices will be available with Premium: Lea, Vicki, Raveena, Aditi, Mizuki, Takumi, Seoyeon, Liv, Ines, Cristiano, Maxim, Astrid, Filiz, Joanna, Matthew
                        </div>
                        </div>
                    </div>
                </div>
                <div className = "row text-white my-4">
                    <div className = "col">
                        <div className="media">
                        <img src="icons/code-slash.svg" className="white-icon" width="32" height="32" alt="..."/>
                        <div className="media-body">
                            <h5 className="mt-0 fw-bold">SSML Support</h5>
                            Support for SSML, speech synthesis markup language, is provided with Premium. SSML allows you to use tags to modify text-to-speech output, such as adding pauses, changing speed and pitch, etc. Documentation for SSML tags <a href = "https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html">can be found here.</a> Please note that the  	&lt;speak&gt; 	&lt;/speak&gt; tags are added automatically. Use the command 'help ssml for more information
                        </div>
                        </div>		
                    </div>
                    <div className = "col">
                        <div className="media">
                        <img src="icons/hash.svg" className="white-icon" width="32" height="32" alt="..."/>
                        <div className="media-body">
                            <h5 className="mt-0 fw-bold">Ability to set dedicated TTS channel</h5>
                            You can now set a TTS text channel where anyone can use KDBot without requiring a prefix and the bot will speak the message if it is connected to a voice channel. Use the 'ttschannel command to set a TTS channel
                        </div>
                        </div>		
                    </div>
                </div>
                <div className = "row text-white md-5">
                    <div className = "col ">
                        <h1 className = "display-4 text-center">How it works</h1>
                    </div>
                </div>
                <div className = "row text-white my-4">
                    <div className="col">
                        <ul className="list-unstyled">
                        <li className="media">
                            <div className="media-body">
                            <h3 className="mt-0 mb-1">1. Join one of our tiers on <a href = "https://www.patreon.com/kdbase">Patreon.</a> </h3>
                            Click "Join" on one of the tiers above and become a Patron. 
                            </div>
                        </li>
                        <li className="media my-4">
                            <div className="media-body">
                            <h3 className="mt-0 mb-1">2. Link your Discord account with Patreon. </h3>
                            In order for KDBot to verify that you are a Patron on Patreon, you will need to link your Discord account on Patreon. The instructions for doing so are <a href = "https://support.patreon.com/hc/en-us/articles/212052266-Get-my-Discord-role">found here.</a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-body">
                            <h3 className="mt-0 mb-1">3. Add KDBot to your server.</h3>
                            Use <a href = "https://discord.com/oauth2/authorize?client_id=708971789446938664&permissions=128&scope=bot">this link</a> to add KDBot Premium to the server (or servers depending on tier) of your choice. Please do note however that you will need to add the bot with the same account that you have linked to your Patreon account. 
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Premium
