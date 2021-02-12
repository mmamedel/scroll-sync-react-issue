import { Fragment } from "react";
import "./styles.css";
import { ScrollSync, ScrollSyncNode } from "scroll-sync-react";

export default function App() {
  const oneToFifty = new Array(50).fill(null).map((_, i) => i + 1);
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit officiis omnis possimus quasi rerum sed soluta veritatis.";
  return (
    <div className="App">
      <ScrollSync proportional={false}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50px 400px",
            height: 300,
            width: 450
          }}
        >
          <ScrollSyncNode group="A">
            <div style={{ overflow: "auto" }}>
              {oneToFifty.map((n) => (
                <Fragment key={`${n}_menu`}>
                  {n}
                  <br />
                </Fragment>
              ))}
            </div>
          </ScrollSyncNode>
          <ScrollSyncNode group="A">
            <div style={{ overflow: "auto" }}>
              <div style={{ width: 1600 }}>
                {oneToFifty.map((n) => (
                  <Fragment key={`${n}_content`}>
                    {n}
                    {loremIpsum}
                    <br />
                  </Fragment>
                ))}
              </div>
            </div>
          </ScrollSyncNode>
        </div>
      </ScrollSync>
    </div>
  );
}
