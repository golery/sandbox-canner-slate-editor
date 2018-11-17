// @flow
import * as React from "react";

// Load all supported language
import Prism from 'prismjs';
import PrismJava from 'prismjs/components/prism-java';
import PrismJson from 'prismjs/components/prism-json';
import PrismTsx from 'prismjs/components/prism-tsx';
import PrismJsx from 'prismjs/components/prism-jsx';
//import PrismPlsql from 'prismjs/components/prism-plsql';
import PrismScss from 'prismjs/components/prism-scss';
import PrismBash from 'prismjs/components/prism-bash';
import PrismCsharp from 'prismjs/components/prism-csharp';

import type {IconProps} from "shared/src/types";
import {Form} from "antd";
import ToolbarIcon from "@canner/slate-icon-shared";
import PluginEditCode from "slate-edit-code";
import {CODE, CODE_LINE, PARAGRAPH} from "@canner/slate-constant/lib/blocks";
import {
    codeBlockNode,
    codeLineNode
} from "./codeBlockNode";
import {languages} from "prismjs/components.json";

import 'antd/lib/select/style/index.css';

export const CodeBlockPlugin = opt => {
    const options = Object.assign(
        {
            codeType: CODE,
            codeLineType: CODE_LINE,
            getSyntax: node => node.data.get("syntax")
        },
        opt
    );

    return {
        renderNode: props => {
            if (props.node.type === options.codeType) {
                return codeBlockNode(options)(props);
            } else if (props.node.type === options.codeLineType) {
                return codeLineNode()(props);
            }
        }
    };
};
const FormItem = Form.Item;

type State = {
    showModal: boolean
};

type Props = IconProps & {
    form: any
};

@Form.create()
export default (class CodeBlock extends React.Component<Props, State> {
    typeName: string;

    constructor(props: Props) {
        super(props);

        this.state = {
            showModal: false
        };
        this.typeName = this.props.type || CODE;
        this.codePlugin = PluginEditCode({
            onlyIn: node => node.type === this.typeName
        });
    }

    static defaultProps = {
        syntaxKey: "syntax"
    };

    onClick = (e: Event) => {
        console.log(languages);
        const { onChange, change, syntaxKey } = this.props;
        let haveCodeBlock = this.codePlugin.utils.isInCodeBlock(change.value);
        e.preventDefault();

        if (haveCodeBlock) {
            onChange(this.codePlugin.changes.unwrapCodeBlock(change, PARAGRAPH));
        } else {
            let lang = "java";
            let newChange = change.setBlocks({
                data: { [syntaxKey]: lang }
            });

            onChange(this.codePlugin.changes.wrapCodeBlock(newChange));
        }
    };

    render() {
        const {change, icon, ...rest} = this.props;
        const onClick = e => this.onClick(e);

        return (
            <div style={{display: "inline-block"}}>
                <ToolbarIcon
                    type={this.typeName}
                    icon={icon || "CodeBlock"}
                    onClick={onClick}
                    isActive={this.codePlugin.utils.isInCodeBlock(change.value)}
                    {...rest}
                />
            </div>
        );
    }
});
