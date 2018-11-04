/**
 * A wrapper
 * - Disable the editor during server side rendering
 * - Expose utilities (ex: SlateHtmlSerializer)
 * */

import * as React from "react";

function getEditor() {
    let isBrowser = (typeof window !== 'undefined');
    if (isBrowser) {
        return require('./editor').default;
    } else {
        console.log("Not a browser. Disable Golery editor");
        return null;
    }
}

let Editor = getEditor();

export default class GoleryEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("X");
        return Editor == null ? <div>"No editor"</div> : <Editor {...this.props} />
    }
}

// This editor does not use the following.
// However, as we import, they are packaged into bundle
// So just export them again
export {Value as SlateValue} from "slate";
import SlateHtmlSerializer from "slate-html-serializer";
import {DEFAULT_RULES} from "@canner/slate-editor-html";

export {SlateHtmlSerializer, DEFAULT_RULES as SlateEditorHtmlDefaultRule};