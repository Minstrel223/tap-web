//适用于哔哩哔哩视频播放页面(部分)

let bili_2 = () => {
    let videoContainer = ["div.bpx-player-video-perch"];
    let bottomBtns = [
        "div.bpx-player-ctrl-quality",
        "div.bpx-player-ctrl-playbackrate",
        "div.bpx-player-ctrl-volume",
        "div.bpx-player-ctrl-setting",
        "div.bpx-player-ctrl-subtitle",
    ];
    TheFun(videoContainer, addTap2);
    TheFun(bottomBtns, addTap1)
}

bili_2();