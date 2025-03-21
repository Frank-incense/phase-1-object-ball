function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            player: {
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            }
        }, 
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            player: {
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            }
        },
    }
}
let game = gameObject();
function numpointScored(name){
    for (let obj in game){
        let team = game[obj]
        if (typeof team === typeof game) {
            // console.log(team)
            for (let teamkey in team) {
                // console.log(teamkey)
                let data = team[teamkey];
                if (!Array.isArray(data)) {
                    // console.log(data)  
                    for (let players in data) {
                        // console.log(players)
                        let player = data[players]
                        if (players === name) {
                            return player.points;
                        }
                    }
                }
            }
        }
    }
}

function shoeSize(name){
    for (let obj in game){
        let team = game[obj]
        if (typeof team === typeof game) {
            // console.log(team)
            for (let teamkey in team) {
                // console.log(teamkey)
                let data = team[teamkey];
                if (!Array.isArray(data)) {
                    // console.log(data)  
                    for (let players in data) {
                        // console.log(players)
                        let player = data[players]
                        if (players === name) {
                            return player.shoe;
                        }
                    }
                }
            }
        }
    }
}

function teamcolors(team) {
    for (let obj in game){
        // console.log(obj);
        let teams = game[obj];
        for (let obj in teams) {
            // console.log(obj)
            if (team === teams[obj]) {
                return teams.colors;
            }
        }
    }
}

function teamNames(){
    let t = []
    for (let obj in game) {
        // console.log(obj)
        let teams = game[obj]
        for (let obj in teams){
            if (obj === "teamName"){
                // console.log(teams[obj])
                t.push(teams[obj]);
            }
        }
    }
    return t;
}

function playerNumbers(team){
    const jerseyNumbers = [];
    for (let obj in game){
        let teams = game[obj]
        for (let keys in teams){
            if (team === teams[keys]){
                let players = teams.player;
                for (let player in players) {
                    jerseyNumbers.push(players[player].number)
                }
            }
        }
        
    }
    return jerseyNumbers
}


function playerStats(name){
    for (let obj in game){
        let team = game[obj]
        if (typeof team === typeof game) {
            for (let teamkey in team) {
                let data = team[teamkey];
                if (!Array.isArray(data) && typeof data !== 'string') {  
                    for (let players in data) {
                        let player = data[players]
                        if (players === name) {
                            return player;
                        }
                    }
                }
            }
        }
    }
}

console.log(playerStats('Alan Anderson'))
// console.log(teamNames())
// console.log(shoeSize("Alan Anderson"));