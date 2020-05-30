import React from 'react'



function JobCards(props){
return (
    <div className="container">
        {props.jobInfo.map(data => {
            return (
                <div className="box">
                    
                    <div className="logo">
                        <img className="company-logo" src={data.logo} alt="logo of company"></img>
                    </div>
            <div className="left-rows">
            <div className="top-row">
                {data.company} 
                {data.new && <div className="if-new">NEW!</div>}
                {data.featured && <div className="if-featured">FEATURED</div>}
            </div>  
            <div className="middle-left">
                {data.position}
            </div> 
             <div className="bottom-row">
                <div className="bottom-el">{data.postedAt}</div>
                <div className="bottom-el">{data.contract}</div>
                <div className="bottom-el">{data.location}</div>
            </div>
            </div>
            <div className="middle-right">
                <ul className="right-elements">
                <li>{data.role}</li>
                <li>{data.level}</li>
                {data.languages.map(lang => 
                 <li>{lang}</li>
                )}
                </ul>
            </div>
            </div>
            )
            })}
    </div>
)
}

export default JobCards