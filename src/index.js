import './Menu.css';
import 'normalize.css'
import { about } from './about';
import { local } from './local';
import { Main } from './itens';
/*
todos:
1 - terminar de estilar o sobre e local, fazer as animações
2 - fazer comentarios no codigo
3 - criar um readMe
*/

function component(){
/*
logica dos botões, cada botão recebe um evento de click
e devolve uma função filha dependendo do valor
*/
    const content = document.querySelector('#content');
    const button = document.querySelectorAll('button')

    button.forEach((button) => {
        button.addEventListener('click', () =>{

            content.innerHTML = " "
            
            if(button.value == "about"){
                about()
                content.className = "AboutMain"
            }
            if(button.value == "local"){
                local()
                content.className = "LocalMain"
            }
            if(button.value == "menu"){
                Main()
                content.className = "ItenMain"
            }
        });
    });

return content

}

content.appendChild(component());
