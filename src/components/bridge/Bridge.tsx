import BridgeMap from "./BridgeMap";
import "./bridge.css"

function Bridge() {
    return (
        <section className="bridge section" id="bridge">
            <div className="bridge_container container grid">
                <div className="bridge_content grid">
                    <h1>US Bridge Failures</h1>
                    <p>
                        Historical bridge failures since 1800.
                        Click marks on the map to see more details.
                    </p>
                    <BridgeMap />
                    <p className="bridge_data_source"> Data Source:
                        <a href="https://en.wikipedia.org/wiki/List_of_bridge_failures">
                            WIKI
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Bridge;