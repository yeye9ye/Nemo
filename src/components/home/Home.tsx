import BridgeMap from "../bridge/BridgeMap";
import "../bridge/bridge.css"

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>US Bridge Failures</h1>
                    <p>
                        Historical bridge failures since 1800.
                        Click marks on the map to see more details.
                    </p>
                    <BridgeMap />
                    <p> Data Source:
                        <a href="https://en.wikipedia.org/wiki/List_of_bridge_failures">
                            WIKI
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;