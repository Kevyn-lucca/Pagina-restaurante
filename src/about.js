import { imgIndex } from './imgs';

export function about(){
        
    const AboutDiv = document.createElement('div');
    const AboutText = document.createElement('p');
    const AboutList = document.createElement('ul');

    AboutDiv.className = "AboutDiv";

    content.appendChild(AboutDiv);

    AboutDiv.appendChild(AboutText);

    AboutDiv.appendChild(AboutList);

    AboutText.textContent = "Bem-vindo à Crazy Burguer, o paraíso dos amantes de hambúrgueres que buscam uma experiência fora do comum! Localizada no coração da cidade, nossa lanchonete é o destino definitivo para os aficionados por comida que desejam uma explosão de sabor em cada mordida. Ao entrar na Crazy Burguer, você será imerso em um ambiente vibrante e descontraído, onde as paredes são adornadas com grafites coloridos e as mesas exibem um toque moderno e acolhedor. A música animada e o aroma irresistível de hambúrgueres grelhados preenchem o ar, despertando seu apetite e preparando-o para uma experiência gastronômica inesquecível. Nossa equipe amigável e apaixonada está sempre pronta para recebê-lo com um sorriso caloroso e ajudá-lo a explorar nosso extenso menu repleto de opções tentadoras. Desde os clássicos hambúrgueres suculentos, até criações exclusivas e inovadoras, como o 'Louco Duplo Bacon Explosion' ou o 'Veggie Delight', há algo para todos os gostos e preferências. Na Crazy Burguer, acreditamos em ingredientes frescos e de alta qualidade, por isso cada hambúrguer é cuidadosamente preparado no momento do pedido, garantindo que cada cliente desfrute de uma refeição excepcionalmente deliciosa. E para acompanhar seu hambúrguer perfeito, oferecemos uma variedade de batatas fritas crocantes, milkshakes cremosos e refrigerantes gelados. Então, se você está pronto para uma aventura gastronômica verdadeiramente emocionante, junte-se a nós na Crazy Burguer, onde cada hambúrguer é uma obra de arte e cada refeição é uma celebração do sabor. Prepare-se para enlouquecer pelos nossos hambúrgueres!"
    
    for (let i = 0; i < 2; i++) {
        
        const AboutInfo = document.createElement('li');
        AboutList.appendChild(AboutInfo);

        // Adicionando as imagens antes do texto
        const Icon = new Image();
        Icon.src = i === 0 ? imgIndex.Phone : imgIndex.storeIcon;
        AboutInfo.appendChild(Icon);

        // Adicionando o texto após as imagens
        const text = document.createElement('span');
        text.textContent = i === 0 ? '(61) 9292992' : 'qr 30930-2 2023';
        AboutInfo.appendChild(text);
    }

}