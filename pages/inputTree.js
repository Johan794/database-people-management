import styles from '../styles/Home.module.css'
const controller = require('../components/TreeControler.js')
export default function unitTest() {
    return(
        <main className={styles.main}>
	    <h2 className={styles.title2}>
            Welcome to the unit test of the implementation of the AVLTree
        </h2>
        <div id='currentContainer'>
            <ul>
                <li>
                        <section>
                        <h3> 
                         <a href = "/insert">Test the method "Insert"</a>    
                        </h3>             
                        </section>
                </li>
                <li>
                        <section>
                        <h3> 
                         <a href='/delete' onClick={() => handleClick("delete")}>Test the method "Delete"</a>    
                        </h3>             
                        </section>
                </li>
                <li>
                     <section>
                        <h3> 
                         <a href='/search'>Test the method "Search"</a>    
                        </h3>             
                        </section>
                </li>
            </ul>
        </div>
     
    </main>	
    )
}