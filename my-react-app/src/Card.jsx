import Alpha from './assets/alpha.jpeg'

function Card(){
    return(
        <div className="card">
            <img src={Alpha} width="200px" height="200px" className="cardimg"></img>
            <h2 className="cardName">BajraBoot</h2>
            <p className="cardp">I like chocolate and cheese</p>

        </div>
    );
}
export default Card