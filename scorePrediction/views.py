from django.shortcuts import HttpResponse,render
import pickle
import numpy as np
from django.contrib import messages

from cricket_App import settings


team_names = {
    'Chennai Super Kings' : 'CSK',
    'Delhi Capitals' : 'DC',
    'Kings XI Punjab' : 'KXIP',
    'Kolkata Knight Riders' :'KKR',
    'Mumbai Indians' : 'MI',
    'Rajasthan Royals' : 'RR',
    'Royal Challengers Bangalore' :  'RCB',
    'Sunrisers Hyderabad' : 'SRH'
}

def predict(request):
    if request.method == "POST":
        total = 0
        flag = True
        error = ""
        bat = request.POST.get('bat_team')
        bowl = request.POST.get('bowl_team')
        runs = request.POST.get('runs')
        wickets = request.POST.get('wickets')
        overs = request.POST.get('overs')
        runs_last_5 =  request.POST.get('runs_last_5')
        wickets_last_5 = request.POST.get('wickets_last_5')

        if int(wickets) == 10 :
            total = runs 
            flag = False          
        elif int(wickets) >10 :
            error += "Wickets fallen should be less than 10"
            return render(request,'prediction.html',{'error':error})

        elif float(overs) <= float(5.0) and float(overs) >= float(20.0) : 
            print(overs)
            error += "Overs should be between 5 to 20."
            return render(request,'prediction.html',{'error':error})

        elif int(runs_last_5) > int(runs) :
            print(runs)
            print(runs_last_5)
            error += "Runs in last 5 overs should not be more than total runs scored till " + overs + " overs."
            return render(request,'prediction.html',{'error':error})
        elif int(wickets_last_5) > int(wickets) :
            error += "Wickets fallen in last 5 overs can not be more than wickets fallen till " + overs + " overs."
            return render(request,'prediction.html',{'error':error})
        
        details = {
            "bat" : bat,
            "bowl" :bowl,
            "runs":runs,
            "wickets":wickets,
            "overs" :overs,
            "runs_last_5" :runs_last_5,
            "wickets_last_5" : wickets_last_5
        }
        if flag:
            total = scorePrediction(details)
        details['total'] = total
        print("total is",total)
        print(details)
        return render(request,'prediction.html',details)
    return render(request,"prediction.html")

def scorePrediction(details):
    bat= details['bat']
    bowl =details['bowl']
    name = ""
    name = team_names[bat]+"_"+team_names[bowl]
    print(name)
    print(team_names)
    temp_array = list()
    with open('C:\\Users\\Jainil\\Desktop\\Jainil\\SEM_VI\\SDP\\Django\\cricket_App\\scorePrediction\\static\\pickle\\'+name,'rb') as f:
        model = pickle.load(f)
        overs = float(details['overs'])
        runs = int(details['runs'])
        wickets = int(details['wickets'])
        runs_l5 = int(details['runs_last_5'])
        wicket_l5 = int(details['wickets_last_5'])
        temp_array += [runs,wickets,overs,runs_l5,wicket_l5]
        t = np.array([temp_array])
        print(t)
        total = int(model.predict(t)[0])
        return total
