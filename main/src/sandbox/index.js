import React from "react";
import ReactDOM from "react-dom";

import GoleryEditor, {SlateHtmlSerializer, SlateEditorHtmlDefaultRule, SlateValue} from "../index";

import "antd/dist/antd.css";

console.log("$$$$$$$$$$$4");

const initialValue = SlateValue.fromJSON({
    document: {
        nodes: [
            {
                object: "block",
                type: "paragraph",
                nodes: [
                    {
                        object: "text",
                        leaves: [
                            {
                                text: "A line of text in a paragraph."
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

const serializer = new SlateHtmlSerializer({ rules: SlateEditorHtmlDefaultRule });

class DemoEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            value: initialValue
        };
    }

    render() {
        const { value } = this.state;

        return (
            <div style={{ margin: "20px" }}>
                <div id={"sample"}>
                    This is test<ol>
                    <li>
                        first<br />firt of firts
                    </li>
                    <li>second</li>
                </ol>
                </div>
                <button onClick={() => this._setHtml()}>SetHtml</button>
                <button onClick={() => this._getHtml()}>GetHtml</button>
                <GoleryEditor value={value} onChange={(change)=>this._onChange(change)} readOnly={false} debug={true} />
            </div>
        );
    }

    _setHtml() {
        let html = document.getElementById("sample").innerHTML;
        const v = serializer.deserialize(html);
        this.setState({ value: v });
        console.log(v);
    }

    _getHtml() {
        console.log("Out:", serializer.serialize(this.state.value));
    }

    _onChange(change) {
        let {value} = change;
        this.setState({value});
        let html = serializer.serialize(this.state.value)
        console.log(html);
    }
}

ReactDOM.render(<DemoEditor />, document.getElementById("root"));
