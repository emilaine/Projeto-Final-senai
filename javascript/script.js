
gsap.registerPlugin(ScrollTrigger);

gsap.from(".tit", {
    // duração da animação
    duration: 0.7,
    // opacidade que vai começar a animação
    opacity: 0,
    // posicção do y que vai começar os elementos na animação
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe 
    stagger: 0.4
});
gsap.from(".march", {
    duration: 0.9,
    opacity: 0,
    x: 250,
});
gsap.from(".mad", {
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.4,
    delay: 0.5,
    x:250,
});
gsap.from(".final", {
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.4,
    delay: 0.2,
    x:250,
});

