import React from "react";

function FileList(props) {
  const post = props.post;
  return (
    <div className="App">
      <table>
        <tr>
          <th>symbol</th>
          <th>priceChange</th>
          <th>priceChangePercent</th>
        </tr>
        {post?.map((post) => {
          return (
            <tr>
              <td>{post.symbol}</td>
              <td>{post.priceChange}</td>
              <td>{post.priceChangePercent}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default FileList;
