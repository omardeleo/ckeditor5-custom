import React from "react";
import ReactDOM from "react-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "./ckeditor.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { target: true };
        this.sample = this.sample.bind(this);
    }

    sample() {
        this.setState({ target: !this.state.target });
        console.log(this.state);
    }

    render() {
        return (
            <div className="App" onClick={this.sample}>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={editor => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={editor => {
                        console.log("Focus.", editor);
                    }}
                />
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
