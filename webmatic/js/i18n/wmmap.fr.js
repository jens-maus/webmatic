// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    // Geräte
    AKKU__LEVEL: "état de charge",
    AKKU__STATUS__0: "charge lente",
    AKKU__STATUS__1: "chargement de la batterie",
    AKKU__STATUS__2: "batterie fournie",
    AKKU__STATUS__3: "état de la batterie inconnu",
    ALARMACTUATOR__STATE__TRUE: "alarme",
    ALARMACTUATOR__STATE__FALSE: "OK",
    ALARMACTUATOR__ERROR_POWER__1: "tension secteur incorrecte",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "message de sabotage",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "batterie défectueuse",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Mettez-le temps",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__TRUE: "batterie faible",
    ALARMACTUATOR__LOWBAT__FALSE: "-",
    BLIND__STOP: "stop",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "la durée de l'aveugle",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "niveau de remplissage",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "la fréquence du capteur",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__TRUE: "on",
    CLIMATECONTROL_REGULATOR__STATE__FALSE: "off",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "confort",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "off",
    CLIMATECONTROL_REGULATOR__VACATION__0: "off",
    CLIMATECONTROL_REGULATOR__VACATION__1: "planifié",
    CLIMATECONTROL_REGULATOR__VACATION__2: "actif",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__TRUE: "contrôle inversée",
    CLIMATECONTROL_REGULATOR__SET_INVERT__FALSE: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "l'état de commutation",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "valeur de réglage reçu du panneau de commande",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "différentiel converti de consigne",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "ouverture de la soupape ensemble",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__TRUE: "Mode estival",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__FALSE: "mode été off",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "vanne fermée",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "vanne ouverte",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "automatiquement",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "manuellement",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Partie",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "température de confort",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "recul",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "fenêtre ouverte température",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Party / vacances fin",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "température",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "l'humidité actuelle",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "actionneur de soupape atone",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "trop ​​grande gamme de réglage",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "plage de réglage trop petit",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Erreur de connexion",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "batterie faible",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "soupape erreur de position",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "ouverture de la vanne",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "boost mode",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "baisser",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "manuel",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "confort",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "automatique",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "stimuler durée",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "état de la batterie",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Mode vacances Démarrer",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "température réglée",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "Start Time",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "l'heure de fin",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__FALSE: "fermé",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__TRUE: "ouvert",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "ouverture de la vanne",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "entraînement de la vanne bloquée",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "Drive Valve lâche",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "plage de réglage trop petit",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "batterie faible",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "position de l'actionneur de soupape compensée",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "température",
    CLIMATECONTROL_VENT_DRIVE__ALARM__TRUE: "entraînement de la vanne bloquée",
    CLIMATECONTROL_VENT_DRIVE__ALARM__FALSE: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_ANALOG_OUTPUT__STATE__TRUE: "on",
    DIGITAL_ANALOG_OUTPUT__STATE__FALSE: "off",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_INPUT__STATE__TRUE: "oui",
    DIGITAL_INPUT__STATE__FALSE: "non",
    DIGITAL_OUTPUT__STATE__TRUE: "on",
    DIGITAL_OUTPUT__STATE__FALSE: "off",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "changer d'état",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "Restaurer la dernière gradation",
    DIMMER__RAMP_TIME: "gradation",
    DIMMER__ON_TIME: "devoir",
    DIMMER__RAMP_STOP: "gradation arrêt",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "sortie courant",
    DIMMER__ENERGY_COUNTER: "la consommation d'énergie actuelle",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "erreur de chargement",
    DIMMER__ERROR_REDUCED__FALSE: "-",
    DIMMER__ERROR_REDUCED__TRUE: "puissance réduite",
    DIMMER__ERROR_OVERHEAT__FALSE: "-",
    DIMMER__ERROR_OVERHEAT__TRUE: "surchauffe",
    DIMMER__ERROR_OVERLOAD__FALSE: "-",
    DIMMER__ERROR_OVERLOAD__TRUE: "surcharge",
    DIMMER__LEVEL_REAL: "valeur réelle",
    DISPLAY__TEXT: "affichage",
    DISPLAY__BULB: "ampoule",
    DISPLAY__SWITCH: "switch",
    DISPLAY__WINDOW: "fenêtre",
    DISPLAY__DOOR: "porte",
    DISPLAY__BLIND: "aveugle",
    DISPLAY__SCENE: "scène",
    DISPLAY__PHONE: "téléphone",
    DISPLAY__BELL: "cloche",
    DISPLAY__CLOCK: "horloge",
    DISPLAY__ARROW_UP: "flèche vers le haut",
    DISPLAY__ARROW_DOWN: "flèche vers le bas",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "° C",
    DISPLAY__UNIT__4: "° F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "bip 1",
    DISPLAY__BEEP__2: "bip 2",
    DISPLAY__BEEP__3: "bip 3",
    DISPLAY__BACKLIGHT__0: "rétro-éclairage",
    DISPLAY__BACKLIGHT__1: "rétroéclairage",
    DISPLAY__BACKLIGHT__2: "rétro-éclairage clignote lentement",
    DISPLAY__BACKLIGHT__3: "rétroéclairage clignotant rapidement",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "appui bref",
    INPUT_OUTPUT__PRESS_LONG: "long",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "l'état OFF",
    KEY__LED_STATUS__1: "Red State",
    KEY__LED_STATUS__2: "l'état vert",
    KEY__LED_STATUS__3: "état orange",
    KEY__LED_SLEEP_MODE: "-",
    KEY__PRESS_SHORT: "appui bref",
    KEY__PRESS_LONG: "long",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "instantané",
    KEY__RESET: "reboot",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__TRUE: "ouvert",
    KEYMATIC__STATE__FALSE: "fermer",
    KEYMATIC__OPEN: "ouvrir",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__TRUE: "état incertain",
    KEYMATIC__STATE_UNCERTAIN__FALSE: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "erreur de couplage",
    KEYMATIC__ERROR__2: "moteur arrêté",
    MOTION_DETECTOR__BRIGHTNESS: "brillance",
    MOTION_DETECTOR__SET_BRIGHTNESS: "Réglage luminosité",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "la transmission prochaine",
    MOTION_DETECTOR__MOTION__TRUE: "détection de mouvement",
    MOTION_DETECTOR__MOTION__FALSE: "pas de mouvement détecté",
    MOTION_DETECTOR__SET_MOTION: "mettre en mouvement",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "sabotage déclenché",
    POWER__LOWBAT: "batterie faible",
    POWER__BAT_VOLTAGE: "tension de la batterie",
    POWERMETER__BOOT__TRUE: "** POWERMETER__BOOT__TRUE",
    POWERMETER__BOOT__FALSE: "** POWERMETER__BOOT__FALSE",
    POWERMETER__ENERGY_COUNTER: "la consommation d'énergie actuelle",
    POWERMETER__POWER: "sortie courant",
    POWERMETER__CURRENT: "intensité",
    POWERMETER__VOLTAGE: "tension à la sortie de commutation",
    POWERMETER__FREQUENCY: "fréquence",
    POWERMETER__SUM_1H: "la consommation d'énergie pour la dernière heure",
    POWERMETER__SUM_24H: "la consommation d'énergie dans les 24 dernières heures",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "compteur d'énergie de gaz",
    POWERMETER_IGL__GAS_POWER: "la production de gaz en cours",
    POWERMETER_IGL__ENERGY_COUNTER: "compteur d'énergie",
    POWERMETER_IGL__POWER: "sortie courant",
    PULSE_SENSOR__SEQUENCE_OK: "séquence accepter",
    RAINDETECTOR__STATE__0: "sec",
    RAINDETECTOR__STATE__1: "pluie",
    RAINDETECTOR_HEAT__STATE__TRUE: "Chauffage ON",
    RAINDETECTOR_HEAT__STATE__FALSE: "chauffage arrêt",
    RAINDETECTOR_HEAT__ON_TIME: "cycle de service (chauffage)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__TRUE: "on",
    RELAIS__STATE__FALSE: "off",
    RELAIS__VALUE: "valeur de commande",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "devoir",
    RELAIS__RAMP_TIME: "gradation",
    RGBW_AUTOMATIC__PROGRAM__0: "off",
    RGBW_AUTOMATIC__PROGRAM__1: "lente",
    RGBW_AUTOMATIC__PROGRAM__2: "normale",
    RGBW_AUTOMATIC__PROGRAM__3: "rapide",
    RGBW_AUTOMATIC__PROGRAM__4: "feu de joie",
    RGBW_AUTOMATIC__PROGRAM__5: "cascade",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "devoir",
    RGBW_AUTOMATIC__RAMP_TIME: "gradation",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "luminosité actuelle",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "couleur",
    RGBW_COLOR__ON_TIME: "devoir",
    RGBW_COLOR__RAMP_TIME: "gradation",
    RGBW_COLOR__ACT_BRIGHTNESS: "brigthness actuelle",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "valeur de couleur HSV",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "verrouillé",
    ROTARY_HANDLE_SENSOR__STATE__1: "basculé",
    ROTARY_HANDLE_SENSOR__STATE__2: "ouvrir",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "sabotage déclenché",
    ROTARY_HANDLE_SENSOR__LOWBAT__TRUE: "batterie faible",
    ROTARY_HANDLE_SENSOR__LOWBAT__FALSE: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "consommation totale",
    SENSOR__SUM_DATE: "timestamp initialiser le compteur de consommation totale",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "réinitialisation de la consommation totale",
    SENSOR__CONTROL__0: "inconnu",
    SENSOR__CONTROL__1: "compteur alternatif",
    SENSOR__CONTROL__2: "mesureur de puissance efficace",
    SENSOR__CONTROL__3: "compteur de gaz",
    SENSOR__SENSOR__TRUE: "** SENSOR__SENSOR__TRUE",
    SENSOR__SENSOR__FALSE: "** SENSOR__SENSOR__FALSE",
    SENSOR__STATE__TRUE: "on",
    SENSOR__STATE__FALSE: "off",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "la consommation moyenne (5 min)",
    SENSOR__MAX5MINUTES: "consommation maximale (5 min)",
    SENSOR__SUM_1H: "la consommation dernière heure",
    SENSOR__MAX_1H: "consommation maximale dernière heure",
    SENSOR__SUM_24H: "la consommation (24 h)",
    SENSOR__MAX_24H: "la consommation maximale (24 h)",
    SENSOR__METER: "mètre",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "la consommation moyenne dans le dernier intervalle de mesure",
    SENSOR__LAST_TICKS: "dernier intervalle de temps de mesure en secondes 10 (GZ)",
    SENSOR__UNITSPTURN: "facteur de conversion",
    SENSOR__DISTANCE: "capteur de proximité",
    SENSOR__F_PERCENT: "pour cent de niveau",
    SENSOR__F_LEVEL: "niveau",
    SENSOR__F_VOLUME: "capacité",
    SENSOR__RELAIS1__TRUE: "relais 1 ON",
    SENSOR__RELAIS1__FALSE: "relais 1 off",
    SENSOR__RELAIS2__TRUE: "relais 2 sur",
    SENSOR__RELAIS2__FALSE: "relais 2 off",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "type de capteur",
    SENSOR__ERROR: "message d'erreur",
    SENSOR__ON_TIME: "devoir",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> concentration normale",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> concentration accrue",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> concentration fortement augmenté",
    SHUTTER_CONTACT__STATE__TRUE: "ouvrir",
    SHUTTER_CONTACT__STATE__FALSE: "fermé",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "sabotage déclenché",
    SHUTTER_CONTACT__LOWBAT__TRUE: "batterie faible",
    SHUTTER_CONTACT__LOWBAT__FALSE: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__TRUE: "on",
    SIGNAL_CHIME__STATE__FALSE: "off",
    SIGNAL_CHIME__ON_TIME: "devoir",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__TRUE: "on",
    SIGNAL_LED__STATE__FALSE: "off",
    SIGNAL_LED__ON_TIME: "devoir",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__TRUE: "la fumée enregistré",
    SMOKE_DETECTOR__STATE__FALSE: "OK",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "test d'alarme a échoué",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "chambre de fumée dégradé",
    SMOKE_DETECTOR__LOWBAT__TRUE: "batterie faible",
    SMOKE_DETECTOR__LOWBAT__FALSE: "-",
    SMOKE_DETECTOR_TEAM__STATE__TRUE: "la fumée enregistré",
    SMOKE_DETECTOR_TEAM__STATE__FALSE: "OK",
    STATUS_INDICATOR__STATE__TRUE: "on",
    STATUS_INDICATOR__STATE__FALSE: "off",
    STATUS_INDICATOR__ON_TIME: "devoir",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "annuler la minuterie",
    SYSTEM__TIMER_SET: "régler la minuterie",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__TRUE: "on",
    SYSTEM__STATE__FALSE: "off",
    SYSTEM__TIMER_GET: "temps restant",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "appui bref",
    SYSTEM__CMD_RUNL: "long",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "frappe sur l'interface Web",
    SYSTEM__MAILTO: "destinataire de l'email",
    SYSTEM__MAILCC: "email cc",
    SYSTEM__SUBJECT: "objet de l'email",
    SYSTEM__TYPE__0: "texte",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "alarme",
    SYSTEM__TEXT: "texte",
    SYSTEM__TEMPLATEID: "ID de modèle",
    SYSTEM__OPTION_1: "les données pour modèle prédéfini 1",
    SYSTEM__OPTION_2: "les données pour modèle prédéfini 2",
    SYSTEM__OPTION_3: "les données pour modèle prédéfini 3",
    SYSTEM__OPTION_4: "les données pour modèle prédéfini 4",
    SYSTEM__OPTION_5: "les données pour modèle prédéfini 5",
    SYSTEM__RETURN: "valeur de retour par appel de fonction",
    SYSTEM__PHONE: "le numéro de téléphone de SMS",
    SYSTEM__PRIORITY__0: "faible priorité",
    SYSTEM__PRIORITY__1: "priorité normale",
    SYSTEM__PRIORITY__2: "priorité importante",
    SYSTEM__PRIORITY__3: "priorité élevée",
    SYSTEM__PRIORITY__4: "priorité essentielle",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "adresse enregistrée",
    SWITCH__IP: "adresse par la résolution DNS",
    SWITCH__UNREACH_CTR: "tentatives a échoué",
    SWITCH__STATE__TRUE: "on",
    SWITCH__STATE__FALSE: "off",
    SWITCH__ON_TIME: "devoir",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "changer d'état",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "power-ups (1 h)",
    SWITCH__TIME_ON_1H: "durée totale (sur) (1 h)",
    SWITCH__TIME_OFF_1H: "durée totale (off) (1 h)",
    SWITCH__TIME_ON: "dernière durée (sur)",
    SWITCH__TIME_OFF: "dernière durée (off)",
    SWITCH__TIME_ON_SUM: "durée totale (sur)",
    SWITCH__SWITCH_SUM: "nombre de power-ups",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__TRUE: "on",
    SWITCH__TIME_STATE__FALSE: "off",
    SWITCH__INFO_LED__0: "off",
    SWITCH__INFO_LED__1: "verte",
    SWITCH__INFO_LED__2: "orange",
    SWITCH__INFO_LED__3: "rouge",
    SWITCH__SUM_RESET: "réinitialisation du compteur",
    SWITCH__SET_STATE: "valeur de consigne",
    SWITCH__NIGHT_MODE: "mode nuit",
    SWITCH__NIGHT_MODE__TRUE: "mode nuit",
    SWITCH__NIGHT_MODE__FALSE: "-",
    SWITCH__POWER: "sortie courant",
    SWITCH__ERROR_OVERLOAD__TRUE: "surcharge",
    SWITCH__ERROR_OVERLOAD__FALSE: "-",
    SWITCH__ENERGY_COUNTER: "la consommation d'énergie actuelle",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__TRUE: "batterie faible",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__TRUE: "erreur de communication",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__TRUE: "fenêtre ouverte",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "tension de la batterie",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "température",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "l'humidité actuelle",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "boost mode",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "baisser",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "manuel",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "confort",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "automatique",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "température",
    THERMALCONTROL_TRANSMIT__PARTY_START: "Start Time",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "temps de la fin",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__TRUE: "tilt enregistré",
    TILT_SENSOR__STATE__FALSE: "OK",
    TILT_SENSOR__LOWBAT__TRUE: "batterie faible",
    TILT_SENSOR__LOWBAT__FALSE: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "Restaurer la dernière gradation",
    VIRTUAL_DIMMER__RAMP_TIME: "gradation",
    VIRTUAL_DIMMER__ON_TIME: "devoir",
    VIRTUAL_DIMMER__RAMP_STOP: "arrêter de gradation",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "erreur de chargement",
    VIRTUAL_DIMMER__ERROR_REDUCED__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__TRUE: "puissance réduite",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__TRUE: "surchauffe",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__TRUE: "surcharge",
    VIRTUAL_DIMMER__LEVEL_REAL: "valeur réelle",
    VIRTUAL_KEY__PRESS_SHORT: "appui bref",
    VIRTUAL_KEY__PRESS_LONG: "long",
    VIRTUAL_KEY__LEVEL: "-",
    WATERDETECTIONSENSOR__STATE__0: "sec",
    WATERDETECTIONSENSOR__STATE__1: "humide",
    WATERDETECTIONSENSOR__STATE__2: "humide",
    WATERDETECTIONSENSOR__LOWBAT__TRUE: "batterie faible",
    WATERDETECTIONSENSOR__LOWBAT__FALSE: "-",
    WEATHER__HUMIDITY: "humidité",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "température",
    WEATHER__WIND_SPEED: "la vitesse du vent",
    WEATHER__WIND_DIRECTION: "la direction du vent",
    WEATHER__WIND_DIRECTION_RANGE: "gamme de direction du vent",
    WEATHER__SUNSHINEDURATION: "la durée d'ensoleillement",
    WEATHER__RAINING__TRUE: "pluie",
    WEATHER__RAINING__FALSE: "-",
    WEATHER__RAIN_COUNTER: "précipitations",
    WEATHER__RAIN_CTR: "précipitations",
    WEATHER__DEW_POINT: "point de rosée",
    WEATHER__ABS_HUMIDITY: "humidité absolue",
    WEATHER__TEMP_MIN_24H: "température min (24 h)",
    WEATHER__TEMP_MAX_24H: "Température maximale (24 h).",
    WEATHER__HUM_MIN_24H: "humidité min (24 h)",
    WEATHER__HUM_MAX_24H: "max humidité (24 h).",
    WEATHER__WIND_MAX_24H: "la vitesse du vent max (24 h)",
    WEATHER__RAIN_CTR_24H: "précipitations (24 h)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "brillance",
    WEATHER__LOWBAT__TRUE: "batterie faible",
    WEATHER__LOWBAT__FALSE: "-",
    WEATHER__AIR_PRESSURE: "pression",
    WEATHER__SET_HUMIDITY: "mettre l'humidité",
    WEATHER__MEDIAN: "valeur centrale",
    WEATHER__MEAN: "moyenne",
    WEATHER__BRIGHTNESS_WEST: "l'ouest de luminosité",
    WEATHER__BRIGHTNESS_SOUTH: "sud luminosité",
    WEATHER__BRIGHTNESS_EAST: "Est luminosité",
    WEATHER_TRANSMIT__HUMIDITY: "humidité",
    WEATHER_TRANSMIT__TEMPERATURE: "température",
    WEBCAM__INFO: "texte d'information",
    WEBCAM__IMAGE: "image",
    WEBCAM__PTZ_CMD: "fonction prédéfinie",
    WEBCAM__IR__0: "LED infrarouge off",
    WEBCAM__IR__1: "auto LED infrarouge",
    WEBCAM__IR__2: "LED infrarouge sur",
    WINMATIC__SPEED: "vitesse",
    WINMATIC__STOP: "stop",
    WINMATIC__RELOCK_DELAY: "verrouille automatiquement après le temps",
    WINMATIC__STATE_UNCERTAIN__TRUE: "état incertain",
    WINMATIC__STATE_UNCERTAIN__FALSE: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "erreur servomoteur",
    WINMATIC__ERROR__2: "erreur d'inclinaison de route",
    WRAPPER__MEDIAN: "valeur centrale",
    WRAPPER__MEAN: "moyenne",
    WRAPPER__SET_STATE: "mettre en état",
    WRAPPER__TIME_ON_1H: "durée totale (sur) (1 h)",
    WRAPPER__TIME_OFF_1H: "durée totale (off) (1 h)",
    WRAPPER__SWITCH_1H: "power-ups (1 h)",
    WRAPPER__TIME_ON_24H: "durée totale (ON) (24 h)",
    WRAPPER__TIME_OFF_24H: "durée totale (off) (24 h)",
    WRAPPER__SWITCH_24H: "power-ups (24 h)",
    WRAPPER__PERCENT_ON_24H: "pourcentage (ON) (24 h)",
    WRAPPER__TIME_ON_168H: "durée totale (sur) (7 jours)",
    WRAPPER__TIME_OFF_168H: "durée totale (off) (7 jours)",
    WRAPPER__SWITCH_168H: "power-ups (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "pourcentage (ON) (7 jours)",
    WRAPPER__TIME_ON_HHH: "durée totale (sur)",
    WRAPPER__TIME_OFF_HHH: "durée totale (off)",
    WRAPPER__SWITCH_HHH: "power-ups",
    WRAPPER__PERCENT_ON_HHH: "pourcentage",
    WRAPPER__STATE__TRUE: "on",
    WRAPPER__STATE__FALSE: "off",
    WRAPPER__TIME_ON: "dernière durée (sur)",
    WRAPPER__TIME_OFF: "dernière durée (off)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "les données de configuration sont transmises",
    ALARMDP__DEVICE_IN_BOOTLOADER: "redémarrage de l'appareil",
    ALARMDP__LOWBAT: "batterie faible",
    ALARMDP__STICKY_UNREACH: "la communication a été interrompue",
    ALARMDP__U_SOURCE_FAIL: "défaut d'alimentation",
    ALARMDP__UNREACH: "la communication perturbée à l'époque",
    ALARMDP__UPDATE_PENDING: "mise à jour disponible",
    ALARMDP__USBH_POWERFAIL: "hôte USB désactivé",
    //Sprachen
    DE: "allemand",
    EN: "english",
    ES: "espangnol",
    FR: "français",
    PT: "portugais",
    RU: "russe",
    TR: "turque",
    ZH: "chinois",
    LANGUAGE: "langue",
    //CCU Bezeichnungen
    ROOMLIVINGROOM: "Salon",
    ROOMKITCHEN: "Cuisine",
    ROOMBEDROOM: "Chambre à coucher",
    ROOMCHILDRENSROOM1: "Chambre d'enfant 1",
    ROOMCHILDRENSROOM2: "Chambre d'enfant 2",
    ROOMOFFICE: "Bureau d'accueil",
    ROOMBATHROOM: "Salle de bains",
    ROOMGARAGE: "Garage",
    ROOMHWR: "Buanderie",
    ROOMGARDEN: "Jardin",
    ROOMTERRACE: "Terrasse",
    FUNCLIGHT: "Lumière",
    FUNCHEATING: "Chauffage",
    FUNCCLIMATECONTROL: "Les conditions climatiques",
    FUNCWEATHER: "Météo",
    FUNCENVIRONMENT: "Environnement",
    FUNCSECURITY: "Sécurité",
    FUNCLOCK: "Bloquer",
    FUNCBUTTON: "Bouton",
    FUNCCENTRAL: "Contrôle centrale",
    FUNCENERGY: "Gestion d'énergie",
    SYSVARPRESENCE : "Présence",
    SYSVARPRESENCEMSG : "Présence",
    SYSVARPRESENCEPRESENT : "présent",
    SYSVARPRESENCENOTPRESENT : "pas présenter",
    SYSVARALARMZONE1 : "Zone Alarm 1",
    SYSVARALARMZONE1MSG : "Message d'alarme Zone 1",
    SYSVARALARMZONE1TRIGGERED : "déclenché",
    SYSVARALARMZONE1NOTTRIGGERED : "pas déclenché",
    // Andere Bezeichnungen
    OPEN: "ouvrir",
    OPEN_SHORT: "ouvert",
    CLOSE: "fermer",
    CLOSE_SHORT: "fermer",
    LOCKED: "verrouillé",
    LOCK: "verrouiller",
    ON: "on",
    OFF: "off",
    MAX: "max",
    MED: "med",
    MIN: "min",
    RUN: "Cours",
    SAVE: "sauver",
    YES: "oui",
    NO: "non",
    VISIBILITY: "visibilité",
    DELETE: "supprimer",
    UPLOAD: "le téléchargement d'images",
    VARIABLES: "variables système",
    PROGRAMS: "programmes",
    FAVORITES: "favoris",
    ROOMS: "chambres",
    FUNCTIONS: "fonctions",
    EDIT: "modif",
    OPTIONS: "options",
    OPTIONS_CLIENT: "options pour cet appareil",
    TEST_DEVICE: "page de test HM",
    TEST_CUXD: "page de test CUXD",
    UNKNOWN_ERROR: "erreur inconnue",
    NO_SERVICE_MESSAGES: "Pas de messages de services disponibles.",
    UNKNOWN_VAR_TYPE: "type de variable inconnu",
    SETTINGS: "paramètres",
    TIME_SEC_SINGULAR: "deuxième",
    TIME_SEC_PLURAL: "secondes",
    TIME_MIN_SINGULAR: "minute",
    TIME_MIN_PLURAL: "minutes",
    TIME_H_SINGULAR: "heure",
    TIME_H_PLURAL: "heures",
    TIME_DAY_SINGULAR: "jour",
    TIME_DAY_PLURAL: "jours",
    TIME_W_SINGULAR: "semaine",
    TIME_W_PLURAL: "semaines",
    TIME_MON_SINGULAR: "mois",
    TIME_MON_PLURAL: "mois",
    TIME_Y_SINGULAR: "année",
    TIME_Y_PLURAL: "années",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "il ya",
    LOADING: "charge",
    SET: "set",
    DEFAULT: "par défaut",
    BLACK: "noir",
    PINK: "rose",
    GREEN: "verte",
    YELLOW: "jaune",
    GREY: "grise",
    BLUE: "bleu",
    RED: "rouge",
    BROWN: "brun",
    WHITE: "blanc",
    BRAZIL: "Brésil",
    GERMANY: "Allemagne",
    SHOW: "show",
    HIDE: "cacher",
    NO_VALUE: "Non",
    SMALL: "petit",
    BIG: "gros",
    GRAPHICS_SIZE: "Taille des graphiques",
    FILTER: "les données de filtrage ...",
    TRANSFER: "transfert ...",
    DELAY: "la valeur est toujours transféré à l'appareil et affiche seulement après un retard ici.",
    TRANSFER_OK: "OK!",
    IMAGE_UPLOAD: "Il ne peut JPG, GIF ou PNG sont téléchargés!",
    START: "commencer ...",
    NEW_VERSION: "Nouvelle WebMatic version",
    DOWNLOAD: "lien de téléchargement",
    MANUAL: "seule l'exécution manuelle",
    OPERATABLE: "actionné",
    HISTORIAN_DURATION: "Le dernier...",
    CHOOSE_THEME: "Sélectionnez Thème",
    NOT_SELECTED: "paramètre général",
    DESIGN: "apparence",
    FONT: "la police",
    MENU: "les entrées de menu",
    DEFAULT_OPEN: "Afficher le premier appel",
    DEFAULT_READONLY: "Norme variable en lecture seule",
    HISTORIAN_WARNING: "Entrez dans la configuration > Options l'URL",
    NEW_UPDATES_WARNING: "Informations sur les nouvelles versions",
    STABLE: "seules les versions stables",
    ALPHA: "également des versions alpha",
    OTHERS: "autres",
    DONT_LEAVE: "Empêcher accidentelle quitter la page",
    CHOOSE: "s'il vous plaît choisissez",
    DELETE_SETTINGS: "paramètres clairs",
    RELOAD: "recharger",
    CLIENT_SETTINGS: "Paramètres du client",
    CLIENT_TITLE: "nom du client",
    DEFAULT_SORT: "tri standard",
    ALPHABETICAL: "alphabétique",
    MANUALLY: "manuelly",
    DELETE_SETTINGS_WARNING: "Attention Tous les paramètres du client sélectionné sera supprimé.",
    END_CLIENT_MODUS: "Mode de configuration de Client Final",
    REMOVE_MESSAGES: "Retirer troubles obsolètes",
    ABOUT: "environ",
    SERVICE_NOTE: "Notifications de service",
    NO_DISORDERS: "Pas de messages de service disponibles",
    TWO_SITES_VERSION: "Affichage sur 2 pages",
    TWO_SITES_TRANSITION: "Effet sur le changement de la page",
    BACK: "Arrière",
    NUMBER_OF_COLUMNS: "Nombre de colonnes",
    STEP: "étape",
    FACTOR: "facteur",
    SHOW_DESCRIPTION: "Montrer la description",
    SHOW_LAST_TIME_USED: "Dernier temps utilisé",
    WORKSPACE: "lieu de travail",
    ONLY_PIC: "seuls les graphiques",
    DIVIDE: "Partition",
    ADD_DIVIDER: "ajouter une partition",
    UNSORTED: "non trié",
    SAVE_AND_RELOAD: "sauvegarder et recharger",
    RELOAD_CCU_CHANGES: "changement trouvé"
};