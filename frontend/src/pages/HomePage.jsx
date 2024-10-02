import React from "react";
import introbg from "../assets/intro.webm";
import WatchCollection from "../components/WatchItem";
import WatchItem2 from "../components/WatchItem2";

const HomePage = () => {

    return(
        <>
        <div className={"intro-container"}>
            <video src={introbg} autoPlay loop muted ></video>
            <div className="intro-text">
                Find your dream watch <br /> on the leading marketplace <br /> for luxury watches.
            </div>
        </div>

        <div className="introduction">
            <h1>Üdvözöllek az Órák Világában!</h1>
            <p>Ez az oldal bemutatja az órák funkcionalitását, és kiemeli a jelentős márkákat, mint például a Rolex, Orient, Cartier és Baum.</p>
            <p>Az órák világa izgalmas és változatos. Minden időmérő mögött egyedi mechanizmus rejlik, amely precíz időmérésre és stílusos esztétikára képes.</p>
            <p>Fedezd fel az alábbi táblázatot, hogy többet megtudj ezekről az órákról és működésükről!</p>
        </div>

        <WatchCollection></WatchCollection>
        <WatchItem2></WatchItem2>

        </>
    );
}

export default HomePage;