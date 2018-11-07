import React from "react";
import Toolbar from "./menuToolbar";

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