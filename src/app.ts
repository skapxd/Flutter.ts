import fs from 'fs'
import * as App from './flutter'

var htmlContent = App.Scaffold({
    header: {
        description: 'Este es un Framework de prueba',
        title: 'Mi primer proyecto',
        
    },
    body: App.Container({
        children: 'Hola como estas?'
    })
}); 

fs.writeFile(
    /* Path de la vista */ './views/my-page.html', 
    /* Contenido html */  htmlContent, 
    (error: any) => { /* handle error */ }
);
