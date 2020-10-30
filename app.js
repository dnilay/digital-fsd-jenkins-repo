const express=require('express');
const app=express();
app.use((req, res) => {
    res.send("hello world");
});
app.listen(3000,(err)=>{

    if ((!err))
    {
        console.log(' node server started successfully');
    }
    else
    {
        // console log
        console.log('error connecting sever',err);
    }
});
