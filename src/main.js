AOS.init();

const dataDoEvento = new Date("Dec 20, 2023 - 19:00:00");
const timesStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function(){
       const agora = new Date();
       const timeStamAtual = agora.getTime();
       const diasEmMs = 1000 * 60 * 60 * 24;
       const horaEmMs = 1000 * 60 * 60;
       const minutosEmMs = 1000 * 60;
       const distanciaAteOEvento = timesStampDoEvento - timeStamAtual;
       const diasAteOEvento = Math.floor(distanciaAteOEvento / (diasEmMs));
       const horasAteOEvento = Math.floor((distanciaAteOEvento % (diasEmMs) / (horaEmMs)));
       const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
       const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);
       document.getElementById('temp').innerHTML = 
       `${diasAteOEvento}d, ${horasAteOEvento}h - ${minutosAteOEvento}m - ${segundosAteOEvento}s `

       if(diasAteOEvento < 0 ){
              clearInterval(contaAsHoras);
              document.getElementById('temp').innerHTML='Evento expirado, mas não se preocupe logo teremos mais.'
       }
},1000);