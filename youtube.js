var data = [
    {
        imge: 'https://i.ytimg.com/vi/c-NaCU2n8jg/maxresdefault.jpg',
        logo: 'https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo',
        songname: ' aashiqui agayi/radhe shyam/full',
        teamname: ' t series',
        viewer: '44',
        alt: 'radheshyam oster',
        time: '2monts',
        like: 0,
        dislike: 0,
        totalview: 0,
        mints: 2,
        sec: 40,
    },
    {
        imge: 'https://i.ytimg.com/vi/zuaLWHiRXkg/maxresdefault.jpg',
        logo: 'https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo',
        songname: ' Hook Up Song-Student Of The Year 2TigerShroff&Alia|Neha Kakkar',
        teamname: ' t series',
        viewer: '445',
        time: '4 monts',
        like: 0,
        dislike: 0,
        totalview: 0,
        mints: 1,
        sec: 40,
    },
    {
        imge: 'https://i.ytimg.com/vi/vgr2y70Vlk0/maxresdefault.jpg',
        logo: 'https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo',
        songname: 'Guru Randhawa: FASHION Video Song | Latest Punjabi Song 2016 | T-Series',
        teamname: ' t series',
        viewer: '302',
        time: '3weeks ago',
        like: 0,
        dislike: 0,
        totalview: 0,
        mints: 2,
        sec: 15,
    },
    {
        imge: 'https://live.staticflickr.com/5569/14954966565_220a92a501_z.jpg',
        logo: 'https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj-mo',
        songname: 'Desi Kalakaar Full VIDEO Song | Yo Yo Honey Singh | Honey Singh New Songs 2014',
        teamname: ' t series',
        viewer: '196',
        time: '9 yago',
        like: 0,
        dislike: 0,
        totalview: 0,
        mints: 2,
        sec: 30,
    },
]
window.onload = function () {
    addVideos()
}

function addVideos() {

    document.getElementById('video-card').innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        document.getElementById('video-card').innerHTML += `  <section class="col-3">
        <div class="img mt-5">
            <img src="${data[i].imge}" onclick="addviewer(${i})" alt="" class="w-100">
        </div>
        <div class="song-name d-flex ">
            <a href="default.asp"><img src="${data[i].logo}" alt="${data[i].alt}" style="width:42px;height:45px;margin-top: 5px;"></a>
            <strong class="name" style="display: flex; margin-top: 5px; margin-left: 7px;">
               ${data[i].songname}
            </strong>
        </div>
        <div class="d-flex">
            <div class="logo ">
                <p style="margin-top:5px;margin-left: 47px;">${data[i].teamname}<br > <b class="view">${data[i].viewer}</b> views <br>${data[i].time} ago<br>Likes: ${data[i].like}<br>disLikes: ${data[i].dislike}</p>
              
            </div>
            <div class="like ">
            <button onclick="addlike(${i})" style="margin-top: 20px;margin-left: 20px;"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <i class="fa fa-thumbs-up"></i></button> 
            <button onclick="addDislike(${i})" style="margin-top: 20px;margin-left: 20px;"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <i class="fa fa-thumbs-down"></i></button> 
                 
            </div>
        </div>   
    
    </section>`

    }
}
var minute = 0;
var second = 0;
function addviewer(x) {
    var viewer = parseInt(document.getElementById('views').innerText)
    var view = document.getElementsByClassName('view')
    document.getElementById('views').innerText = viewer + 1
    data[x].viewer = parseInt(data[x].viewer) + 1
    minute = parseInt(data[x].mints) + minute; 
    second = parseInt(data[x].sec) + second;
    if (second >= 60) {
        second = second - 60;
        minute = parseInt(minute) + 1;
    }
    document.getElementById('mints').innerText = minute;
    document.getElementById('sec').innerText = second;
    // data[x].mints = parseInt(data[x].mints) + 1
    // addVideos()

    addVideos()
}
function addlike(x) {
    data[x].like += 1
    addVideos()
}

function addDislike(x) {
    data[x].dislike += 1
    addVideos()
}