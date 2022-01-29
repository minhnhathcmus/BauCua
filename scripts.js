function getRandomInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function roll()
{
    const nodeList = document.querySelectorAll(".main-image .bau-cua-image");
    button = document.getElementById("roll-open-button");
    for (let i = 0; i < nodeList.length; i++)
    {
        nodeList[i].src = "xoc.gif";
    }
    window.setTimeout(() => { 
        for (let i = 0; i < nodeList.length; i++)
        {
            nodeList[i].src = "close.jpg";
        }
    }, 1100);
    button.setAttribute("onclick", "openFuck()");
    button.textContent = "Mở";
}

function openFuck()
{
    const nodeList = document.querySelectorAll(".main-image .bau-cua-image");
    for (let i = 0; i < nodeList.length; i++)
    {
        let number = getRandomInteger(1, 6);
        nodeList[i].src = `bau-cua-image/${number}.png`;
    }    
    button = document.getElementById("roll-open-button");
    button.setAttribute("onclick", "roll()");
    button.textContent = "Xóc";
}