/*
1. Détectez la position top de l'élément `nav` au chargement de la page et comparez cette valeur avec le scroll vertical de la page.
2. Ajoutez une classe `fixed-nav` au `body` quand le nombre de pixels scrollé est plus grand ou égal à la position `top` de la navigation par rapport à la fenêtre.
3. Afin d'éviter un glissement dû au positionnement `static` de la navigation, ajoutez un `padding` à l'élément `body` pour compenser ce glissement.
*/
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
