import {useRef, useState} from 'react';
const ITEMS = [
    "Fantasy", "Mystery", "Classic Literature",
    "Science Fiction", "Romance", "Thriller",
    "Biography", "Contemporary Fiction", "Poetry", "Non-Fiction",
];

export default function Marquee({
        items = ITEMS,
        speed = 28,
        pauseOnHover = true,
    }){
    
    const [paused, setPaused] = useState(false);
    const doubled = [...items, ...items];

    return (
        <div
            className='marquee_wrap'
            onMouseEnter = {() => pauseOnHover && setPaused(true)}
            onMouseLeave = {() => pauseOnHover && setPaused(false)}>
            <div 
                className='marquee_track'
                style = {{animationPlayState: paused ? "paused" : "running"}}>
                {doubled.map((item, i) => (
                    <span key={i} className='marquee_item'>
                        <span className='marquee_label'>{item}</span>
                        <span className='marquee_dot'>·</span>
                    </span>
                ))}

            </div>
        </div>
    )
}