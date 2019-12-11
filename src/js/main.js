(function () {
    const StickyNav = {
        run (){
            document.documentElement.classList.add('js-enabled');
            this.mainNav = document.getElementById('main');
            console.log(this.mainNav);
            this.header = document.querySelector('header');
            console.log(this.header.offsetHeight);

            document.addEventListener('scroll', ()=>{
                //if pixel scolled = 375 (nav top position)
                //console.log("pixel scroll : " + window.scrollY);
                this.stick();
            });
        },
        stick(){
            if (window.scrollY >= this.header.offsetHeight){
                document.body.classList.add('fixed-nav');
                document.body.style.paddingTop = "82px";

            } else {
                document.body.classList.remove('fixed-nav');
                document.body.style.paddingTop = "";
            }
        }
    }
    StickyNav.run();
}
)();