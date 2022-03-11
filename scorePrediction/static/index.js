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

path =  "C:\\Users\\Jainil\\Desktop\\Jainil\\SEM_VI\\SDP\\Django\\cricket_App\\scorePrediction\\static"

urls={
    'Chennai Super Kings' : 'https://i.pinimg.com/originals/85/52/f8/8552f811e95b998d9505c43a9828c6d6.jpg',
    'Delhi Capitals' : 'https://wcstatic.abplive.in/en/prod/wp-content/uploads/2018/12/7oro6ldbCp.JPG',
    'Punjab Kings' : 'https://i.pinimg.com/originals/6a/84/bf/6a84bff88c24b8cc74dd6ad106d7b062.jpg',
    'Kolkata Knight Riders' :'https://cdn.shopify.com/s/files/1/2658/5942/files/KKR-LOGO-WITH-BACK.jpg?height=628&pad_color=3b215d&v=1583755340&width=1200',
    'Mumbai Indians' : 'https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png',
    'Rajasthan Royals' : 'https://kheltalk.com/wp-content/uploads/2020/03/rr1.jpg',
    'Royal Challengers Bangalore' :  'https://pixlok.com/wp-content/uploads/2021/01/RCB_-logo_with_Satin_Flag.jpg',
    'Sunrisers Hyderabad' : 'https://static.toiimg.com/thumb/msid-72902421,width-1200,height-900,resizemode-4/.jpg'
}


function removeTeam(bat_team){
    var name = bat_team.options[bat_team.selectedIndex].innerHTML;
    var bowl_team = document.getElementById("bowl_team");

    var img = document.getElementById('image-left')
    img.src = urls[name];

    $("#bowl_team").empty();
    for(var i = 0; i < teams.length; i++) {
        if(teams[i]==name){
            continue;
        }
        var opt = teams[i];
        var el = document.createElement("option");
        el.textContent = opt;
        bowl_team.appendChild(el);
    }


};

// onload is not there in select so we use this method
window.addEventListener("load",function(){
    var bat_team = document.getElementById("bat_team");
    for(var i = 0; i < teams.length; i++) {
        var opt = teams[i];
        var el = document.createElement("option");
        el.textContent = opt;
        bat_team.appendChild(el);
    }

    var team = bat_team.options[bat_team.selectedIndex].innerHTML;
    var bowl_team = document.getElementById("bowl_team");
    // this.alert(team)
    for(var i = 0; i < teams.length; i++) {
        if(teams[i] == team){
            continue;
        }
        var opt = teams[i];
        var el = document.createElement("option");
        el.textContent = opt;
        bowl_team.appendChild(el);
    }
},false);


function changebg(bowl_team){
    var name = bowl_team.options[bowl_team.selectedIndex].innerHTML;
    var bowl_team = document.getElementById("bowl_team");
    
    var img = document.getElementById('image-right')
    // alert(team_names[name] +" " +img + " " + urls[name]);
    img.src = urls[name];
    // img.src = "https://i.pinimg.com/originals/85/52/f8/8552f811e95b998d9505c43a9828c6d6.jpg";

}
