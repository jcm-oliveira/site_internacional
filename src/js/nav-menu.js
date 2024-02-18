//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("home")

//-----------------------------------------------------------
//QUANDO UM BOTÃO É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO BOTÃO
//-----------------------------------------------------------

function LoadButtonRoutine(){
    
    document.getElementById('button-activated').addEventListener('click', function(e) {

    qualEndereco(e.target.id)}, {once:true})

}

//-----------------------------------------------------------
//QUANDO UM MENU É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO MENU
//-----------------------------------------------------------

function LoadMenuOption(){
    
    document.getElementById('group-menu').addEventListener('click', function(e){
        
    qualEndereco(e.target.id)}, {once:true}) 
    
}

//-------------------------------------------------------------------------------------------------
//DE ACORDO COM O ID CAPTURADO NA FUNÇÃO "LoadMenuOption" ATRIBUI O ENDEREÇO DA PÁGINA A SER ABERTA
//-------------------------------------------------------------------------------------------------

function qualEndereco(routine){

    console.log(routine)
   
    switch(routine){

        //PUBLIC AREA
            case 'home': carregarTela("/src/views/home.html"); break;
        //About Us
            case 'WhoWeAre': carregarTela("/src/views/WhoWeAre.html"); break;
            case 'ChurchHistory': carregarTela("/src/views/ChurchHistory.html"); break;
        //Wordship services
            case 'WorshipServices': carregarTela("/src/views/WorshipServices.html"); break;
        //Contact Us
            case 'ContactUs': carregarTela("/src/views/ContactUs.html"); break;        
        
        default: alert("Esta tela ainda não foi criada..."); break;
        }
        console.log(routine)
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


