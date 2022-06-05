const loadHomePage = (...sections) => {

    let container = document.querySelector("body");

    let header = document.createElement('div');
    header.setAttribute("id", "header")
    for (let i=0; i<3; i++) {
        let div = document.createElement('div');
        div.innerHTML += sections[i];
        div.setAttribute('id', 'header' + i);
        header.appendChild(div);
    }

    let body = document.createElement('div');
    body.setAttribute("id", "innerBody")
    for (let i=3; i<6; i++) {
        let div = document.createElement('div');
        div.innerHTML += sections[i];
        div.style.width = "65%";
        div.style.padding = "25px"
        div.style.background = "rgba(26,23,23,0.44)";
        div.style.backdropFilter = "blur(10px)";
        div.style.borderRadius = "4px";
        body.appendChild(div);
    }

    let footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerHTML += "© The Odin Project"

    container.append(header, body, footer);

    header.style.padding = "10px"
    header.style.background = "rgba(0,0,0,0.66)";
    header.style.backdropFilter = "blur(10px)";

    footer.style.backgroundColor = "black";

    document.getElementById('header0').addEventListener('click', () => {clearPage(), home();});
    document.getElementById('header1').addEventListener('click', () => {clearPage(), menu();});
    document.getElementById('header2').addEventListener('click', () => {clearPage(), contact();});
    
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />'
};


const clearPage = () => {
    document.querySelector('body').innerHTML='';
};

const home = function() {
    let sections = [
        "Home", "Menu", "Contact", "Do we make money or does money make us? Chezwich. North America should be called Russia since people are always moving so fast. Gralitica. If you were a member of the Bloods and became paralyzed do you then become a member of the Crips?. I'm still upset that Tie Domi didn't name his child Tyson. For the name of an act as serious as killing someone, assassination literally translates to buttbuttination.", "Thank you for using my words in your work. Smiling could easily be misinterpreted for showing your teeth to someone because they said something that made you happy. I'm the only person in the world with my name. To Catch A Predator would have been a great name for a Steve Irwin show. Mintslavicia. If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it.", "This is a true fact: I never had a fear of heights until I fell off a roof. I have a moral code, but I haven't figured out how to read it yet. I started a sensory deprivation chamber business - it involves really dark curtains, ear plugs, and a sleeping mask. I don't need a big house, just a two-floor condo - you could say I have lofty expectations. I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness."
      ];
    loadHomePage(...sections);

};

const menu = () => {
    let sections = ["Home", "Menu", "Contact", "", "", ""];
    loadHomePage(...sections);
    
    let menuItem1 = document.getElementById('innerBody').children[0];
    let menuItem2 = document.getElementById('innerBody').children[1];
    let menuItem3 = document.getElementById('innerBody').children[2];

    menuItem1.setAttribute("id", "drinks");
    menuItem2.setAttribute("id", "foods");
    menuItem3.setAttribute("id", "desserts");

    function createDiv(tab) {
        let icon = document.createElement('span');
        let div2 = document.createElement('div');

        tab.append(icon, div2);
    };

    createDiv(menuItem1);
    createDiv(menuItem2);
    createDiv(menuItem3);

    menuItem1.children[1].innerHTML += "Irish Car Bomb, Moscow Mule, Sex on the Beach, El Presidente";
    menuItem2.children[1].innerHTML += "Fatburger, Starbucks, El Pollo Loco, Beef Stew";
    menuItem3.children[1].innerHTML += "Baked Alaska, Sundae, Sachertorte, Thapthim krop";

    menuItem1.children[0].innerHTML += "local_bar"
    menuItem2.children[0].innerHTML += "restaurant"
    menuItem3.children[0].innerHTML += "icecream"

    menuItem1.children[0].classList.add("material-symbols-outlined")
    menuItem2.children[0].classList.add("material-symbols-outlined")
    menuItem3.children[0].classList.add("material-symbols-outlined")

};

const contact = () => {
    let sections = ["Home", "Menu", "Contact", "", "", ""];

    let container = document.querySelector("body");

    let header = document.createElement('div');
    header.setAttribute("id", "header")
    for (let i=0; i<3; i++) {
        let div = document.createElement('div');
        div.innerHTML += sections[i];
        div.setAttribute('id', 'header' + i);
        header.appendChild(div);
    }

    let body = document.createElement('div');
    body.setAttribute("id", "innerBody")
        let div = document.createElement('div');
        div.innerHTML += '+36 1234567<br><br>7588 Indian Spring Road Northville, MI 48167<br><br>"When you wait for a server in a restaurant, does not that make you the waiter?"<br><i>Author Unknown</i>'
        div.style.width = "65%";
        div.style.padding = "25px"
        div.style.background = "rgba(26,23,23,0.44)";
        div.style.backdropFilter = "blur(10px)";
        div.style.borderRadius = "4px";
        body.appendChild(div);

    let footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerHTML += "© The Odin Project"

    container.append(header, body, footer);

    header.style.padding = "10px"
    header.style.background = "rgba(0,0,0,0.66)";
    header.style.backdropFilter = "blur(10px)";

    footer.style.backgroundColor = "black";

    document.getElementById('header0').addEventListener('click', () => {clearPage(), home();});
    document.getElementById('header1').addEventListener('click', () => {clearPage(), menu();});
    document.getElementById('header2').addEventListener('click', () => {clearPage(), contact();});
    
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />'

};


export { loadHomePage, home, menu, clearPage, contact };