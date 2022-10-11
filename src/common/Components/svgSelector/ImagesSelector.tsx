import React from 'react';
import languages from '../../Styles/Icons/icons/code.png'
import design from '../../Styles/Icons/icons/web-design1.png'
import reactIcon from '../../Styles/Icons/icons/react.png'
import redux from '../../Styles/Icons/icons/redux.png'
import testIcon from '../../Styles/Icons/icons/test.png'
import socialSkill from '../../Styles/Icons/icons/social.png'
import server from '../../Styles/Icons/icons/rest-api.png'
import goals from '../../Styles/Icons/icons/goals.png'
import facebook from '../../Styles/Icons/social/facebook-50.png'
import github from '../../Styles/Icons/social/github-50.png'
import linkedin from '../../Styles/Icons/social/linkedin-circled-50.png'
import telegram from '../../Styles/Icons/social/telegram-50.png'
import email from '../../Styles/Icons/contacts/mail-25.png'
import telephone from '../../Styles/Icons/contacts/phone-25.png'
import locationCountry from '../../Styles/Icons/contacts/ocation-25.png'

export type contactIconsType = 'Facebook' | 'Github' | "Telegram" | 'Linkedin' | 'Email' | 'Tel' | 'Location';
export type skillIconNameType = 'Web-design' | 'Languages' | 'React' | 'Redux' | 'Server API' | 'Web-development' | 'Testing' | 'Personal goals' | 'Social skills' ;


type SvgSelectorPropsType = {
    iconName: skillIconNameType | contactIconsType
}

export const ImagesSelector = (props: SvgSelectorPropsType) => {
    switch (props.iconName) {
        case "Web-development": {
            return <div> <img src={languages} alt={'languages icon'}/> </div>
        }
        case "Web-design": {
            return <div> <img src={design} alt={'design icon'}/> </div>
        }
        case "React": {
            return <div> <img src={reactIcon} alt={'react icon'}/> </div>
        }
        case "Redux": {
            return <div> <img src={redux} alt={'redux icon'}/> </div>
        }
        case "Testing": {
            return <div> <img src={testIcon} alt={'test icon'}/> </div>
        }
        case "Server API": {
            return <div> <img src={server} alt={'server icon'}/> </div>
        }
        case "Social skills": {
            return <div> <img src={socialSkill} alt={'social skill icon'}/> </div>
        }
        case "Personal goals": {
            return <div> <img src={goals} alt={'goals icon'}/> </div>
        }
        case "Facebook": {
            return <div> <img src={facebook} alt={'facebook'}/> </div>
        }
        case "Github": {
            return <div> <img src={github} alt={'github'}/> </div>
        }
        case "Linkedin": {
            return <div> <img src={linkedin} alt={'linkedin'}/> </div>
        }
        case "Telegram": {
            return <div> <img src={telegram} alt={'telegram'}/> </div>
        }
        case "Email": {
            return <div> <img src={email} alt={'email'}/> </div>
        }
        case "Tel": {
            return <div> <img src={telephone} alt={'telephone'}/> </div>
        }
        case "Location": {
            return <div> <img src={locationCountry} alt={'location'}/> </div>
        }
        default:
            return <svg></svg>
    }
    }
