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

urls={
    'Delhi Capitals' : 'https://wcstatic.abplive.in/en/prod/wp-content/uploads/2018/12/7oro6ldbCp.JPG',
    'Punjab Kings' : 'https://www.insidesport.in/wp-content/uploads/2021/02/2021-02-17-5.jpg',
    'Kolkata Knight Riders' :'https://cdn.shopify.com/s/files/1/2658/5942/files/KKR-LOGO-WITH-BACK.jpg?height=628&pad_color=3b215d&v=1583755340&width=1200',
    'Mumbai Indians' : 'https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png',
    'Rajasthan Royals' : 'https://kheltalk.com/wp-content/uploads/2020/03/rr1.jpg',
    'Royal Challengers Bangalore' :  'https://pixlok.com/wp-content/uploads/2021/01/RCB_-logo_with_Satin_Flag.jpg',
    'Sunrisers Hyderabad' : 'https://static.toiimg.com/thumb/msid-72902421,width-1200,height-900,resizemode-4/.jpg'
}


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
    // this.alert(team)
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

    // alert(batTeamName+bowlTeamName);
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