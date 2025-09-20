const CHARM_LIST = [
    
    {
        name: "Wayward_Compass",
        weight: 1,
        label: "Bússola Caprichosa",
        description: "Sussura sua localização ao portador sempre que o mapa estiver aberto, permitindo que os aventureiros identifiquem sua localização atual.",
        icon: "charms/Wayward_Compass.webp"
    },
    {
        name: "Gathering_Swarm",
        weight: 1,
        label: "Enxame de Colecionadores",
        description: "<div>Um enxame seguirá o portador e coletará quaisquer Geo deixado no chão.</div><div>Útil para aqueles que não conseguem deixar nada para trás, por mais insignificante que seja.</div>",
        icon: "charms/Gathering_Swarm.webp"
    },
    {
        name: "Stalwart_Shell",
        weight: 2,
        label: "Carapaça Robusta",
        description: "<div>Aumenta a resistência. Ao se recuperar de danos, o portador permanecerá invulnerável por mais tempo.</div> <div>Facilita a fuga de situações perigosas.</div>",
        icon: "charms/Stalwart_Shell.webp"
    },
    {
        name: "Soul_Catcher",
        weight: 2,
        label: "Apanhador de Almas",
        description: "<div>Usado pelos xamãs para atrair mais ALMA do mundo ao seu redor</div> <div>Aumenta a quantidade de ALMA recebida quando um oponente é atingido com o ferrão.</div>",
        icon: "charms/Soul_Catcher.webp"
    },
    {
        name: "Shaman_Stone",
        weight: 3,
        label: "Pedra do Xamã",
        description: "<div>Diz-se que contém o conhecimento das gerações passadas dos xamãs</div> <div>Aumenta o poder das magias, causando mais dano aos oponentes.</div>",
        icon: "charms/Shaman_Stone.webp"
    },
    {
        name: "Soul_Eater",
        weight: 4,
        label: "Devorador de Almas",
        description: "<div>Artefato xamã esquecido, usado para extrair ALMA de criaturas ainda vivas.</div> <div>Aumenta consideravelmente a quantidade de ALMA recebida quando um oponente é atingido com o ferrão.</div>",
        icon: "charms/Soul_Eater.webp"
    },
    {
        name: "Dashmaster",
        weight: 2,
        label: "Mestre da Esquiva",
        description: "<div>Se assemelha a um inseto excêntrico conhecido apenas como 'O Mestre das Esquivas'.</div> <div>O portador será capaz de esquivar mais frequentemente, bem como esquivar para baixo. Perfeito para aqueles que querem se mover o mais rápido possivel.</div>",
        icon: "charms/Dashmaster.webp"
    },
    {
        name: "Sprintmaster",
        weight: 1,
        label: "Mestre da Corrida",
        description: "<div>Toma a semelhança de um inseto estranho conhecido apenas como 'O Mestre da Corrida'.</div> <div>Aumenta a velocidade do portador, permitindo que ele evite perigo ou supere rivais.</div>",
        icon: "charms/Sprintmaster.webp"
    },
    {
        name: "Grubsong",
        weight: 1,
        label: "Canção das Larvas",
        description: "<div>Contém a gratidão de larvas que foram salvas.</div> <div>Recebe ALMA sempre que dano for recebido.</div>",
        icon: "charms/Grubsong.webp"
    },
    {
        name: "Grubberflys_Elegy",
        weight: 3,
        label: "Elegia da Larvamosca",
        description: "<div>Contém a poesia das larvas que evoluíram para o próximo estágio de suas vidas. Infunde armas com uma energia sagrada.</div> <div>Quando o portador está com a vida cheia, ele lançará feixes de energia branca atráves de seu ferrão.</div>",
        icon: "charms/Grubberflys_Elegy.webp"
    },
    {
        name: "Unbreakable_Heart.webp",
        weight: 2,
        label: "Coração Inquebrável",
        description: "<div>Aumenta a vida do portador, permitindo-lhe sofre mais dano.</div> <div>Este amuleto é inquebrável.</div>",
        icon: "charms/Unbreakable_Heart.webp"
    },
    {
        name: "Unbreakable_Greed",
        weight: 2,
        label: "Ganância Inquebrável",
        description: "<div>Faz com que o portador encontre mais Geo ao derrotar inimigos.</div> <div>Este amuleto é inquebrável.</div>",
        icon: "charms/Unbreakable_Greed.webp"
    },
    {
        name: "Unbreakable_Strength",
        weight: 3,
        label: "Força Inquebrável",
        description: "<div>Fortalece o portador, aumentando o dano causado aos inimigos com o ferrão.</div> <div>Este amuleto é inquebrável.</div>",
        icon: "charms/Unbreakable_Strength.webp"
    },
    {
        name: "Spell_Twister",
        weight: 2,
        label: "Dobrador de Magias",
        description: "<div>Refletindo os desejos do Santuário das Almas de dominar a ALMA, melhora a capacidade do portador de lançar magias.</div> <div>Reduz o custo de ALMA para a canalização de magias.</div>",
        icon: "charms/Spell_Twister.webp"
    },
    {
        name: "Steady_Body",
        weight: 1,
        label: "Corpo Firme",
        description: "<div>Mantém seu portador firme, prevenindo-o de recuar quando atingir um inimigo com o Ferrão.</div> <div>Permite que se mantenha firme e continue atacando.</div>",
        icon: "charms/Steady_Body.webp"
    },
    {
        name: "Heavy_Blow",
        weight: 2,
        label: "Golpe Pesado",
        description: "<div>Formado a partir dos ferrões de guerreiros caídos.</div> <div>Aumenta a força do ferrão do portador, causando inimigos a recuar mais quando atingidos.</div>",
        icon: "charms/Heavy_Blow.webp"
    },
    {
        name: "Quick_Slash",
        weight: 3,
        label: "Corte Rápido",
        description: "<div>Nascido de ferrões imperfeitos e descartados que se fundiram. Os ferrões ainda desejam ser empunhados.</div> <div>Permite que o portador corte muito mais rapidamente com seu ferrão.</div>",
        icon: "charms/Quick_Slash.webp"
    },
    {
        name: "Longnail",
        weight: 2,
        label: "Ferrão Longo",
        description: "Aumenta o alcance do ferrão do portador, permitando que ele ataque inimigos de mais longe.",
        icon: "charms/Longnail.webp"
    },
    {
        name: "Mark_of_Pride",
        weight: 3,
        label: "Marca do Orgulho",
        description: "<div>Livremente dado pela Tribo Louva-a-Deus para aqueles que eles respeitam.</div> <div>Aumenta consideravelmente o alcance do ferrão do portador, permitindo-lhe atingir os inimigos de mais longe.</div>",
        icon: "charms/Mark_of_Pride.webp"
    },
    {
        name: "Fury_of_the_Fallen",
        weight: 2,
        label: "Fúria dos Caídos",
        description: "<div>Incorpora a fúria e o heroísmo que vem sobre aqueles que estão prestes a morrer.</div> <div>Quando próximo da morte, a força do portador irá aumentar.</div>",
        icon: "charms/Fury_of_the_Fallen.webp"
    },
    {
        name: "Thorns_of_Agony",
        weight: 1,
        label: "Espinhos da Agonia",
        description: "<div>Sente a dor do seu portador e ataca o mundo ao seu redor.</div> <div>Quando dano é recebido, brotam-se vinhas espinhetas que machucam inimigos próximos.</div>",
        icon: "charms/Thorns_of_Agony.webp"
    },
    {
        name: "Baldur_Shell",
        weight: 2,
        label: "Carapaça de Baldur",
        description: "<div>Protege o portador com uma carapaça dura enquanto estiver focando ALMA.</div> <div>A carapaça não é indestrutível e se quebrará se absorver muito dano.</div>",
        icon: "charms/Baldur_Shell.webp"
    },
    {
        name: "Flukenest",
        weight: 3,
        label: "Ninho de Flukes",
        description: "<div>Um Amuleto vivo que nasceu no intestino de uma Flukemarm.</div> <div>Transforma a magia Espirito Vingativo em uma horda de voláteis bebês flukes.</div>",
        icon: "charms/Flukenest.webp"
    },
    {
        name: "Defenders_Crest",
        weight: 1,
        label: "Insígnia do Defensor",
        description: "<div>Amuleto único concedido pelo Rei de Hallownest ao seu mais leal cavaleiro. Gasto e sujo, mas bem cuidado.</div> <div>O portador irá emitir um odor heróico.</div>",
        icon: "charms/Defenders_Crest.webp"
    },
    {
        name: "Glowing_Womb",
        weight: 2,
        label: "Útero Brilhante",
        description: "<div>Drena a ALMA de seu portador e a ultiliza para parir crias.</div> <div>As crias não desejam comer e nem viver, e se sacrificarão para proteger o seu progenitor.</div>",
        icon: "charms/Glowing_Womb.webp"
    },
    {
        name: "Quick_Focus",
        weight: 3,
        label: "Foco Rápido",
        description: "<div>Um Amuleto que contém uma lente de cristal.</div> <div>Aumenta a velocidade de foco de ALMA, permitindo que o portador se cure mais rapidamente.</div>",
        icon: "charms/Quick_Focus.webp"
    },
    {
        name: "Deep_Focus",
        weight: 4,
        label: "Foco Profundo",
        description: "<div>Naturalmente formado dentro de um cristal durante um longo período. Atrai ALMA do ar que nos rodeia.</div> <div>O portador irá focar ALMA em um ritmo mais lento, mais o efeito de cura será dobrado.</div>",
        icon: "charms/Deep_Focus.webp"
    },
    {
        name: "Lifeblood_Heart",
        weight: 2,
        label: "Coração de Sangue Vital",
        description: "<div>Contém um núcleo vivo que goteja sangue vital precioso.</div> <div>Ao descansar, o portador irá ganhar uma camada de Sangue Vital que lhe protege de uma moderada quantidade de dano.</div>",
        icon: "charms/Lifeblood_Heart.webp"
    },
    {
        name: "Lifeblood_Core",
        weight: 3,
        label: "Núcleo de Sangue Vital",
        description: "<div>Contém um núcleo vivo que derrama sangue vital precioso.</div> <div>Ao descansar, o portador irá ganhar uma camada de Sangue Vital que lhe protege de uma grande quantidade de dano.</div>",
        icon: "charms/Lifeblood_Core.webp"
    },
    {
        name: "Jonis_Blessing",
        weight: 4,
        label: "Bênção de Joni",
        description: "<div>Abençoado por Joni, a gentil herege. Transfigura os fluidos vitais para sangue vital azul.</div> <div>O portador terá uma carapaça mais saudável e poderá receber mais dano, porém ele será incapaz de se curar focando ALMA.</div>",
        icon: "charms/Jonis_Blessing.webp"
    },
    {
        name: "Hiveblood",
        weight: 4,
        label: "Sangue da Colmeia",
        description: "<div>Pepita dourada de um precioso néctar endurecido da Colmeia.</div> <div>Cura as feridas do portador ao longo do tempo, permitindo-o recuperar vida sem focar ALMA.</div>",
        icon: "charms/Hiveblood.webp"
    },
    {
        name: "Spore_Shroom",
        weight: 1,
        label: "Cogumelo com Esporos",
        description: "<div>Composto por fungos vivos. Dispersa esporos em contato com a ALMA.</div> <div>Ao focar a ALMA, emite uma nuvem de esporos que danifica lentamente os inimigos.</div>",
        icon: "charms/Spore_Shroom.webp"
    },
    {
        name: "Sharp_Shadow",
        weight: 2,
        label: "Sombra Afiada",
        description: "<div>Contém um feitiço proibido que transforma as sombras em armas mortais.</div> <div>Ao se utilizar Esquiva Sombria, o corpo do portador se afiará e danificará inimigos.</div>",
        icon: "charms/Sharp_Shadow.webp"
    },
    {
        name: "Shape_of_Unn",
        weight: 2,
        label: "Forma de Unn",
        description: "<div>Revela a forma de Unn dentro do portador.</div> <div>Enquanto estiver focando ALMA, o portador assumirá uma nova forma e poderá se mover livremente para evitar inimigos.</div>",
        icon: "charms/Shape_of_Unn.webp"
    },
    {
        name: "Nailmasters_Glory",
        weight: 1,
        label: "Glória do Metre do Ferrão",
        description: "<div>Contém a paixão, a habilidade e os arrenpedimentos de um Mestre do Ferrão.</div> <div>Aumenta a maestria do portador sob as Artes do Ferrão, permitindo-o focar seus poderes mais rapidamente, e os liberar mais cedo.</div>",
        icon: "charms/Nailmasters_Glory.webp"
    },
    {
        name: "Weaversong",
        weight: 2,
        label: "Canção das Tecelãs",
        description: "<div>Amuleto sedoso contendo uma música de despedida, deixada pelas Tecelãs que partiram de Hallownest para sua antiga casa.</div> <div>Invoca pequenas tecelãs para dar ao portador solitário um pouco de companheirismo e proteção.</div>",
        icon: "charms/Weaversong.webp"
    },
    {
        name: "Dream_Wielder",
        weight: 1,
        label: "Portador dos Sonhos",
        description: "<div>Amuleto transitório criado para aqueles que usam o Ferrão dos Sonhos e coletam Essência.</div> <div>Permite ao portador carregar o Ferrão dos Sonhos mais rapidamente e coletar mais ALMA atingido inimigos.</div>",
        icon: "charms/Dream_Wielder.webp"
    },
    {
        name: "Dreamshield.webp",
        weight: 3,
        label: "Escudo dos Sonhos",
        description: "<div>Amuleto defensivo outrora usado por uma tribo que poderia moldar sonhos.</div> <div>Conjura um escudo que segue o portador e tenta protegê-lo.</div>",
        icon: "charms/Dreamshield.webp"
    },
    {
        name: "Grimmchild",
        weight: 2,
        fireLevel: 3,
        label: "Criança Grimm",
        description: "<div>Usado por aqueles que participam do Ritual da Trupe Grimm.</div> <div>O portador deve buscar os Grimmários e coletar suas chamas. Chamas não coletadas aparecerão no mapa do portador.</div>",
        icon: "charms/Grimmchild.webp"
    },
    {
        name: "Void_Heart",
        weight: 0,
        label: "Coração Vazio",
        description: "<div>Um vazio escondido interiormente, agora sem restrições. Unifica o vazio sob a vontade do portador.</div> <div>Esse Amuleto é uma parte do seu portador e não pode ser desequipado.</div>",
        icon: "charms/Void_Heart.webp"
    }

];
