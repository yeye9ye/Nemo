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
                        Click marks on the map to see more details summarized by AI.
                    </p>
                    <p>
                        Facts about failures (by Claude 3.5 Sonnet):
                    </p>
                    <p>
                        (place holder for something generated by LLM)
                    </p>
                    <BridgeMap />
                </div>
            </div>
        </section>
    );
}

export default Bridge;