const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/feed', (req,res)=>{
  res.json([
    {
      title: "Russia oil disruption",
      content: "War affecting oil supply routes",
      signal: "BUY OIL"
    },
    {
      title: "Crypto regulation EU",
      content: "New crypto laws incoming",
      signal: "VOLATILITY"
    }
  ]);
});

app.listen(3000, ()=>console.log("Server running"));
