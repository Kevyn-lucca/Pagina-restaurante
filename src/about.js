import { imgIndex } from './imgs';

export function about(){
        
    const AboutDiv = document.createElement('div')
    const AboutText = document.createElement('p')
    const AboutList = document.createElement('ul')

    content.appendChild(AboutDiv)

    AboutDiv.appendChild(AboutText)

    content.appendChild(AboutList)

    AboutText.textContent = "Esse e um texto de teste feito para testar como esse elemento esta interagindo com a pagina"
    
    for (let i = 0; i < 2; i++) {
        
        const AboutInfo = document.createElement('li');
        AboutList.appendChild(AboutInfo);

        // Adicionando as imagens antes do texto
        const Icon = new Image();
        Icon.src = i === 0 ? imgIndex.Phone : imgIndex.storeIcon;
        AboutInfo.appendChild(Icon);

        // Adicionando o texto após as imagens
        const text = document.createElement('span');
        text.textContent = i === 0 ? 'Lista gerada com sucesso' : 'Segundo item da lista gerado com sucesso';
        AboutInfo.appendChild(text);
    }

}