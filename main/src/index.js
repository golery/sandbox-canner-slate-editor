/**
 * A wrapper
 * - Disable the editor during server side rendering
 * - Expose utilities (ex: SlateHtmlSerializer)
 * */

import React from "react";

let isBrowser = (typeof window !== 'undefined');
let GoleryEditor, EditorToolbar, htmlSerializer, SlateValue;
const Mock = () => <div>(mock react component in nodejs)</div>;

if (isBrowser) {
    GoleryEditor = require('./editor').default;
    const SlateHtmlSerializer = require('slate-html-serializer').default;
    const DEFAULT_RULES = require("@canner/slate-editor-html").DEFAULT_RULES;
    htmlSerializer = new SlateHtmlSerializer({rules: DEFAULT_RULES});
    EditorToolbar = require("./EditorToolbar").default;
    SlateValue = require("slate").Value;
} else {
    GoleryEditor = Mock;
    EditorToolbar = Mock;
    htmlSerializer = {serialize: () => null, deserialize: () => null};
    SlateValue = {fromJson: () => null}
}

const GoleryEditorLib = {GoleryEditor, EditorToolbar, htmlSerializer, SlateValue};
export default GoleryEditorLib;