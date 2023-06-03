import express from 'express';

const app = express();

app.get('/', (req,res) => {
    return res.json({hello: 'world'});
})

app.listen(3000, () => console.log('Server is running'));
// process.exit(1);