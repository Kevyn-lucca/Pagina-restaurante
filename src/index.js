import './style.css';
import { imgIndex } from './imgs';
import 'normalize.css'

/*
todos:
1 - separar as funções em varios arquivos menores para melhor desenvolvimento
2 - estilizar a pagina
3 - fazer comentarios no codigo
4 - criar um readMe

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
            }
            if(button.value == "local"){
                local()
            }
            if(button.value == "menu"){
                Main()
            }
        });
    });

//funções filhas

//essa função retorna o conteu na pagina de about
    function about(){
        
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

    function local(){
        const store = new Image();
        store.src = imgIndex.storeFront

        const LocalDiv = document.createElement('div')
        const LocalText = document.createElement('p')

        content.appendChild(LocalDiv)
        LocalDiv.appendChild(LocalText)
        LocalDiv.appendChild(store)
        LocalText.textContent = 'testando como esse texto interage com a pagina'
      
    }

    function Main(){
        const Menu = document.createElement('div');
        const Title = document.createElement('h1');
        Title.textContent = 'Menu';
        content.appendChild(Menu);
        Menu.appendChild(Title);
    
        const ItensName = ["Pizza", "Hamburguer de Bacon", "Hamburger Artesanal", "Cachorro-quente", "Cerveja", "Suco de Laranja"];
        
        const itensText = [
            "Uma pizza de queijo deliciosa",
            "Um hamburguer de bacon crocante",
            "Um hamburguer Artesanal com pão brioche e ingredientes selecionados",
            "Um cachorro-quente temperado de qualidade",
            "Cerveja geladinha",
            "Suco de laranja natural feito com frutas frescas"
        ];

        const ItensImgs = [imgIndex.food1, imgIndex.food2, imgIndex.food3, imgIndex.food4, imgIndex.food5, imgIndex.food6];
    
        // Loop pelos itens de texto e imagens simultaneamente
        ItensName.forEach(function (itemName, index) {
            const MenuDiv = document.createElement('div');
            const MenuName = document.createElement('h1');
            const MenuText = document.createElement('p');
            const food = new Image();
    
            // Define a imagem do item atual
            food.src = ItensImgs[index];
    
            // Define o texto do item atual
            MenuName.textContent = itemName;
            MenuText.textContent = itensText[index];
    
            // Adiciona os elementos ao DOM
            content.appendChild(MenuDiv);
            MenuDiv.appendChild(MenuName);
            MenuDiv.appendChild(MenuText);
            MenuDiv.style.backgroundImage = `url('${food.src}')`;
        });
    
    }

return content

}

content.appendChild(component());
