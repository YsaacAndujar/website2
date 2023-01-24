import AProps from './AProps'
import './Styles.css'
export const GitHub = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon GitHub'>
            <img className='GitHub' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title='GitHub'/>
        </a>
    )
}
export const YouTube = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon YouTube'>
            <img className='YouTube' src="https://img.icons8.com/color/512/youtube-play.png" alt="YouTube" title='YouTube'/>
        </a>
    )
}
export const Python = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon Python'>
            <img className='Python' src="https://img.icons8.com/color/512/python.png" alt="Python" title='Python'/>
        </a>
    )
}
export const Django = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon Django'>
            <img className='Django' src="https://img.icons8.com/material-outlined/512/django.png" alt="Django" title='Django'/>
        </a>
    )
}
export const PostgreSQL = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon PostgreSQL'>
            <img className='PostgreSQL' src="https://img.icons8.com/color/512/postgreesql.png" alt="PostgreSQL" title='PostgreSQL'/>
        </a>
    )
}
export const Angular = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon Angular'>
            <img className='Angular' src="https://img.icons8.com/color/512/angularjs.png" alt="Angular" title='Angular'/>
        </a>
    )
}
export const TypeScript = ({link, size="sm"}:AProps) =>{
    return (
        <a href={link} className='link-icon TypeScript'>
            <img className='TypeScript' src="https://img.icons8.com/color/512/typescript.png" alt="TypeScript" title='TypeScript'/>
        </a>
    )
}