import React, { useState } from "react";
import axios from "axios";

const CreateBlock = () => {
  const [thisBlock, setThisBlock] = useState("");
  const [nextBlock, setNextBlock] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/block/create", {
      thisBlock : thisBlock,
      nextBlock : nextBlock
    });
    setThisBlock("");
    setNextBlock("");
  }

  console.log("Response" + onSubmit.data);

    return (
      <div>
        <header>
          <h1>Create Blocks Here</h1>
            <hr></hr>
            <div>
              <form onSubmit={ onSubmit }>
                <label>This block</label>
                <br></br>
                <br></br>
                <input
                  value = { thisBlock }
                  onChange={(e) => setThisBlock(e.target.value)}
                  class="form-control"/>
                  <br></br>
                  <br></br>
                  <label>Next block</label>
                <br></br>
                <br></br>
                <input
                  value = { nextBlock }
                  onChange={(e) => setNextBlock(e.target.value)}
                  class="form-control"/>
                  <br></br>
                  <br></br>
                  <button className="btn" style={{ background: 'white' }}>Submit</button>
              </form>
            </div>
            </header>
        </div>
    );
};

export default CreateBlock;
