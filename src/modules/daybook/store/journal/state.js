

//El state se construye en forma de una función para que el objeto que se define dentro del mismo sea reactivo.
//Es decir que reaccione a los cambios y los cambios son notificados a todos los componentes.

export default () =>({

    isLoading:true,
    entries:[
        {
            id:new Date().getTime(), //va a crear un id por ejemplo: 1345678
            date: new Date().toDateString(), //va a crear una fecha por ejemplo: sat 23, julio
            text: 'Est consequat aute officia et consectetur duis cillum ullamco. Fugiat ullamco excepteur cupidatat qui sunt ad. Duis esse in cupidatat Lorem ad ipsum laboris ea amet duis fugiat magna est. Sint ad aliquip eiusmod nostrud consequat ex deserunt elit ullamco ipsum voluptate mollit cillum dolore.',
            picture: null, // https:
        },
        {
            id:new Date().getTime()+1000, //va a crear un id por ejemplo: 1345678
            date: new Date().toDateString(), //va a crear una fecha por ejemplo: sat 23, julio
            text: 'Qui exercitation et proident nostrud mollit laborum tempor adipisicing deserunt proident laboris anim excepteur id. Pariatur deserunt est consequat nostrud eiusmod tempor quis laborum commodo reprehenderit ex. Qui nostrud in duis adipisicing dolore velit.',
            picture: null, // https:
        },
        {
            id:new Date().getTime()+2000, //va a crear un id por ejemplo: 1345678
            date: new Date().toDateString(), //va a crear una fecha por ejemplo: sat 23, julio
            text: 'Ad enim dolor excepteur exercitation Lorem sit commodo ipsum proident. Laborum cupidatat aliquip sit nostrud ipsum elit adipisicing duis cillum fugiat id eu. Eu non consectetur incididunt deserunt sunt. Enim ut veniam aliqua dolor consectetur eiusmod nisi aliquip deserunt minim id. Irure Lorem elit sint elit laborum tempor duis non. Excepteur nisi in culpa et aute elit occaecat proident aliqua amet cupidatat commodo excepteur adipisicing. Dolor excepteur proident ullamco adipisicing voluptate tempor incididunt fugiat.',
            picture: null, // https:
        }
    ]

})