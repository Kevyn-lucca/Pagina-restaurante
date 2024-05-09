// Importando os estilos, e os ícones e imagens necessários para a página deve importa somente o style
import './style.css';
import IconOne from './phone.svg';
import IconTwo from './store.svg'
import LocalImg from './Store.jpg'
/*
Todos:  
    1 - criar o loop que gera seis divs aonde vai o menu
    2 - cria o objeto que tem todas as imagens que irão no site
    3 - gerar a logica que poẽm uma imagem diferente em cada div
    4 - gera a logica que poẽm um texto diferente em cada div
    5 - estilizar o site
        ?cria um array que pega um texto e uma imagem se pa para fazer a 4 ea 3?
        !estilizar o site provavelmente e o que mais vai demorar, cheque a folha de desing
*/

// Função principal que cria e manipula os elementos da página
function component(){

    // Lógica para lidar com os botões
    button.forEach((button) => {
        button.addEventListener('click', () =>{
            // Limpa o conteúdo atual
            content.innerHTML = " "
            
            // Condição para determinar qual função será chamada com base no valor do botão
            if(button.value == "about"){
                about()
            }
            if(button.value == "local"){
                local()
            }
            if(button.value == "menu"){
                menu()
            }
        });
    });

    // Função para exibir informações sobre a empresa
    function about(){
        // Cria elementos para mostrar informações sobre a empresa
        const AboutDiv = document.createElement('div')
        const AboutText = document.createElement('p')
        const AboutList = document.createElement('ul')
  
        // Adiciona elementos à página
        content.appendChild(AboutDiv)
        AboutDiv.appendChild(AboutText)
        content.appendChild(AboutList)

        // Define o texto sobre a empresa
        AboutText.textContent = "Esse é um texto de teste feito para testar como esse elemento está interagindo com a página"
        
        // Loop para criar itens de lista com ícones e texto
        for (let i = 0; i < 2; i++) {
            const AboutInfo = document.createElement('li');
            AboutList.appendChild(AboutInfo);
    
            // Adiciona ícones de acordo com o índice do loop
            const Icon = new Image();
            Icon.src = i === 0 ? IconOne : IconTwo;
            AboutInfo.appendChild(Icon);
    
            // Adiciona texto aos itens da lista
            const text = document.createElement('span');
            text.textContent = i === 0 ? 'Lista gerada com sucesso' : 'Segundo item da lista gerado com sucesso';
            AboutInfo.appendChild(text);
        }

    }

    // Função para exibir informações sobre a localização
    function local(){
        // Cria elemento de imagem para mostrar a localização
        const store = new Image();
        store.src = LocalImg

        // Cria elementos para mostrar informações sobre a localização
        const LocalDiv = document.createElement('div')
        const LocalText = document.createElement('p')

        // Adiciona elementos à página
        content.appendChild(LocalDiv)
        LocalDiv.appendChild(LocalText)
        LocalDiv.appendChild(store)
        LocalText.textContent = 'Testando como esse texto interage com a página'
    }

    // Função para exibir o menu
    function menu(){
        // Cria elementos para mostrar o menu
        const Menu = document.createElement('div')
        const Title = document.createElement('h1')
        Title.textContent = 'Pudim'
        content.appendChild(Menu)
        Menu.appendChild(Title)

        // Loop para criar itens do menu
        for(let j = 0; j < 6; j++){
            // Aqui você pode adicionar lógica para criar itens do menu
        }
    }

    // Retorna os elementos de conteúdo e botão
    return content, button
}

// Adiciona o componente à página
content.appendChild(component());
