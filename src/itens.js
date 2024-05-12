import { imgIndex } from "./imgs";

export function Main(){
    const Menu = document.createElement('div');
    const Title = document.createElement('h1');
    const Grid = document.createElement('div')
    Grid.className = "MenuGrid"

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
        MenuDiv.classList.add("MenuIten");
        // Define a imagem do item atual
        food.src = ItensImgs[index];

        // Define o texto do item atual
        MenuName.textContent = itemName;
        MenuText.textContent = itensText[index];

        // Adiciona os elementos ao DOM
        content.appendChild(Grid);
        Grid.appendChild(MenuDiv)
        MenuDiv.appendChild(MenuName);
        MenuDiv.appendChild(MenuText);
        MenuDiv.style.backgroundImage = `url('${food.src}')`;
    });

}