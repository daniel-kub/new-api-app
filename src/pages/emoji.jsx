import axios from 'axios'
import {useState} from 'react'
export const Emoji = () => {
    const [emoji, setEmoji] = useState(null);

    const LosEmoji = () => {
        axios.get('https://emojihub.yurace.pro/api/random').then(res => {
            setEmoji(res.data.htmlCode)
            console.log(res.data.htmlCode)
            document.getElementById('emoji').innerHTML = res.data.htmlCode
        })
    }
    return (
        <>
        
        <button onClick={LosEmoji}>Wygeneruj losowe emoji</button>
        <p dangerouslySetInnerHTML={{ __html: emoji ? emoji.join('') : '' }} />
        
        </>
    )
}