
//---------------------------------------------------------------------
//DASHBOARD CARREGADO AUTOMATICAMENTE QUANDO O USUÁRIO LOGA NO SISTEMA
//---------------------------------------------------------------------

qualEndereco("INT0101_Dashboard")

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
    
    document.getElementById('grupo-menu').addEventListener('click', function(e){
        
    qualEndereco(e.target.id)}, {once:true}) 
    
}


//-------------------------------------------------------------------------------------------------
//DE ACORDO COM O ID CAPTURADO NA FUNÇÃO "CarregarRotina" ATRIBUI O ENDEREÇO DA PÁGINA A SER ABERTA
//-------------------------------------------------------------------------------------------------

function qualEndereco(rotina){
   
    switch(rotina){
        case 'INT0101_Dashboard': carregarTela("/views/Interface/INT0101_Dashboard.html"); break;
        case 'PAR0100_Consult': carregarTela("/views/Parametrizacoes/AreasVida/PAR0100_Consult.html"); break;
        case 'PAR0101_Insert': carregarTela("/views/Parametrizacoes/AreasVida/PAR0101_Insert.html"); break;
        case 'PAR0102_Edit': carregarTela("//views/Parametrizacoes/AreasVida/PAR0102_Edit.html"); break;
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


