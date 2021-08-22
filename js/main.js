
 
 var $ =document.querySelector.bind(document);
 var $$ = document.querySelectorAll.bind(document);
 

  const player = $('.player');
  const heading = $('header h2');
  const cd_thumb = $('.cd-thumb');
  const audio = $('#audio');
  const togglePlay = $('.btn-toggle-play');
  const range = $('.progress');
  const next = $('.btn-next');
  const prev = $('.btn-prev');
  const random = $('.btn-random');
 
 const apps = { 
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    songs: [
    {
      name: 'Nevada',
      singer: 'Vicetone',
      path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
      image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
    },
    {
      name: 'Light It Up',
      singer: 'Robin Hustin x TobiMorrow',
      path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
    },
    {
      name: 'Yoru ni kakeru',
      singer: 'YOASOBI',
      path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
    },
    {
      name: 'Muộn rồi mà sao còn',
      singer: 'Sơn Tùng M-TP',
      path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
      image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
    },
   
    {
      name: 'Symphony',
      singer: 'Clean Bandit',
      path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
      image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
    },
    {
      name: 'Waiting For Love',
      singer: 'Avicii',
      path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
      image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
    },
    {
      name: 'Alone',
      singer: 'Marshmello',
      path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
      image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
    },
    {
      name: 'Something Just Like This',
      singer: 'The Chainsmokers & Coldplay',
      path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
    },
    {
      name: 'Sugar',
      singer: 'Maroon 5',
      path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
      image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
    }
  ],

  render: function() {
    const htmls = this.songs.map(song =>{
        return `
        <div class="song">
            <div class="thumb" style="background-image: url('${song.image}')">
        </div>
        <div class="body">
            <h3 class="title"${song.name}</h3>
            <p class="author">${song.singer}</p>
        </div>
        <div class="option">
            <i class="fas fa-ellipsis-h"></i>
        </div>
        </div>
        `
    })
    $('.playlist').innerHTML = htmls.join('');
  },

  handleEvent: function() {

    const cd = $('.cd');

    const cdWidth = cd.offsetWidth;

    const cdThumbAnimate = cd_thumb.animate([
      {transform: 'rotate(360deg)'}
    ],
    {
      duration: 10000,
      iterations: Infinity
    }
    )

    cdThumbAnimate.pause()

    document.onscroll = function() {
        const scrollTop = document.documentElement.scrollTop || window.scrollY;
        const newCdWidth = cdWidth - scrollTop;
        
        cd.style.width = newCdWidth>0 ? newCdWidth + 'px': 0;
        cd.style.opacity = newCdWidth/cdWidth;
    }
    togglePlay.onclick = function(){
        if(apps.isPlaying == false){
            apps.isPlaying = true;
            audio.play();
            player.classList.add('playing');
        }else if(apps.isPlaying == true){
            audio.pause();       
        }
    }
    audio.onplay = function(){
        apps.isPlaying =true;
        player.classList.add('playing');
        cdThumbAnimate.play();
    }
    
    audio.onpause = function(){
        apps.isPlaying =false;
        player.classList.remove('playing');
        cdThumbAnimate.pause();
    }

    audio.ontimeupdate = function(){
       range.value = Math.floor( audio.currentTime / audio.duration*100);


    }

    range.onchange = function(e){
      audio.currentTime= audio.duration*(e.target.value/100);
    }

    random.onclick = function(){
      apps.isRandom = !apps.isRandom;
      if(apps.isRandom){
        random.classList.add('active');
      }else{
        random.classList.remove('active');
      }
    }

  },

  loadCurrentSong: function() {
    
    heading.textContent = this.songs[this.currentIndex].name;
    cd_thumb.style.backgroundImage = `url('${this.songs[this.currentIndex].image}')`;
    audio.src = this.songs[this.currentIndex].path;
  },

  getCurrentSong: function() {
        return this.songs[this.currentIndex];
      
  },

  nextEvent: function() {
    next.onclick = function() {

      
        apps.currentIndex++;
      if(apps.currentIndex >= apps.songs.length){
        apps.currentIndex = 0;
      }
      
      apps.loadCurrentSong();
      audio.play();
    }

    prev.onclick = function() {
      apps.currentIndex--;
      if(apps.currentIndex <= 0){
        apps.currentIndex = apps.songs.length -1;
      }
      
      apps.loadCurrentSong();
      audio.play();
    }


  },

  playRandomSong: function() {
    let newIndex;
    do{
      newIndex = Math.floor(Math.random() * apps.songs.length);
    }while(newIndex == apps.currentIndex)
     
    apps.currentIndex = newIndex;
    apps.loadCurrentSong();
  },

  start: function(){
    this.nextEvent()
    this.getCurrentSong();
    this.loadCurrentSong();
    this.handleEvent();
    this.render();
  }


}

apps.start()