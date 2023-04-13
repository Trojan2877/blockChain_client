import React,{Component} from 'react';
import  CreateBlock  from './CreateBlock';
import DisplayBlocks from './DisplayBlocks';

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h1>Trojan's BlockChain</h1>
              <br></br>
                <DisplayBlocks/>
                <br></br>
              <CreateBlock />
            </div>
          </header>
        </div>
    );
  }
}
export default App;
