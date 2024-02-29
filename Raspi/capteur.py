from machine import Pin, PWM
from hx711 import *
import network
import urequests
import time
import utime
import json

# À modifier pour chaque cellule de charge:
zero = 49000 # soustraire cette valeur pour ajuster le zéro
conversion = 380.0 # diviser par cette valeur pour convertir en grammes


wlan = network.WLAN(network.STA_IF) # met la raspi en mode client wifi
wlan.active(True) # active le mode client wifi

ssid = ''
password = ''
wlan.connect(ssid, password) # connecte la raspi au réseau
url= 'http://'

hx = hx711(Pin(14), Pin(15))  # clock broche GP14, data broche GP15
hx.set_power(hx711.power.pwr_up)
hx.set_gain(hx711.gain.gain_128) # valeurs possibles 128, 64 ou 32.

Oldvalue = 0

def Request(p):
    
    data = { 'poids' : p, 'ecole': 'ecole1', 'type' : 'dessert', 'password': 'XXX'}     #a modif ecole et type en fonction de la poubelle
    data = json.dumps(data)        #tranfo en json
    r = urequests.post(url, data)       #envoi requete post
    r.close()
    
    return None




while True:
    hx711.wait_settle(hx711.rate.rate_80)  # on attend qu'une mesure soit prête
    valeur =  hx.get_value() # on prend la mesure
    valeur = (valeur - zero) / conversion  # conversion en grammes   
    Request(valeur)
    # if round(Oldvalue) < round(valeur):
    #     Oldvalue = valeur
    #     Request(valeur)
        
    # if (round(Oldvalue) - '''XXXXX''') > valeur: #Si l'ancienne valeure est grandement suppérieure, probablement que la poubelle a été vidé, donc on fait tare
    #     Request(valeur)
        
    #     zero = hx.get_value
    #     Oldvalue = 0
    
    utime.sleep(60)

    # print('masse: ' , round(valeur), 'g')  # affichage