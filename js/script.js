// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data() {
        return {
            ///////// IMG E NOME PROFILO PRINCIPALE
            img_profile: "./img/avatar_io.png",
            name_profile: "Dorin",
            ///////// DEFINISCO VARIABILE PER STABILIRE IL CONTATTO ATTIVO
            currentContact: 0,
            ///////// DEFINISCO VARIABILE PER INSERIRE UN NUOVO MESSAGGIO
            new_message: "",
            ///////// DEFINISCO VARIABILE PER EFFETTUARE UNA RICESCA TRA I CONTATTI
            search: "",
            ///////// DEFINISCO OGGETTO PER IL DROPDOWN MENU
            toggle: {
                visible: false,
                index: false
            },
            ///////// ARRAT DEI CONTATTI
            contacts: [
                {
                    // DETTAGLI CONTATTO
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI MICHELE
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI FABIO
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent',
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI SAMUELE
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI ALESSANDRO B.
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI ALESSANDRO L.
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Claudia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI CLAUDIA
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI FEDERICO
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                        }
                    ],
                },
                {
                    // DETTAGLI CONTATTO
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI DAVIDE
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received',
                        }
                    // Chiusura ultimo array dei messaggi
                    ],
                // Chiusura ultimo oggetto dell'array contatti
                }
            // Chiusura array contatti
            ]
        // Chiusura return
        }
    // Chiusura data
    },

    /////////// FUNZIONI
    methods: {
        // FUNZIONE PER CLICCARE SU OGNI CONTATTO E MOSTARRE I MESSAGGI CON LUI
        showChat(index){
            this.currentContact = index;
        },

        // FUNZIONE PER MOSTRARE IN ANTEPRIMA L'ULTIMO MESSAGGIO
        viewLastMessage(index){
            if(this.contacts[index].messages.length > 0){
                return this.contacts[index].messages[this.contacts[index].messages.length -1].message.slice(0,25) + " " + "...";
            }
            
        },

        // FUNZIONE DI RISPOSTA AUTOMATICA AD UN NUOVO MESSAGGIO
        responseMessage() {
            const responses = ['Ok', 'Ok, ma non insistere', 'Non disturbare!', 'Hai sbagliato chat.'];
            let i = Math.floor(Math.random() * responses.length);
            return responses[i];
        },
        
        // FUNZIONE PER SCRIVERE UN NUOVO MESSAGGIO
        addMessage() {
            // VARIABILE PER INSERIRE LA DATA E L'ORA AGGIORNATA
            const currentDate = luxon.DateTime.local().toFormat('HH:mm');

            let obj = {
                date: currentDate,
                message: this.new_message,
                status: "sent",
            }
            // VARIABILE PER LA RISPOSTA AUTOMATICA
            let response = {
                date: currentDate,
                message: this.responseMessage(),
                status: 'received',
            }
            // CONDIZIONE PER STABILIRE UN NUMERO MINIMO DI CARATTERI INSERITI PER POTER CLICCARE INVIO
            if (obj.message.length > 0){
                this.contacts[this.currentContact].messages.push(obj);
                // TIMER DI 1 SECONDO PER LA RISPOSTA AUTOMATICA
                setTimeout(() => {
                    response.date = currentDate;
                    this.contacts[this.currentContact].messages.push(response);
                }, 1000);
    
                this.new_message = '';
            }
        },

        // FUNZIONE PER RICERCARE UN CONTATTO
        findContact() {
            this.contacts.forEach((element) => {
                if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = true;
                }
                else {
                    element.visible = false;
                }
            });
        },

        // FUNZIONE PER VISUALIZZARE L'ORA DELL'ULTIMO MESSAGGIO INVIATO E RICEVUTO
        lastDate(index) {
            const update_date = this.contacts[index].messages[this.contacts[index].messages.length - 1]

            if (this.contacts[index].messages.length > 0) {
                return update_date.date
            }
        },

        // FUNZIONE PER VISUALIZZARE DATA E ORA DI ULTIMO ACCESSO
        lastAccess() {
            const obj_date = this.contacts[this.currentContact].messages;
            const update_date = obj_date[obj_date.length - 1];

            if (obj_date.length > 0) {
                if (update_date.status == 'received' || update_date.status == 'sent') {
                    return `Ultimo acceso effettuato alle ${update_date.date}`;
                }
            }
        },

        // FUNZIONE PER MOSTRARE IL DROPDOWN MENU
        showDropdown(index) {
            if (this.toggle.visible != false && this.toggle.index != index) {
                this.toggle.visible = false;
                this.toggle.index = false;
            }
            this.toggle.visible = this.toggle.visible ? false : true
            this.toggle.index = index;
        },

        // FUNZIONE PER RIMUOVERE UN MESSAGGIO
        deleteMessage(index) {
            let confirmation = confirm("Sei sicuro di voler cancellare questo messaggio?")
            if (confirmation) {
                this.contacts[this.currentContact].messages.splice(index, 1);
            }
        },
    }

    // CHIUSURA createApp CON .MOUNT("ID")
}).mount('#app');