// what's the first thing to do ? 
document.addEventListener('DOMContentLoaded',function (){
    getAnimals()
})

function getAnimals(){
    // document targetting 
    let divTitles = document.getElementById('div1');
    //GET request (\fetch call)
    // Response to data appropriately 
    generatelistofAnimals(data,divTitles)
}

function generatelistofAnimals(data,divTitles){
    // DOM create elements code to display animals names and also content when clicked
    generateContentOnClick(data)
}

function generateContentOnClick(data){
    //DOM create elements to showcase animal data , also create btn to vote 
    voteforanimal(elementcreatedtoshowcasevotes)
}

function voteforanimal(element){
    
}



