import React, { Component } from 'react';

class SectionTitleLeft extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.children ?
                        this.props.children
                    :
                        <h4 className="title mb-4">{this.props.title}</h4>
                }
                <p className="text-muted"> {this.props.desc} </p>
                <ul className="list-unstyled feature-list text-muted" name="featurelines">
                    {
                        this.props.features.map((feature, key) =>
                            <li key={key}><i className={"mdi mdi-checkbox-marked-circle text-success " + this.props.class}></i>{feature.title}</li>
                        )
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default SectionTitleLeft;