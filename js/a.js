var body = document.body;
//播放按钮
var playPause = document.getElementsByClassName('playPause')[0];

var audio = document.getElementById('audioTag');

var recordImg = document.getElementById('record-img');

var musicData = [
    ['洛春赋'],['Yesteday','Alok/Sofi Tukker'],['江南烟雨色','杨树人']
    ['Vision pt.II','Vicetonre']
];

var musicId = 0;
//初始化音乐
function initMusic(){
    audio.src = `./mp3/music${musicId}.mp3`;
    audio.load();
    recordImg.classList.remove('rotate-play');
    // 当音乐元素数据加载
    audio.onloadedmetadata = function(){
        recordImg.style.backgroundImage = `url('img/record${musicId}.jpg')`;
        body.style.backgroundImage = `url('img/bg${musicId}.png')`;
        refreshRotate();
    };
}

initMusic();
//点击播放按钮
playPause.addEventListener('click',function(){
    if (audio.paused){
        audio.play();
        rotateRrcord();
    }else {
        audio.pause();
        rotateRrcordStop();
    }
});

// 唱片旋转
function rotateRrcord(){
    recordImg.style.animationPlayState = 'running';
}
// 停止旋转
function rotateRrcordStop() {
    recordImg.style.animationPlayState = 'paused';
}
// 刷新旋转角度
function refreshRotate() {
    recordImg.classList.add('rotate-play');
}