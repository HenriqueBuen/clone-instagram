import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/78403283_1323062667899235_4445143602053513216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nPi8Gs6yZg4AX_XcbKo&_nc_ht=scontent.fgru6-1.fna&oh=00_AfC_BZXdcA1_CqgxbwJBSE3QYCVJ6TpC4oYxcHIgrsvwjg&oe=65512DF2https://scontent.fgru6-1.fna.fbcdn.net/v/t1.6435-9/78403283_1323062667899235_4445143602053513216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nPi8Gs6yZg4AX_XcbKo&_nc_ht=scontent.fgru6-1.fna&oh=00_AfC_BZXdcA1_CqgxbwJBSE3QYCVJ6TpC4oYxcHIgrsvwjg&oe=65512DF2`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>henrybeats</span>
                        <p>Henrique Bueno</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
    
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>Seguido por veacrudo</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                ))}
               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2023 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}