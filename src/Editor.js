import * as React from "react";

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: props.markdown
        };
        this.markdownChanged = this.markdownChanged.bind(this);
    }

    markdownChanged(e) {
        this.setState({
            markdown: e.target.value
        });
        this.props.onMarkdownChange(e.target.value);
    }

    render() {
        return (<div id={"editorPanel"}>
            <textarea className="textarea"
                      id={"editor"}
                      placeholder={"Markdown"}
                      value={this.state.markdown}
                      onChange={this.markdownChanged}/>
        </div>);
    }
}