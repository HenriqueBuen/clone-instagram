import { Post } from '../Post'
import { Storie } from '../Storie'
import { Suggestion } from '../Suggestion'
import './style.css'

export function Layout () {
    
    return (
        <>

            <div className='MainGrid'>

                <div className='first-column' style={{gridArea: " firstColumn "}}>

                    <div className="box">
                        
                        <Storie/>
                        
                        </div>

                    <div className="box">
                        
                        <Post/>
                        
                        </div>

                </div>
                

                <div className="suggestionBox" style={{gridArea: " secondColumn "}}>
                    <Suggestion/>
                </div>

            </div> 

            
        </>
    )
}