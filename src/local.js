import { imgIndex } from './imgs';

export function local(){
    const store = new Image();
    store.src = imgIndex.storeFront

    const LocalDiv = document.createElement('div')
    const LocalText = document.createElement('p')
    LocalDiv.className = "Localdiv";

    content.appendChild(LocalDiv)
    LocalDiv.appendChild(LocalText)
    LocalDiv.appendChild(store)
    LocalText.textContent = 'Claro! Imagine encontrar o sabor inconfundível da Crazy Burguer em todos os cantos da cidade - bem-vindo ao Food Truck Crazy Burguer, uma extensão itinerante da nossa adorada lanchonete!Nosso Food Truck é uma explosão de cor e sabor sobre rodas, trazendo a mesma paixão pela culinária e os hambúrgueres irresistíveis diretamente para você, onde quer que esteja. Equipado com uma cozinha totalmente funcional e uma equipe talentosa, o Food Truck Crazy Burguer pode ser encontrado em eventos locais, festivais de comida, parques, e até mesmo em locais inesperados ao redor da cidade.A atmosfera animada e contagiante do nosso Food Truck é incomparável. Enquanto você se aproxima, será recebido pelo aroma tentador de hambúrgueres grelhados e batatas fritas crocantes, enquanto nossa equipe atenciosa e sorridente está pronta para preparar uma refeição deliciosa que você não esquecerá tão cedo. E não se preocupe em perder a sua dose favorita de Crazy Burguer - mantemos nossos clientes atualizados sobre a localização atual do Food Truck por meio das redes sociais e de nosso site, garantindo que você sempre saiba onde encontrar sua dose de hambúrgueres loucamente deliciosos. Então, da próxima vez que você estiver em busca de uma aventura gastronômica emocionante ou apenas de um lanche rápido e saboroso, procure pelo Food Truck Crazy Burguer e deixe-nos levá-lo a uma jornada de sabores que deixará seu paladar alucinado!'
} 