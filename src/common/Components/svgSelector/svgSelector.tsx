import React from 'react';
import languages from '../../Styles/svgIcons/web-development.png'
import design from '../../Styles/svgIcons/web-design.png'
import reactIcon from '../../Styles/svgIcons/atom-symbol.png'
import redux from '../../Styles/svgIcons/web-development.png'
import testIcon from '../../Styles/svgIcons/search.png'
import socialSkill from '../../Styles/svgIcons/social-care.png'
import server from '../../Styles/svgIcons/servers.png'
import goals from '../../Styles/svgIcons/competence.png'


export type SkillsNameType = 'Web-design' | 'Languages' | 'React' | 'Redux' | 'Server API' | 'Web-development' | 'Testing' | 'Personal goals' | 'Social skills'


type SvgSelectorPropsType = {
    skillName: SkillsNameType
}

export const SvgSelector = (props: SvgSelectorPropsType) => {
    switch (props.skillName) {
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
        default:
            return <svg></svg>
    }
    }
