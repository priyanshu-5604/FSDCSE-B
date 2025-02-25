const http=require('http');
const PORT=2527;
const server = http.createServer(async (req,res)=>{
    res.setHeader('Content-Type','text/html');
    const data = await fetch("https://fakestoreapi.com/products");
        const jdata = await data.json()
    console.log(jdata[0].category);
    const htmltemplate = `<html>
    <head><title>ONline CLothes</title>
    <style>
        #d1{
        background-color: beige;
        border: 2px solid red;
        }
    </style>
    </head>
    <body
    <div>
    ${
        jdata.map((ele)=>{
            return(
                `<div id="d1">
                    <div>${ele.id}</div>
                    <div><img src = ${ele.image} height=200px width=200px/></div>
                    <div>
                    ${ele.category}
                    ${ele.id}
                    <div>${ele.description}</div>
                    <div>Rs.${ele.price}</div>
                    </div>
                </div>`
            )
    })
    }
    </div>
    </body>
    </html>
    `

    res.end(htmltemplate);
})
server.listen(PORT,()=>{
    console.log("Server is running on:"+PORT);
})