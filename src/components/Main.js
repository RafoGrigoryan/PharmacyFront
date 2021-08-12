import search from "../img/search.webp";
export function Main(){
    return(
        <div className="main">
            <div className="left-side"></div>
            <div className="middle">
                <div className="search">
                    <input type="text" placeholder="search druds"/>
                    <button><img src={search}/></button>
                </div>
            </div>
            <div className="right-side"></div>
        </div>
    )

}