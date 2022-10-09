let i=0 ;
    
    $('.slideroom').click(function(){
       $('.activeroom').addClass('nonActive').find('span').empty()
        $(this).removeClass('nonActive').addClass('activeroom')
        i= $(this).index()
    })
    
    setItner = setInterval(go,4000);
    
    function go(){
       $('.activeroom').addClass('nonActive').find('span').empty()
        $($('.slideroom')[i%6]).removeClass('nonActive').addClass('activeroom')
        i++;
    }
    
    