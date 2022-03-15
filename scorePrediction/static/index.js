bat_teams = [
    'Chennai Super Kings' ,
    'Punjab Kings',
    'Kolkata Knight Riders' ,
    'Mumbai Indians' ,
    'Rajasthan Royals',
    'Royal Challengers Bangalore' ,
    'Sunrisers Hyderabad' 
];
teams = [
    'Chennai Super Kings' ,
    'Delhi Capitals',
    'Punjab Kings',
    'Kolkata Knight Riders' ,
    'Mumbai Indians' ,
    'Rajasthan Royals',
    'Royal Challengers Bangalore' ,
    'Sunrisers Hyderabad' 
];

bowl_teams = [
    'Delhi Capitals',
    'Punjab Kings',
    'Kolkata Knight Riders' ,
    'Mumbai Indians' ,
    'Rajasthan Royals',
    'Royal Challengers Bangalore' ,
    'Sunrisers Hyderabad' 
];

team_names = {
    'Chennai Super Kings' : 'CSK',
    'Delhi Capitals' : 'DC',
    'Punjab Kings' : 'PK',
    'Kolkata Knight Riders' :'KKR',
    'Mumbai Indians' : "MI",
    'Rajasthan Royals' : 'RR',
    'Royal Challengers Bangalore' :  'RCB',
    'Sunrisers Hyderabad' : 'SRH'
}

path =  "http://127.0.0.1:8000/static/images/";


// onload is not there in select so we use this method
window.addEventListener("load",function(){
    var bat_team = document.getElementById("bat_team");
    for(var i = 0; i < bat_teams.length; i++) {
        var opt = bat_teams[i];
        var el = document.createElement("option");
        el.textContent = opt;
        bat_team.appendChild(el);
    }
    var team = bat_team.options[bat_team.selectedIndex].innerHTML;
    var bowl_team = document.getElementById("bowl_team");
    for(var i = 0; i < bowl_teams.length; i++) {
        var opt = bowl_teams[i];
        var el = document.createElement("option");
        el.textContent = opt;
        bowl_team.appendChild(el);
    }
},false);


function changes(){
    var bat_team = document.getElementById("bat_team");
    var bowl_team = document.getElementById("bowl_team");
    var batTeamName = document.getElementById("bat_team").value;
    var bowlTeamName = document.getElementById("bowl_team").value;

    var batImg = document.getElementById("image-left");
    batImg.src = path + team_names[batTeamName]+".jpg";

    var bowlImg = document.getElementById("image-right");
    bowlImg.src = path + team_names[bowlTeamName]+".jpg";

    $('#bat_team').empty();
    var f1 = document.createElement("option");
    f1.textContent=batTeamName;
    bat_team.appendChild(f1);
    for(var i = 0; i < teams.length; i++) {
        if(teams[i]!=bowlTeamName  && teams[i]!=batTeamName){
            console.log(bowlTeamName);
            var opt = teams[i];
            var el = document.createElement("option");
            el.textContent = opt;
            bat_team.appendChild(el);
        }
    }

    $("#bowl_team").empty();
    var first = document.createElement("option");
    first.textContent=bowlTeamName;
    bowl_team.appendChild(first);
    for(var i = 0; i < teams.length; i++) {
        if(teams[i]!=batTeamName && teams[i]!=bowlTeamName ){
            var opt = teams[i];
            var el = document.createElement("option");
            el.textContent = opt;
            bowl_team.appendChild(el);
        }
    }
}
