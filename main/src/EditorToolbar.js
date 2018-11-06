import * as React from "react";
import { Editor } from "slate-react";
import type { Value, Change } from "slate";
import styled from "styled-components";
import Toolbar from "./menuToolbar";
import toolbar from "slate-toolbar";
import sidebar from "slate-sidebar";
import { MarkdownPlugin } from "slate-md-editor";
import { BLOCKS } from "@canner/slate-constant";
import copyPastePlugin from "@canner/slate-paste-html-plugin";

import Blockquote, { BlockquotePlugin } from "@canner/slate-icon-blockquote";
import Bold, { BoldPlugin } from "@canner/slate-icon-bold";
import Code, { CodePlugin } from "@canner/slate-icon-code";
import Clean from "@canner/slate-icon-clean";
import { CodeBlockPlugin } from "@canner/slate-icon-codeblock";
import { TablePlugin } from "@canner/slate-icon-table";
import { FontBgColorPlugin } from "@canner/slate-icon-fontbgcolor";
import { FontColorPlugin } from "@canner/slate-icon-fontcolor";
import {
    Header1,
    Header2,
    HeaderOnePlugin,
    HeaderTwoPlugin,
    HeaderThreePlugin
} from "@canner/slate-icon-header";
import Hr, { HrPlugin } from "@canner/slate-icon-hr";
import { ImagePlugin } from "@canner/slate-icon-image";
import Italic, { ItalicPlugin } from "@canner/slate-icon-italic";
import { LinkPlugin } from "@canner/slate-icon-link";
import { OlList, UlList, ListPlugin } from "@canner/slate-icon-list";
import StrikeThrough, {
    StrikeThroughPlugin
} from "@canner/slate-icon-strikethrough";
import Underline, { UnderlinePlugin } from "@canner/slate-icon-underline";
import { VideoPlugin } from "@canner/slate-icon-video";
import { ParagraphPlugin } from "@canner/slate-icon-shared";

import EditList from "slate-edit-list";
import EditBlockquote from "slate-edit-blockquote";

import EditPrism from "slate-prism";
import EditCode from "slate-edit-code";
import TrailingBlock from "slate-trailing-block";
import SoftBreak from "./slate-soft-break";
import "prismjs/themes/prism.css";

// default value
import { DEFAULT as DEFAULTLIST } from "@canner/slate-helper-block-list";
import { DEFAULT as DEFAULTBLOCKQUOTE } from "@canner/slate-helper-block-quote";

import "github-markdown-css";

export default class EditorToolbar extends React.Component {
    render() {
        const {
            value,
            onChange,
            serviceConfig,
            galleryConfig,
            menuToolbarOption,
            readOnly,
            ...rest
        } = this.props;
        return <Toolbar
                serviceConfig={serviceConfig}
                galleryConfig={galleryConfig}
                menuToolbarOption={menuToolbarOption}
                value={value}
                onChange={onChange}
                goFull={this.goFull}
            />;
    }
}