//modal
$(".learn-more").click(function () {
  var item = $(this).val();
  $(`#modal-${item}`).removeAttr("class").addClass('modal_container one');
  $("body").addClass("modal-active");
  let sliderTo = `#slider-${item}`;
  slider(sliderTo);
});

$(".close_btn").click(function () {
  $('.modal_container').addClass("out");
  $("body").removeClass("modal-active");
});


//slide
function slider(slider){
    var slides = $(`${slider} .slide-items`).children();
    var totalSlides = slides.length;
    var index = 0;

    $(`${slider} .right-slide`).click(()=>{
        Slide("next");
    })

    $(`${slider} .left-slide`).click(()=>{
        Slide("prev");
    })

    setInterval(autoPlay, 10000);

    function autoPlay(){
        index++;
        if(index == totalSlides){
            index=0;
        }
        $('.img').removeClass('slide-right')
        $('.img').addClass('slide-left')

        for(i=0; i<slides.length; i++){
            slides[i].classList.remove('active');
        }
        slides[index].classList.add('active');
    }

    function Slide(direction){

        if(direction == "next"){
            index++;
            if(index == totalSlides){
                index=0;
            }

            $('.img').removeClass('slide-right')
            $('.img').addClass('slide-left')
        } else{
            if(index==0){
                index = totalSlides - 1;
            } else{
                index--;
            }

            $('.img').removeClass('slide-left')
            $('.img').addClass('slide-right')
        }

        for(i=0; i<slides.length; i++){
            slides[i].classList.remove('active');
        }
        slides[index].classList.add('active');
    }
}
