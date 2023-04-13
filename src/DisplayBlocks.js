import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const DisplayBlocks = () => {
  const [blocks, setBlocks] = useState({});

  const fetchBlocks = async () => {
    const response = await axios.get('/block');
    setBlocks(response.data);
  }

  useEffect(() => {
    fetchBlocks();
  }, []);

    const renderedBlocks = Object.values(blocks).map((block) => {
    return (
        <div>
          <header>
            <div>
              <h2>Blocks</h2>
              <hr/>
                  <div key={block.id}>
                    This Block : {block.block}
                    <br/>
                    Next Block : {block.nextBlock}
                    <hr/>
                  </div>
            </div>
          </header>
        </div>
    );
  });
  return (
    <div>
      {renderedBlocks}
    </div>
  );
}
export default DisplayBlocks;
