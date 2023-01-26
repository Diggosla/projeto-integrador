class TypeWriter {

    constructor(txtElement, words, wait = 3000) {

        this.txtElement = txtElement;

        this.words = words;

        this.txt = '';

        this.wordIndex = 0;

        this.wait = parseInt(wait, 10);

        this.type();

        this.isDeleting = false;

    }





    type() {

        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];


        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);

        } else {

            this.txt = fullTxt.substring(0, this.txt.length + 1);

        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;

        const typingElement = document.querySelector('.fas');



        if (this.isDeleting) {

            typeSpeed /= 4;

        }



        if (this.isDeleting) {

            typingElement.className = "fas fa-pencil-alt erasing-animation";

        } else {

            typingElement.className = "fas fa-pencil-alt writing-animation";

        }

        if (!this.isDeleting && this.txt === fullTxt) {

            typeSpeed = this.wait;
            this.isDeleting = true;
            typingElement.className = "fas fa-pencil-alt";

        } else if (this.isDeleting && this.txt === '') {

            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 2500;



        }



        setTimeout(() => this.type(), typeSpeed)

    }

}



document.addEventListener('DOMContentLoaded', init);





function init() {

    const txtElement = document.querySelector('.txt-type');



    const words = [' Papelaria novo mundo', 'Papelaria novo mundo'];







    const wait = 2500;



    new TypeWriter(txtElement, words, wait);

}





function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];


    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0; if (estrela == 5) {
        if (s5 == url + "img/staroff.png") {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/star.png";
            document.getElementById("s4").src = "img/star.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/star.png";
            document.getElementById("s4").src = "img/star.png";
            document.getElementById("s5").src = "img/star.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4 

    if (estrela == 4) {
        if (s4 == url + "img/staroff.png") {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/star.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";

            avaliacao = 4;

        } else {
            document.getElementById("s1").src = "img/star.png";
             document.getElementById("s2").src = "img/star.png";
              document.getElementById("s3").src = "img/star.png";
               document.getElementById("s4").src = "img/star.png"; 
               document.getElementById("s5").src = "img/staroff.png"; avaliacao = 3;
        }

    }

    //ESTRELA 3

    if (estrela == 3) {
        if (s3 == url + "img/staroff.png") {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/staroff.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 3;

        } else {

            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/star.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";

            avaliacao = 2;

        }
    }

    //ESTRELA 2

    if (estrela == 2) {
        if (s2 == url + "img/staroff.png") {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/staroff.png";
            document.getElementById("s3").src = "img/staroff.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/star.png";
            document.getElementById("s3").src = "img/staroff.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1

    if (estrela == 1) {
        if (s1 == url + "img/staroff.png") {
            document.getElementById("s1").src = "img/staroff.png";
            document.getElementById("s2").src = "img/staroff.png";
            document.getElementById("s3").src = "img/staroff.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "img/star.png";
            document.getElementById("s2").src = "img/staroff.png";
            document.getElementById("s3").src = "img/staroff.png";
            document.getElementById("s4").src = "img/staroff.png";
            document.getElementById("s5").src = "img/staroff.png";
            avaliacao = 0;
        }
    } document.getElementById('rating').innerHTML = avaliacao;
}

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });