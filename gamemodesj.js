

let Ranked = "League of Legends' Ranked mode stands as the epitome of competitive gaming within the Summoner's Rift. This challenging environment pits summoners against each other in a quest for mastery and recognition. Ranging from the entry-level Iron tier to the prestigious Challenger tier, each game demands strategic prowess, effective communication, and individual skill. Draft pick formats, champion bans, and the tier-based reward system contribute to the intense and rewarding nature of Ranked mode. It's here that players embark on a journey of self-improvement, facing off against opponents of similar skill levels while climbing the ranked ladder to prove themselves as elite summoners in the League of Legends community.";

let Rankedcim = "Ranked"

let Normal = "Normal games offer a respite from the intense competition of Ranked mode, providing a more laid-back and experimentation-friendly space on the Rift. Summoners can engage in both Blind Pick and Draft Pick formats, choosing between the rapid-fire selection of champions or the strategic turn-based approach. Here, the emphasis is on fun, exploration, and the freedom to try out different champions, builds, and strategies without the pressure of competitive rankings. Normal games serve as a social hub where players can enjoy the game at their own pace, fostering a sense of camaraderie and shared enjoyment among summoners.";

let Normalcim = "Normal"

let Twisted = "Twisted Treeline offers a condensed and dynamic alternative to Summoner's Rift, featuring a 3v3 format that thrives on intense skirmishes and strategic map control. With two lanes and a jungle, teams must navigate the smaller map, making each encounter pivotal to success. The addition of altars introduces a unique layer of strategy, encouraging teams to secure advantages that can turn the tide of battle. For those seeking a more intimate and fast-paced experience, Twisted Treeline provides a distinctive gameplay environment that challenges summoners to showcase their skills in a unique setting.";

let Twistedcim = "Twisted Treeline"

let URF = "URF, or Ultra Rapid Fire, is a temporary game mode that transforms the traditional League of Legends experience into a whirlwind of chaos and unbridled action. Renowned for its removal of cooldowns and mana costs, URF allows players to unleash their champion's abilities at an unprecedented pace, creating an environment filled with continuous and exhilarating skirmishes. Beyond its intense gameplay, URF is a celebration of humor, unpredictability, and the sheer joy of playing without constraints. It stands as a testament to League of Legends' commitment to providing diverse and entertaining experiences for its player community.";

let urfcim = "URF (Ultra Rapid Fire)"

let Rapid = "ARAM, set on the Howling Abyss, embraces spontaneity and unpredictability, offering a unique and fast-paced 5v5 experience. The allure of random champion selection introduces an element of surprise, challenging players to adapt to varying playstyles on a single-lane map. ARAM's simplicity, accessibility, and emphasis on team fights make it an ideal choice for summoners looking for quick, engaging, and often humorous encounters. By discarding traditional laning phases and focusing on unrelenting action, ARAM captures the essence of League of Legends in a distilled and entertaining form, attracting players of all skill levels.";

rapidcim = "Aram"

function displayRanked() {
    let rankedcont = document.getElementById("resultgamemode");
    rankedcont.style.opacity = 0; 

    setTimeout(() => {
        rankedcont.innerHTML = Ranked;
        rankedcont.style.opacity = 1; 
    }, 500);
    
    let rankedtitle = document.getElementById("resulttitle")
    rankedtitle.style.opacity = 0; 

    setTimeout(() => {
        rankedtitle.innerHTML = Rankedcim;
        rankedtitle.style.opacity = 1; 
    }, 500); 
}


function displaynormal() {
    let normalcont = document.getElementById("resultgamemode");
    normalcont.style.opacity = 0; 
    

    setTimeout(() => {
        normalcont.innerHTML = Normal;
        normalcont.style.opacity = 1; 
    }, 500); 

    let normaltitle = document.getElementById("resulttitle")
    normaltitle.style.opacity = 0; 

    setTimeout(() => {
        normaltitle.innerHTML = Normalcim;
        normaltitle.style.opacity = 1; 
    }, 500); 
}

function displaytwisted() {
    let twistedcont = document.getElementById("resultgamemode");
    twistedcont.style.opacity = 0; 

    setTimeout(() => {
        twistedcont.innerHTML = Twisted;
        twistedcont.style.opacity = 1; 
    }, 500); 

    let twistedtitle = document.getElementById("resulttitle")
    twistedtitle.style.opacity = 0; 

    setTimeout(() => {
        twistedtitle.innerHTML = Twistedcim;
        twistedtitle.style.opacity = 1; 
    }, 500); 
}

function displayurf() {
    let urfcont = document.getElementById("resultgamemode");
    urfcont.style.opacity = 0; 

    setTimeout(() => {
        urfcont.innerHTML = URF;
        urfcont.style.opacity = 1; 
    }, 500); 

    let urftitle = document.getElementById("resulttitle")
    urftitle.style.opacity = 0; 

    setTimeout(() => {
        urftitle.innerHTML = urfcim;
        urftitle.style.opacity = 1; 
    }, 500); 
}

function displayrapid() {
    let rapidcont = document.getElementById("resultgamemode");
    rapidcont.style.opacity = 0; 

    setTimeout(() => {
        rapidcont.innerHTML = Rapid;
        rapidcont.style.opacity = 1; 
    }, 500); 

    let rapidtitle = document.getElementById("resulttitle")
    rapidtitle.style.opacity = 0; 

    setTimeout(() => {
        rapidtitle.innerHTML = rapidcim;
        rapidtitle.style.opacity = 1; 
    }, 500); 
}




        




let Top = "The Top Lane in League of Legends serves as a solitary battleground where champions face off in a one-versus-one duel. Positioned at the northernmost point of Summoner's Rift, the Top Lane demands resilience, strategic decision-making, and an understanding of wave management. Champions in this lane often possess the durability to withstand extended trades, and the Top Lane is notorious for its isolated nature, where split-pushing and individual skill can significantly impact the course of the game. From the stoic tank to the relentless duelist, the Top Lane caters to a diverse array of champion archetypes, making it a haven for those who thrive on self-sufficiency and outplaying their opponents.";

let Topcim = "Top lane"

let Jungle = "The Jungle is the mysterious and ever-changing realm that lies between the three lanes of Summoner's Rift. Inhabited by neutral monsters, the Jungle is the domain of the jungler, a versatile role crucial to the team's success. Junglers navigate this intricate terrain, utilizing their strategic prowess to secure buffs, neutral objectives, and assist their teammates in various lanes. This role requires adaptability, map awareness, and effective decision-making, as the jungler becomes the unseen force shaping the flow of the game. From aggressive invaders to supportive facilitators, junglers bring a dynamic element to League of Legends, influencing the ebb and flow of battle beyond the traditional lanes.";

let Junglecim = "Jungle"

let Mid = "The Mid Lane, situated at the heart of Summoner's Rift, is the stage for intense magical clashes and strategic prowess. Traditionally home to mages and assassins, the Mid Lane champions wield powerful abilities, aiming to control the battlefield and secure pivotal objectives. Mid Laners are often the primary source of burst damage and playmakers, influencing team fights and skirmishes with their impactful spells. This lane is a cauldron of skill expression, where precise positioning, map awareness, and timely roams can turn the tide of battle. From long-range artillery to elusive assassins, the Mid Lane showcases the diverse array of champions capable of making a significant impact on the course of a match.";

let Midcim = "Mid lane"

let ADC = "The Attack Damage Carry (ADC) is the backbone of the team, situated in the Bottom Lane alongside a support. ADCs are ranged physical damage dealers, specializing in sustained damage output throughout the game. Their primary role is to farm gold and experience to become powerful in the late game, carrying the team to victory through consistent damage in team fights. The ADC position demands precision, positioning, and excellent mechanical skill, as they navigate the delicate balance between dealing damage and staying alive. From the critical strikes of marksmen to the relentless barrage of projectiles, the ADC role epitomizes the importance of consistent damage in League of Legends.";

let ADCcim = "ADC"

let Support = "The Support role, often the unsung hero of the team, is dedicated to providing assistance, protection, and strategic utility to their allies. Positioned alongside the ADC in the Bottom Lane, supports facilitate their carry's success through crowd control, healing, and vision control. Whether engaging in aggressive plays during the laning phase or orchestrating game-changing crowd control in team fights, supports are the architects of opportunities and the guardians of their team's success. The role demands adaptability, as supports can range from tanky initiators to enchanters focusing on bolstering their teammates. The Support role exemplifies the importance of teamwork, selflessness, and strategic foresight in the intricate tapestry of League of Legends.";

Supportcim = "Support"

function displaytop() {
    let rankedcont = document.getElementById("resultlane");
    rankedcont.style.opacity = 0; 

    setTimeout(() => {
        rankedcont.innerHTML = Top;
        rankedcont.style.opacity = 1; 
    }, 500);
    
    let rankedtitle = document.getElementById("resultlanetitle")
    rankedtitle.style.opacity = 0; 

    setTimeout(() => {
        rankedtitle.innerHTML = Topcim;
        rankedtitle.style.opacity = 1; 
    }, 500); 
}


function displayjg() {
    let normalcont = document.getElementById("resultlane");
    normalcont.style.opacity = 0; 
    

    setTimeout(() => {
        normalcont.innerHTML = Jungle;
        normalcont.style.opacity = 1; 
    }, 500); 

    let normaltitle = document.getElementById("resultlanetitle")
    normaltitle.style.opacity = 0; 

    setTimeout(() => {
        normaltitle.innerHTML = Junglecim;
        normaltitle.style.opacity = 1; 
    }, 500); 
}

function displaymid() {
    let twistedcont = document.getElementById("resultlane");
    twistedcont.style.opacity = 0; 

    setTimeout(() => {
        twistedcont.innerHTML = Mid;
        twistedcont.style.opacity = 1; 
    }, 500); 

    let twistedtitle = document.getElementById("resultlanetitle")
    twistedtitle.style.opacity = 0; 

    setTimeout(() => {
        twistedtitle.innerHTML = Midcim;
        twistedtitle.style.opacity = 1; 
    }, 500); 
}

function displayadc() {
    let urfcont = document.getElementById("resultlane");
    urfcont.style.opacity = 0; 

    setTimeout(() => {
        urfcont.innerHTML = ADC;
        urfcont.style.opacity = 1; 
    }, 500); 

    let urftitle = document.getElementById("resultlanetitle")
    urftitle.style.opacity = 0; 

    setTimeout(() => {
        urftitle.innerHTML = ADCcim;
        urftitle.style.opacity = 1; 
    }, 500); 
}

function displaysup() {
    let rapidcont = document.getElementById("resultlane");
    rapidcont.style.opacity = 0; 

    setTimeout(() => {
        rapidcont.innerHTML = Support;
        rapidcont.style.opacity = 1; 
    }, 500); 

    let rapidtitle = document.getElementById("resultlanetitle")
    rapidtitle.style.opacity = 0; 

    setTimeout(() => {
        rapidtitle.innerHTML = Supportcim;
        rapidtitle.style.opacity = 1; 
    }, 500); 
}




