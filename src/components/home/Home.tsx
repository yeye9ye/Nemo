import BridgeMap from "../bridge/BridgeMap";
import "../bridge/bridge.css"

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <BridgeMap />
                </div>
            </div>
        </section>
    );
}

export default Home;