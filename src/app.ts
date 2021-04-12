import * as App from './flutter'

App.Scaffold({
    productionMode: false,
    body: App.Column({
        mainAxisAligment: App.MainAxisAligmentE.SpaceAround,
        children: [
            App.Container({
                child: 'Hola'
            }),
            App.Container({
                child: 'Como'
            }),
            App.Container({
                child: 'Te'
            }),
            App.Container({
                child: 'LLamas?'
            }),
        ]
    })
}); 
