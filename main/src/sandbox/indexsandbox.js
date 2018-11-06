import React from "react";
import ReactDOM from "react-dom";

import styles from "./indexsandbox.css";
import EditorToolbar from "../EditorToolbar";
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
        this.editor = React.createRef();
    }

    render() {
        const { value } = this.state;
        const onChange = (change, v1, v2)=>this._onChange(change, v1, v2);
        return (
            <div style={{ margin: "20px" }}>
                <EditorToolbar value={value} onChange={onChange}/>
                <div style={{border: "1px solid red"}}>
                <GoleryEditor value={value} onChange={onChange} readOnly={false} debug={true}
                            ref={this.editor}/>
                </div>

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

    _onChange(change, v1, v2) {
        let value = change.value;
        let innerHtml = serializer.serialize(value);
        this.setState({value: value});
    }
}

ReactDOM.render(<DemoEditor />, document.getElementById("root"));
