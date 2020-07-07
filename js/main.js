{
    const modalbox=document.querySelectorAll('.modalbox');
    const mask = document.getElementById('mask');
    const detail_btn = document.querySelectorAll('.detail_btn');
    const close_btn = document.querySelectorAll('.close_btn');
    const x_btn = document.querySelectorAll('.x_btn');
    const movies =document.querySelectorAll('video');

    function create_arr(str1 , str2) {
        const arr = [
            `images/${str1}/${str2}pic1.jpg`,
            `images/${str1}/${str2}pic2.jpg`,
            `images/${str1}/${str2}pic3.jpg`,
            `images/${str1}/${str2}pic4.jpg`,
            `images/${str1}/${str2}pic5.jpg`,
            `images/${str1}/${str2}pic6.jpg`,
        ];
        return arr;
    }
    console.log(close_btn);

    //モーダルウィンドウ_______________________________________________________________________________
    modalbox.forEach((val,index)=> {
        detail_btn[index].addEventListener('click', () => {
            val.classList.add('fadein');
            val.classList.remove('fadeout');
            mask.classList.remove('hidden'); 
            setTimeout(function(){
                val.style.display = "inline"; 
            }, 100);
        },false);
        close_btn[index].addEventListener('click', () => {
            val.classList.add('fadeout');
            val.classList.remove('fadein');
            mask.classList.add('hidden'); 
            setTimeout(function(){
                val.style.display = "none"; 
            }, 1000);
            if(movies[index] != null){
                movies[index].pause();
            }
        },false);
        x_btn[index].addEventListener('click', () => {
            close_btn[index].click();
        });
    });
    //____________________________________________________________________________________________________

    //スライド_____________________________________________________________________________________________
    function slide(Images , currentIndex , MainImage , thumbnails_li , thumbnails) {
        Images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            const li = document.createElement('li');
            if (index === currentIndex) {
                li.classList.add('current');
            }
            li.addEventListener('click', () => {
                MainImage.src = image;
                thumbnails_li=document.querySelectorAll(thumbnails +'> li');
                const nails_li =thumbnails_li;
                nails_li[currentIndex].classList.remove('current');
                currentIndex=index;
                nails_li[currentIndex].classList.add('current');
            });
            li.appendChild(img);
            document.querySelector(thumbnails).appendChild(li);
        });
    }
    //ts8330------------------------------------------------------------------------------
    const ts8330_Images =create_arr("canon" , "ts8330");
    let ts8330_currentIndex = 0;
    const ts8330_MainImage = document.getElementById('ts8330_main');
    ts8330_MainImage.src = ts8330_Images[ts8330_currentIndex];
    const ts8330_thumbnails_li ="";
    slide(ts8330_Images,ts8330_currentIndex,ts8330_MainImage,ts8330_thumbnails_li,'#ts8330_thumbnails');
    //ep812------------------------------------------------------------------------------
    const ep812_Images =create_arr("epson" , "ep812");
    let ep812_currentIndex = 0;
    const ep812_MainImage = document.getElementById('ep812_main');
    ep812_MainImage.src = ep812_Images[ep812_currentIndex];
    const ep812_thumbnails_li ="";
    slide(ep812_Images,ep812_currentIndex,ep812_MainImage,ep812_thumbnails_li,'#ep812_thumbnails');
    //dcp582------------------------------------------------------------------------------
    const dcp582_Images = create_arr("brother" , "dcp582");
    let dcp582_currentIndex = 0;
    const dcp582_MainImage = document.getElementById('dcp582_main');
    dcp582_MainImage.src = dcp582_Images[dcp582_currentIndex];
    const dcp582_thumbnails_li ="";
    slide(dcp582_Images,dcp582_currentIndex,dcp582_MainImage,dcp582_thumbnails_li,'#dcp582_thumbnails');
    //officejet250-----------------------------------------------------------------------
    const officejet250_Images = create_arr("hp" , "officejet250");
    let officejet250_currentIndex = 0;
    const officejet250_MainImage = document.getElementById('officejet250_main');
    officejet250_MainImage.src = officejet250_Images[officejet250_currentIndex];
    const officejet250_thumbnails_li ="";
    slide(officejet250_Images,officejet250_currentIndex,officejet250_MainImage,officejet250_thumbnails_li,'#officejet250_thumbnails');
    //ew_m770t---------------------------------------------------------------------------------
    const ew_m770t_Images = create_arr("epson" , "ew_m770t");
    let ew_m770t_currentIndex = 0;
    const ew_m770t_MainImage = document.getElementById('ew_m770t_main');
    ew_m770t_MainImage.src = ew_m770t_Images[ew_m770t_currentIndex];
    const ew_m770t_thumbnails_li ="";
    slide(ew_m770t_Images,ew_m770t_currentIndex,ew_m770t_MainImage,ew_m770t_thumbnails_li,'#ew_m770t_thumbnails');
    //dcp988------------------------------------------------------------------------------------------
    const dcp988_Images = create_arr("brother" , "dcp988");
    let dcp988_currentIndex = 0;
    const dcp988_MainImage = document.getElementById('dcp988_main');
    dcp988_MainImage.src = dcp988_Images[dcp988_currentIndex];
    const dcp988_thumbnails_li ="";
    slide(dcp988_Images,dcp988_currentIndex,dcp988_MainImage,dcp988_thumbnails_li,'#dcp988_thumbnails');
    //tr703------------------------------------------------------------------------------------------
    const tr703_Images = create_arr("canon" , "tr703");
    let tr703_currentIndex = 0;
    const tr703_MainImage = document.getElementById('tr703_main');
    tr703_MainImage.src = tr703_Images[tr703_currentIndex];
    const tr703_thumbnails_li ="";
    slide(tr703_Images,tr703_currentIndex,tr703_MainImage,tr703_thumbnails_li,'#tr703_thumbnails');
    //ix6830-------------------------------------------------------------------------------------------
    const ix6830_Images = create_arr("canon" , "ix6830");
    let ix6830_currentIndex = 0;
    const ix6830_MainImage = document.getElementById('ix6830_main');
    ix6830_MainImage.src = ix6830_Images[ix6830_currentIndex];
    const ix6830_thumbnails_li ="";
    slide(ix6830_Images,ix6830_currentIndex,ix6830_MainImage,ix6830_thumbnails_li,'#ix6830_thumbnails');
    //mfc_l8610---------------------------------------------------------------------------------------
    const mfc_l8610_Images =create_arr("brother" , "mfc_l8610");
    let mfc_l8610_currentIndex = 0;
    const mfc_l8610_MainImage = document.getElementById('mfc_l8610_main');
    mfc_l8610_MainImage.src = mfc_l8610_Images[mfc_l8610_currentIndex];
    const mfc_l8610_thumbnails_li ="";
    slide(mfc_l8610_Images,mfc_l8610_currentIndex,mfc_l8610_MainImage,mfc_l8610_thumbnails_li,'#mfc_l8610_thumbnails');
    //hl_l3230------------------------------------------------------------------------------------------------
    const hl_l3230_Images = create_arr("brother" , "hl_l3230");
    let hl_l3230_currentIndex = 0;
    const hl_l3230_MainImage = document.getElementById('hl_l3230_main');
    hl_l3230_MainImage.src = hl_l3230_Images[hl_l3230_currentIndex];
    const hl_l3230_thumbnails_li ="";
    slide(hl_l3230_Images,hl_l3230_currentIndex,hl_l3230_MainImage,hl_l3230_thumbnails_li,'#hl_l3230_thumbnails');
    //lbp6030-----------------------------------------------------------------------------------------
    const lbp6030_Images = create_arr("canon" , "lbp6030");
    let lbp6030_currentIndex = 0;
    const lbp6030_MainImage = document.getElementById('lbp6030_main');
    lbp6030_MainImage.src = lbp6030_Images[lbp6030_currentIndex];
    const lbp6030_thumbnails_li ="";
    slide(lbp6030_Images,lbp6030_currentIndex,lbp6030_MainImage,lbp6030_thumbnails_li,'#lbp6030_thumbnails');
    //cp1300--------------------------------------------------------------------------------------------
    const cp1300_Images = create_arr("canon" , "cp1300");
    let cp1300_currentIndex = 0;
    const cp1300_MainImage = document.getElementById('cp1300_main');
    cp1300_MainImage.src = cp1300_Images[cp1300_currentIndex];
    const cp1300_thumbnails_li ="";
    slide(cp1300_Images,cp1300_currentIndex,cp1300_MainImage,cp1300_thumbnails_li,'#cp1300_thumbnails');
    //ft157---------------------------------------------------------------------------------------------------
    const ft157_Images = create_arr("other" , "ft157");
    let ft157_currentIndex = 0;
    const ft157_MainImage = document.getElementById('ft157_main');
    ft157_MainImage.src = ft157_Images[ft157_currentIndex];
    const ft157_thumbnails_li ="";
    slide(ft157_Images,ft157_currentIndex,ft157_MainImage,ft157_thumbnails_li,'#ft157_thumbnails');
    //px_s06---------------------------------------------------------------------------------------
    const px_s06_Images = create_arr("epson" , "px_s06");
    let px_s06_currentIndex = 0;
    const px_s06_MainImage = document.getElementById('px_s06_main');
    px_s06_MainImage.src = px_s06_Images[px_s06_currentIndex];
    const px_s06_thumbnails_li ="";
    slide(px_s06_Images,px_s06_currentIndex,px_s06_MainImage,px_s06_thumbnails_li,'#px_s06_thumbnails');
    //_________________________________________________________________________________________________
    const top_btn =document.getElementById('top_btn');
    window.addEventListener('scroll', ()=>{
        // console.log(window.scrollY.toFixed(0));
        if(window.scrollY >= 800) {
            top_btn.classList.add('fadein');
            top_btn.classList.remove('fadeout');
            setTimeout(function(){
                top_btn.style.display = "inline"; 
            }, 1000);
        } else {
            top_btn.classList.remove('fadein');
            top_btn.classList.add('fadeout');
            setTimeout(function(){
                top_btn.style.display = "none"; 
            }, 1000);
        }
    });
    top_btn.addEventListener('click', ()=> {
        window.scrollTo(0,0);
    });
}
