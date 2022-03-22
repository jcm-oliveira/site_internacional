
//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("country-insert")

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


