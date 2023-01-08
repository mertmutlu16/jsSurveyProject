const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.questions');
const sonucEkrani=document.querySelector('#gosterim');

form.addEventListener('submit', e=>{
    e.preventDefault();
    //console.log(form.q1.value,form.q2.value,form.q3.value,form.q4.value);
    let score = 0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,];
    //console.log(userAnswers);
    userAnswers.forEach((answer,index) =>{
        if(answer == correctAnswers[index]){            
            score +=25;
        }
    })

    //console.log(sonucEkrani);
    sonucEkrani.classList.remove('d-none');
   // sonucEkrani.querySelector('.scoreYaz').textContent= `${score}%`;


    let i=0;

    const bastir= setInterval(()=>{
        //console.log(i+"%");
        sonucEkrani.querySelector('.scoreYaz').textContent= `${i}%`;
        i++
        if(i > score){
            clearInterval(bastir);
        }

    },25);


    

})

/*
ogrenciler = ['mert' , 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can', 'ahmet', 'can'];

ogrenciler.forEach(isim=>{
    console.log(isim);
})

*/