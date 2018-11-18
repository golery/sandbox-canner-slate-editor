import {DEFAULT_RULES} from "@canner/slate-editor-html";
import SlateHtmlSerializer from "slate-html-serializer";
import CodeBlockRule from "./codeBlockRules";

console.log(DEFAULT_RULES);
let fixedCodeRule = DEFAULT_RULES.slice(0);
fixedCodeRule.unshift(CodeBlockRule());
let slateHtmlSerializer = new SlateHtmlSerializer({rules: fixedCodeRule});
export default slateHtmlSerializer;
