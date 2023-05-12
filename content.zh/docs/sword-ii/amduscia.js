var table = [
    {n01:"../amduscia/seal_Amriel.svg", n02:"流浪的", n03:"希德", n04:"Hidriel" , n05:"Samiel", n06:"3"},
    {n01:"../amduscia/seal_Betasiel.svg", n02:"流浪的", n03:"希德", n04:"Hidriel" , n05:"Lusiel", n06:"3"},
    {n01:"../amduscia/seal_Chamor.svg", n02:"迷失空中的", n03:"索特", n04:"Soteriel" , n05:"Amriel", n06:"7"},
    {n01:"../amduscia/seal_Curmis.svg", n02:"流浪的", n03:"蒙娜", n04:"Menadiel" , n05:"Chamor", n06:"8"},
    {n01:"../amduscia/seal_Lusiel.svg", n02:"流浪的", n03:"费", n04:"Vriel" , n05:"Curmis", n06:"10"},
    {n01:"../amduscia/seal_Sadar.svg", n02:"北方国王", n03:"瑞", n04:"Rasiel" , n05:"Sadar", n06:"13"},
    {n01:"../amduscia/seal_Samiel.svg", n02:"北方国王", n03:"瑞", n04:"Rasiel" , n05:"Betasiel", n06:"13"},
];
var table = new Tabulator("#tabulator_amduscia", {
    headerVisible:false,
    data:table,
    dataTree:true,
    dataTreeFilter:false,
    dataTreeSort:false,
    dataTreeStartExpanded:false,
    columns:[
        {title:"", field:"n01", formatter:"image", width:100},
        {title:"", field:"n02", width:120},
        {title:"", field:"n03", width:70},
        {title:"", field:"n04", width:110},
        // {title:"", field:"n05", width:85},
        // {title:"", field:"n06", width:60},
    ],
});