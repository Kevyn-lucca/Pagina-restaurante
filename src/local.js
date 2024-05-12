import { imgIndex } from './imgs';

export function local(){
    const store = new Image();
    store.src = imgIndex.storeFront

    const LocalDiv = document.createElement('div')
    const LocalText = document.createElement('p')

    content.appendChild(LocalDiv)
    LocalDiv.appendChild(LocalText)
    LocalDiv.appendChild(store)
    LocalText.textContent = 'testando como esse texto interage com a pagina'
  
}