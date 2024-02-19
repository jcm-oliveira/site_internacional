
qualEndereco("home")

function LoadButtonRoutine(){
    
    document.getElementById('button-activated').addEventListener('click', function(e) {

    qualEndereco(e.target.id)}, {once:true})

}

function LoadMenuOption(){
    
    document.getElementById('group-menu').addEventListener('click', function(e){
        
    qualEndereco(e.target.id)}, {once:true}) 
    
}

function qualEndereco(routine){

    console.log(routine)
   
    switch(routine){

        //PUBLIC AREA
            case 'Home': carregarTela("/src/views/Home.html"); break;
        //About Us
            case 'By-Laws1996': carregarTela("/src/views/By-Laws1996.html"); break;
        //Wordship services
            case 'WorshipServices': carregarTela("/src/views/WorshipServices.html"); break;
        //Contact Us
            case 'ContactUs': carregarTela("/src/views/ContactUs.html"); break;        
        
        default: alert("Esta tela ainda não foi criada..."); break;

        }
        console.log(routine)
}

function carregarTela(tela){

  $(document).ready(function(){
          $(function(){
              $("#page-content").load(tela);
        });
    })
}


