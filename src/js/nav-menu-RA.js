
//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("city-search")

//-----------------------------------------------------------
//QUANDO UM BOTÃO É ACIONADO, ESTA FUNÇÃO CAPTURA O ID DO BOTÃO
//-----------------------------------------------------------

function LoadButtonRoutine(){
    
    document.getElementById('button-activated').addEventListener('click', function(e) {

    qualEndereco(e.target.id)}, {once:true})

}

//-----------------------------------------------------------
//LOAD ROUTINE SELECTED IN THE SIDE MENU
//-----------------------------------------------------------

function LoadMenuRA(){
    
    document.getElementById('group-menu-ra').addEventListener('click', function(e){
    
    qualEndereco(e.target.id)}, {once:true})
    
}

//-------------------------------------------------------------------------------------------------
//DE ACORDO COM O ID CAPTURADO NA FUNÇÃO "LoadMenuRA" ATRIBUI O ENDEREÇO DA PÁGINA A SER ABERTA
//-------------------------------------------------------------------------------------------------

function qualEndereco(routine){

    console.log(routine)
   
    switch(routine){

        //RESTRICTED AREA
        //Configuration
        case 'country-search': carregarTela("/src/views/restricted-area/configuration/country-search.html"); break;
        case 'country-insert': carregarTela("/src/views/restricted-area/configuration/country-insert.html"); break;
        case 'region-search': carregarTela("/src/views/restricted-area/configuration/region-search.html"); break;
        case 'region-insert': carregarTela("/src/views/restricted-area/configuration/region-insert.html"); break;
        case 'state-search': carregarTela("/src/views/restricted-area/configuration/state-search.html"); break;
        case 'state-insert': carregarTela("/src/views/restricted-area/configuration/state-insert.html"); break;
        case 'city-search': carregarTela("/src/views/restricted-area/configuration/city-search.html"); break;
        case 'city-insert': carregarTela("/src/views/restricted-area/configuration/city-insert.html"); break;

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


