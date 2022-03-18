
//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("login-page")

//-----------------------------------------------------------
//QUANDO UM BOTÃO É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO BOTÃO
//-----------------------------------------------------------

function LoadButtonRoutine(){
    
    document.getElementById('button-activated').addEventListener('click', function(e) {

    qualEndereco(e.target.id)

    }) 
}

//-----------------------------------------------------------
//QUANDO UM MENU É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO MENU
//-----------------------------------------------------------

function LoadMenuOption(){
    
    document.getElementById('group-menu').addEventListener('click', function(e){
        
    qualEndereco(e.target.id)}, {once:true}) 
    
}

//-----------------------------------------------------------
//QUANDO UM ICONE É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO MENU
//-----------------------------------------------------------

function LoadIconMenu(){
    
    document.getElementById('group-icon-menu').addEventListener('click', function(e){
        
    qualEndereco(e.target.id)}, {once:true})
    
}

//-------------------------------------------------------------------------------------------------
//DE ACORDO COM O ID CAPTURADO NA FUNÇÃO "CarregarRotina" ATRIBUI O ENDEREÇO DA PÁGINA A SER ABERTA
//-------------------------------------------------------------------------------------------------

function qualEndereco(rotine){

    
   
    switch(rotine){
        case 'home': carregarTela("/src/views/public-pages/home.html"); break;
        case 'associates': carregarTela("/src/views/public-pages/associates.html"); break;
        case 'worship-services': carregarTela("/src/views/public-pages/worship-services.html"); break;
        case 'announcements': carregarTela("/src/views/public-pages/announcements.html"); break;
        case 'offers': carregarTela("/src/views/public-pages/offers.html"); break;
        //About us
            case 'the-beginning': carregarTela("/src/views/public-pages/about-us/the-beginning.html"); break;
            case 'organization': carregarTela("/src/views/public-pages/about-us/organization.html"); break;
            case 'statistics': carregarTela("/src/views/public-pages/about-us/statistics.html"); break;
            case 'our-history': carregarTela("/src/views/public-pages/about-us/our-history.html"); break;
        //Our Mission
            case 'administrative-principles': carregarTela("/src/views/public-pages/our-mission/administrative-principles.html"); break;
            case 'faith-doctrine': carregarTela("/src/views/public-pages/our-mission/faith-doctrine.html"); break;
            case 'international-conventions': carregarTela("/src/views/public-pages/our-mission/international-conventions.html"); break;
            case 'teachings': carregarTela("/src/views/public-pages/our-mission/teachings.html"); break;

        case 'login-page': carregarTela("/src/views/public-pages/login-page.html"); break;

        default: alert("Esta tela ainda não foi criada..."); break;
        }
        console.log(rotine)
}

//-------------------------------------------------------
// CARREGA A TELA ATRIBUÍDA NA PÁGINA INICIAL (MAIN PAGE)
//-------------------------------------------------------

function carregarTela(tela){

  $(document).ready(function(){
          $(function(){
              $("#page-content").load(tela);
        });
    })
}


