
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const box5 = document.querySelector(".box5");
    const box6 = document.querySelector(".box6");
    const a1 = document.getElementById('a1')
    const a2 = document.getElementById('a2')
    const a3 = document.getElementById('a3')
    const a4 = document.getElementById('a4')
    const a5 = document.getElementById('a5')
    const a6 = document.getElementById('a6')

    function control(e)
    {
        if(e.keyCode === 82)
        {
            //R
            box4.classList.add("box4p")
            a4.play()
            setTimeout(function ()  {
                box4.classList.remove("box4p")
            },100)
        }
        if(e.keyCode === 84)
        {
            //T
            box5.classList.add('box5p')
            a5.play()
            setTimeout(function ()  {
                box5.classList.remove("box5p")
            },100)

        }
        if(e.keyCode === 89)
        {
            //Y
            box6.classList.add('box6p')
            a6.play()
            setTimeout(function ()  {
                box6.classList.remove("box6p")
            },50)

        }
        if(e.keyCode === 81)
        {
            //Q
            box1.classList.add('box1p')
            a1.play()
            setTimeout(function ()  {
                box1.classList.remove("box1p")
            },100)

        }
        if(e.keyCode === 87)
        {
            //W
            box2.classList.add('box2p')
            a2.play()
            setTimeout(function ()  {
                box2.classList.remove("box2p")
            },100)

        }
        if(e.keyCode === 69)
        {
            //E
            box3.classList.add('box3p')
            a3.play()
            setTimeout(function ()  {
                box3.classList.remove("box3p")
            },100)

        }
    }

    document.addEventListener("keydown", control)

