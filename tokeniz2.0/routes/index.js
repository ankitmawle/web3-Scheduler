
const vhost = require('vhost');
const express = require('express');
const { default: mongoose } = require('mongoose');
var url = require('url');
const {ensureAuthenticated} = require("../config/auth.js");
const User = require('../models/user.js');
const ChainData = require('../models/chainData.js');
const { NONAME } = require('dns');

//fetch available chains data
var chainData={}
ChainData.find({}).exec((err,data)=>{
    for(i of data){
        chainData[i.chainName]=i;
    }
    console.log("fetch chains");
    console.log(chainData);
})

const router  = express.Router();


router.get('/', (req, res, next) => {
const subdomain = req.vhost[0]
if(chainData[subdomain]){
    res.render('landing',{
        layout: 'layouts/landingLayout',
        chain : subdomain,
        tokenizAddress : chainData[subdomain].tokenizAddress,
        chainId : chainData[subdomain].chainId,
        chainCoin : chainData[subdomain].chainCoin,
        mintPrice : chainData[subdomain].mintPrice,
        chainLogo : chainData[subdomain].chainLogo,
        data : chainData,
    })
}
else{
    res.render('landing',{        
        layout: 'layouts/landingLayout',
        chain : 'default',
        tokenizAddress : 'default',
        chainId : 'default',           
        chainCoin : 'default',     
        mintPrice : 'default',
        chainLogo : 'default',
        data: chainData
     })
}
});

router.get('/app', (req, res, next) => {
    const subdomain = req.vhost[0]
   // res.render('app')
    console.log(subdomain);
    if(chainData[subdomain]){
        res.render('app',{
            chain : subdomain,
            tokenizAddress : chainData[subdomain].tokenizAddress,
            chainId : chainData[subdomain].chainId,
            chainCoin : chainData[subdomain].chainCoin,
            mintPrice : chainData[subdomain].mintPrice,
            chainLogo : chainData[subdomain].chainLogo,
            wallet : chainData[subdomain].wallet,
            data : chainData,
        })
    }
    else{
        console.log("asdkjab")
        res.render('selectChain',{        
            layout: 'layouts/landingLayout',
            chain : 'default',
            tokenizAddress : 'default',
            chainId : 'default',           
            chainCoin : 'default',     
            mintPrice : 'default',
            chainLogo : 'default',
            data: chainData
         })
    }
    });
    
    
router.get('/admin/refreshChainData',(req,res,next)=>{
    ChainData.find({}).exec((err,data)=>{
        chainData[data.chainName]=data;
    })
    res.redirect('/');
})


module.exports = router; 