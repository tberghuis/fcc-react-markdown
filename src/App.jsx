import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center"><h1>Markdown Previewer</h1></div>
                <br/>
                <div className="row">
                    <textarea className="col"
                        rows="22"
                        value={this.props.appState.rawInput}
                        onChange={this.update}></textarea>
                    <div
                        dangerouslySetInnerHTML={{ __html: this.props.appState.markedOutput }}
                        className="col" />
                </div>
            </div>
        );
    }

    update = (event) => {
        this.props.appState.setRawInput(event.target.value);
    }
};

export default App;
