import { useState } from "react";
import { useEffect } from "react";

function Search({ sendData }) {
  const [dataToSend, setDatatoSend] = useState("");
  const [checked, updateChecked] = useState({
    html: true,
    CSS: true,
    JS: true,
    Rct: true,
    TS: true,
  });

  const [htmlChecked, updateHtmlChecked] = useState(true);
  const [cssChecked, updateCssChecked] = useState(true);
  const [jsChecked, updateJsChecked] = useState(true);
  const [reactChecked, updateReactChecked] = useState(true);
  const [tsChecked, updateTsChecked] = useState(true);

  let checkedBox = checked;

  function processData() {
    updateChecked({
      html: htmlChecked,
      CSS: cssChecked,
      JS: jsChecked,
      Rct: reactChecked,
      TS: tsChecked,
    });
    console.log(checkedBox + "In function");

    sendData(checked);
    setDatatoSend(checked);
  }

  useEffect(() => {
    setDatatoSend(checked);
    sendData(checked);
  }, [checked, sendData]);

  return (
    <div className="site-search">
      <label htmlFor="htmlCheckbox">
        {" "}
        <img src="src/assets/html.png" width={25} height={25}></img>
      </label>
      <input
        id="htmlCheckbox"
        type="checkbox"
        onChange={(e) => updateHtmlChecked(e.target.checked)}
        defaultChecked
      ></input>

      <label htmlFor="CSSCheckbox">
        <img src="src/assets/css.png" width={25} height={25}></img>
      </label>
      <input
        id="CSSCheckbox"
        type="checkbox"
        onChange={(e) => updateCssChecked(e.target.checked)}
        defaultChecked
      ></input>

      <label htmlFor="JSCheckbox">
        <img src="src/assets/javascript.png" width={25} height={25}></img>
      </label>
      <input
        id="JSCheckbox"
        type="checkbox"
        onChange={(e) => updateJsChecked(e.target.checked)}
        defaultChecked
      ></input>

      <label htmlFor="reactCheckbox">
        {" "}
        <img src="src/assets/react.png" width={25} height={25}></img>
      </label>
      <input
        id="reactCheckbox"
        type="checkbox"
        onChange={(e) => updateReactChecked(e.target.checked)}
        defaultChecked
      ></input>

      <label htmlFor="tsCheckbox">
        {" "}
        <img src="src/assets/typescript.png" width={25} height={25}></img>
      </label>
      <input
        id="tsCheckbox"
        type="checkbox"
        onChange={(e) => updateTsChecked(e.target.checked)}
        defaultChecked
      ></input>

      <button onClick={processData}>Search</button>
    </div>
  );
}

export default Search;
