
//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("home")

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


//-------------------------------------------------------------------------------------------------
//DE ACORDO COM O ID CAPTURADO NA FUNÇÃO "CarregarRotina" ATRIBUI O ENDEREÇO DA PÁGINA A SER ABERTA
//-------------------------------------------------------------------------------------------------

function qualEndereco(rotine){

    console.log(rotine)
   
    switch(rotine){
        case 'home': carregarTela("/src/views/home.html"); break;
        case 'associates': carregarTela("/src/views/associates.html"); break;
        case 'worship-services': carregarTela("/src/views/worship-services.html"); break;
        case 'announcements': carregarTela("/src/views/announcements.html"); break;
        case 'offers': carregarTela("/src/views/offers.html"); break;
        default: alert("Esta tela ainda não foi criada..."); break;
        }
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


