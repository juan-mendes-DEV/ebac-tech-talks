AOS.init();

const dataDoEvento = new Date("Dec 20, 2023 - 19:00:00");
const timesStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function(){
       const agora = new Date();
       const timeStamAtual = agora.getTime();
       const distanciaAteOEvento = timesStampDoEvento - timeStamAtual;
       const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
       const horasAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
       const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60) / (1000 * 60)));
       const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60) / 1000));
       
       

       document.getElementById('temp').innerHTML = 
       `${diasAteOEvento}d, ${horasAteOEvento}h - ${minutosAteOEvento}m - ${segundosAteOEvento}s `

       if(diasAteOEvento < 0 ){
              clearInterval(contaAsHoras);
              document.getElementById('temp').innerHTML='Evento expirado, mas não se preocupe logo teremos mais.'
       }
},1000);