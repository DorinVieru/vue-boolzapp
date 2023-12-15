// DICHIARO VARIABILE DEL METODO createApp
const { createApp } = Vue;

// INIZIALIZZAZIONE createApp E CREAZIONE ISTANZA DELL'APPLICAZIONE VUE
createApp({
    // DEFINISCO IL METODO data () NEL QUALE INSERIRO' UN RETURN
    data() {
        return {
            img_profile: "./img/avatar_io.png",
            name_profile: "Dorin",
            currentContact: 0,
            activeChat: 0,
            // ARRAT DEI CONTATTI
            contacts: [
                {
                    // DETTAGLI CONTATTO
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    // ARRAY DEI MESSAGGI DI MICHELE
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
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
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
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
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
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
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
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
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
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

    // FUNZIONI
    methods: {
        showChat(index){
            this.activeChat = index;
        },
        viewLastMessage(index){
            return this.contacts[index].messages[this.contacts[index].messages.length -1].message.slice(0,30) + " " + "...";
        },
    }

    // CHIUSURA createApp CON .MOUNT("ID")
}).mount('#app');