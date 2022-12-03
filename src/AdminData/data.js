// sidebar
import {UilEstate,
UilClipboardAlt,
UilUsersAlt,
UilUsdSquare,

UilChat,UilSignOutAlt,}from "@iconscout/react-unicons"
export const SidebarData=[

    {
        icon:UilEstate,
        heading:"Dashboard",
    },{
        icon:UilUsersAlt,
        heading:"Users",
    },
    {
        icon:UilChat,
        heading:"Posts",
    },
    {
        icon:UilEstate,
        heading:"Analytics",
    },
    
];
export const cardsData=[{
    title:"Users",
    color:{
        backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",

    },
    barValue:705555,
    value:"25.970",
    png:UilUsdSquare,
    series:[{
        name:"Users",
        data:[31,40,28,51,42,109,100]
    }]
},

{
title:"posts",
    color:{
        backGround:"linear-gradient(to right top, #8dd9e3, #9bdfd8, #afe4cd, #c7e7c6, #dee9c4)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",


    },
    barValue:60,
    value:"4.270",
    png:UilClipboardAlt,
    series:[{
        name:"Posts",
        data:[10,25,15,30,12,15,20]
    }]
},

{  title:"Reported User",
    color:{
        backGround:"linear-gradient(to right top, #dc8356, #e29644, #dcae32, #cbc727, #ade034)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",

    },
    barValue:70,
    value:"25.970",
    png:UilUsdSquare,
    series:[{
        name:"Reported User",
        data:[31,40,28,51,42,109,100]
    }]
},


]