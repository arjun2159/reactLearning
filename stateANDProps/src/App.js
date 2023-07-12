import React, { useState, useEffect } from "react";
import axios from "axios";

import FileList from "./FileList";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://data.binance.com/api/v3/ticker/24hr";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <FileList post={post} />
      )}
    </div>
  );
}

export default App;
