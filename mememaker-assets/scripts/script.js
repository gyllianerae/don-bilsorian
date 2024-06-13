const bodyList = document.getElementById('body-list');
const headList = document.getElementById('head-list');
const hatList = document.getElementById('hat-list');
const topList = document.getElementById('acc-list');
const bgList = document.getElementById('bg-list');
const clothesList = document.getElementById('clothes-list');

var current_body = undefined;
var current_head = undefined;
var current_hat = undefined;
var current_acc = undefined;
var current_bg = undefined;
var current_clothes = undefined;

var selected_body = 0;
var selected_head = 1;
var selected_hat = 0;
var selected_acc = 0;
var selected_bg = 0;
var selected_clothes = 1;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'head':
            current_head = image;
            break;
        case 'hat':
            current_hat = image;
            break;
        case 'acc':
            current_acc = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'clothes':
            current_clothes = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'head':
            return selected_head;
        case 'hat':
            return selected_hat;
        case 'acc':
            return selected_acc;
        case 'bg':
            return selected_bg;
        case 'clothes':
            return selected_clothes;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'head':
            selected_head = idx;
            break;
        case 'hat':
            selected_hat = idx;
            break;
        case 'acc':
            selected_acc = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'clothes':
            selected_clothes = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}

AddParts(bodyList, 'body',0, 'mememaker-assets/img/icons/icon-0.png', 'mememaker-assets/img/don.png', true);

AddParts(headList, 'head',0, 'mememaker-assets/img/icons/icon-0.png', 'mememaker-assets/img/chicken/0.png');
AddParts(headList, 'head',1, 'mememaker-assets/img/icons/icon-1.png', 'mememaker-assets/img/chicken/1.png', true);
AddParts(headList, 'head',2, 'mememaker-assets/img/icons/icon-2.png', 'mememaker-assets/img/chicken/2.png');
AddParts(headList, 'head',3, 'mememaker-assets/img/icons/icon-3.png', 'mememaker-assets/img/chicken/3.png');
AddParts(headList, 'head',4, 'mememaker-assets/img/icons/icon-4.png', 'mememaker-assets/img/chicken/4.png');
AddParts(headList, 'head',5, 'mememaker-assets/img/icons/icon-5.png', 'mememaker-assets/img/chicken/5.png');
AddParts(headList, 'head',6, 'mememaker-assets/img/icons/icon-6.png', 'mememaker-assets/img/chicken/6.png');
AddParts(headList, 'head',7, 'mememaker-assets/img/icons/icon-7.png', 'mememaker-assets/img/chicken/7.png');
AddParts(headList, 'head',8, 'mememaker-assets/img/icons/icon-8.png', 'mememaker-assets/img/chicken/8.png');
AddParts(headList, 'head',9, 'mememaker-assets/img/icons/icon-9.png', 'mememaker-assets/img/chicken/9.png');

AddParts(hatList, 'hat',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(hatList, 'hat',1, 'mememaker-assets/img/icons/icon-head001.png', 'mememaker-assets/img/head/head001.png');
AddParts(hatList, 'hat',2, 'mememaker-assets/img/icons/icon-head002.png', 'mememaker-assets/img/head/head002.png');
AddParts(hatList, 'hat',3, 'mememaker-assets/img/icons/icon-head003.png', 'mememaker-assets/img/head/head003.png');
AddParts(hatList, 'hat',4, 'mememaker-assets/img/icons/icon-head004.png', 'mememaker-assets/img/head/head004.png');
AddParts(hatList, 'hat',5, 'mememaker-assets/img/icons/icon-head005.png', 'mememaker-assets/img/head/head005.png');
AddParts(hatList, 'hat',6, 'mememaker-assets/img/icons/icon-head006.png', 'mememaker-assets/img/head/head006.png');
AddParts(hatList, 'hat',7, 'mememaker-assets/img/icons/icon-head007.png', 'mememaker-assets/img/head/head007.png');
AddParts(hatList, 'hat',8, 'mememaker-assets/img/icons/icon-head008.png', 'mememaker-assets/img/head/head008.png');
AddParts(hatList, 'hat',9, 'mememaker-assets/img/icons/icon-head009.png', 'mememaker-assets/img/head/head009.png');
AddParts(hatList, 'hat',10, 'mememaker-assets/img/icons/icon-head010.png', 'mememaker-assets/img/head/head010.png');
AddParts(hatList, 'hat',11, 'mememaker-assets/img/icons/icon-head011.png', 'mememaker-assets/img/head/head011.png');
AddParts(hatList, 'hat',12, 'mememaker-assets/img/icons/icon-head012.png', 'mememaker-assets/img/head/head012.png');
AddParts(hatList, 'hat',13, 'mememaker-assets/img/icons/icon-head013.png', 'mememaker-assets/img/head/head013.png');
AddParts(hatList, 'hat',14, 'mememaker-assets/img/icons/icon-head014.png', 'mememaker-assets/img/head/head014.png');
AddParts(hatList, 'hat',15, 'mememaker-assets/img/icons/icon-head015.png', 'mememaker-assets/img/head/head015.png');
AddParts(hatList, 'hat',16, 'mememaker-assets/img/icons/icon-head016.png', 'mememaker-assets/img/head/head016.png');
AddParts(hatList, 'hat',17, 'mememaker-assets/img/icons/icon-head017.png', 'mememaker-assets/img/head/head017.png');
AddParts(hatList, 'hat',18, 'mememaker-assets/img/icons/icon-head018.png', 'mememaker-assets/img/head/head018.png');
AddParts(hatList, 'hat',19, 'mememaker-assets/img/icons/icon-head019.png', 'mememaker-assets/img/head/head019.png');

AddParts(topList, 'acc',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(topList, 'acc',1, 'mememaker-assets/img/icons/icon-top001.png', 'mememaker-assets/img/top/top001.png');
AddParts(topList, 'acc',2, 'mememaker-assets/img/icons/icon-top002.png', 'mememaker-assets/img/top/top002.png');
AddParts(topList, 'acc',3, 'mememaker-assets/img/icons/icon-top003.png', 'mememaker-assets/img/top/top003.png');
AddParts(topList, 'acc',4, 'mememaker-assets/img/icons/icon-top004.png', 'mememaker-assets/img/top/top004.png');
AddParts(topList, 'acc',5, 'mememaker-assets/img/icons/icon-top005.png', 'mememaker-assets/img/top/top005.png');
// AddParts(topList, 'acc',6, 'mememaker-assets/img/icons/icon-top006.png', 'mememaker-assets/img/top/top006.png');
AddParts(topList, 'acc',7, 'mememaker-assets/img/icons/icon-top007.png', 'mememaker-assets/img/top/top007.png');
AddParts(topList, 'acc',8, 'mememaker-assets/img/icons/icon-top008.png', 'mememaker-assets/img/top/top008.png');
AddParts(topList, 'acc',9, 'mememaker-assets/img/icons/icon-top009.png', 'mememaker-assets/img/top/top009.png');
AddParts(topList, 'acc',10, 'mememaker-assets/img/icons/icon-top010.png', 'mememaker-assets/img/top/top010.png');
AddParts(topList, 'acc',11, 'mememaker-assets/img/icons/icon-top011.png', 'mememaker-assets/img/top/top011.png');
AddParts(topList, 'acc',12, 'mememaker-assets/img/icons/icon-top012.png', 'mememaker-assets/img/top/top012.png');
AddParts(topList, 'acc',13, 'mememaker-assets/img/icons/icon-top013.png', 'mememaker-assets/img/top/top013.png');
AddParts(topList, 'acc',14, 'mememaker-assets/img/icons/icon-top014.png', 'mememaker-assets/img/top/top014.png');
AddParts(topList, 'acc',16, 'mememaker-assets/img/icons/icon-top016.png', 'mememaker-assets/img/top/top016.png');
AddParts(topList, 'acc',17, 'mememaker-assets/img/icons/icon-top017.png', 'mememaker-assets/img/top/top017.png');

AddParts(clothesList, 'clothes',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(clothesList, 'clothes', 1, 'mememaker-assets/img/icons/clothes/001.png', 'mememaker-assets/img/clothes/001.png');
AddParts(clothesList, 'clothes', 2, 'mememaker-assets/img/icons/clothes/002.png', 'mememaker-assets/img/clothes/002.png');
AddParts(clothesList, 'clothes', 3, 'mememaker-assets/img/icons/clothes/003.png', 'mememaker-assets/img/clothes/003.png');
AddParts(clothesList, 'clothes', 4, 'mememaker-assets/img/icons/clothes/004.png', 'mememaker-assets/img/clothes/004.png');
AddParts(clothesList, 'clothes', 5, 'mememaker-assets/img/icons/clothes/005.png', 'mememaker-assets/img/clothes/005.png');
AddParts(clothesList, 'clothes', 6, 'mememaker-assets/img/icons/clothes/006.png', 'mememaker-assets/img/clothes/006.png');
AddParts(clothesList, 'clothes', 7, 'mememaker-assets/img/icons/clothes/007.png', 'mememaker-assets/img/clothes/007.png');
AddParts(clothesList, 'clothes', 8, 'mememaker-assets/img/icons/clothes/008.png', 'mememaker-assets/img/clothes/008.png');
AddParts(clothesList, 'clothes', 9, 'mememaker-assets/img/icons/clothes/009.png', 'mememaker-assets/img/clothes/009.png');
AddParts(clothesList, 'clothes', 10, 'mememaker-assets/img/icons/clothes/010.png', 'mememaker-assets/img/clothes/010.png');
AddParts(clothesList, 'clothes', 11, 'mememaker-assets/img/icons/clothes/011.png', 'mememaker-assets/img/clothes/011.png');
AddParts(clothesList, 'clothes', 12, 'mememaker-assets/img/icons/clothes/012.png', 'mememaker-assets/img/clothes/012.png');
AddParts(clothesList, 'clothes', 13, 'mememaker-assets/img/icons/clothes/013.png', 'mememaker-assets/img/clothes/013.png');
AddParts(clothesList, 'clothes', 14, 'mememaker-assets/img/icons/clothes/014.png', 'mememaker-assets/img/clothes/014.png');
AddParts(clothesList, 'clothes', 15, 'mememaker-assets/img/icons/clothes/015.png', 'mememaker-assets/img/clothes/015.png');
AddParts(clothesList, 'clothes', 16, 'mememaker-assets/img/icons/clothes/016.png', 'mememaker-assets/img/clothes/016.png');
AddParts(clothesList, 'clothes', 17, 'mememaker-assets/img/icons/clothes/017.png', 'mememaker-assets/img/clothes/017.png');
AddParts(clothesList, 'clothes', 18, 'mememaker-assets/img/icons/clothes/018.png', 'mememaker-assets/img/clothes/018.png');

// AddParts(bgList, 'bg',1, 'mememaker-assets/img/icons/icon-bg1.png', 'mememaker-assets/img/background/bg1.png', true);
AddParts(bgList, 'bg',2, 'mememaker-assets/img/icons/icon-bg2.png', 'mememaker-assets/img/background/bg2.png', true);
AddParts(bgList, 'bg',3, 'mememaker-assets/img/icons/icon-bg3.png', 'mememaker-assets/img/background/bg3.png');
// AddParts(bgList, 'bg',4, 'mememaker-assets/img/icons/icon-bg4.png', 'mememaker-assets/img/background/bg4.png');
AddParts(bgList, 'bg',5, 'mememaker-assets/img/icons/icon-bg5.png', 'mememaker-assets/img/background/bg5.png');
// AddParts(bgList, 'bg',6, 'mememaker-assets/img/icons/icon-bg6.png', 'mememaker-assets/img/background/bg6.png');
AddParts(bgList, 'bg',7, 'mememaker-assets/img/icons/icon-bg7.png', 'mememaker-assets/img/background/bg7.png');
// AddParts(bgList, 'bg',8, 'mememaker-assets/img/icons/icon-bg8.png', 'mememaker-assets/img/background/bg8.png');
// AddParts(bgList, 'bg',9, 'mememaker-assets/img/icons/icon-bg9.png', 'mememaker-assets/img/background/bg9.png');
// AddParts(bgList, 'bg',10, 'mememaker-assets/img/icons/icon-bg10.png', 'mememaker-assets/img/background/bg10.png');
// AddParts(bgList, 'bg',11, 'mememaker-assets/img/icons/icon-bg11.png', 'mememaker-assets/img/background/bg11.png');
// AddParts(bgList, 'bg',12, 'mememaker-assets/img/icons/icon-bg12.png', 'mememaker-assets/img/background/bg12.png');
// AddParts(bgList, 'bg',13, 'mememaker-assets/img/icons/icon-bg13.png', 'mememaker-assets/img/background/bg13.png');
// AddParts(bgList, 'bg',14, 'mememaker-assets/img/icons/icon-bg14.png', 'mememaker-assets/img/background/bg14.png');
// AddParts(bgList, 'bg',15, 'mememaker-assets/img/icons/icon-bg15.png', 'mememaker-assets/img/background/bg15.png');
// AddParts(bgList, 'bg',16, 'mememaker-assets/img/icons/icon-bg16.png', 'mememaker-assets/img/background/bg16.png');
// AddParts(bgList, 'bg',17, 'mememaker-assets/img/icons/icon-bg17.png', 'mememaker-assets/img/background/bg17.png');
// AddParts(bgList, 'bg',18, 'mememaker-assets/img/icons/icon-bg18.png', 'mememaker-assets/img/background/bg18.png');
// AddParts(bgList, 'bg',19, 'mememaker-assets/img/icons/icon-bg19.png', 'mememaker-assets/img/background/bg19.png');








const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_head != undefined) {
        context.drawImage(current_head, 0, 0, 400, 400 );
    }

    if(current_acc != undefined) {
        context.drawImage(current_acc, 0, 0, 400, 400 );
    }

    if(current_hat != undefined) {
        context.drawImage(current_hat, 0, 0, 400, 400 );
    }
    
    if(current_clothes != undefined) {
        context.drawImage(current_clothes, 0, 0, 400, 400 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('head', 1);
    selectParts('hat', 0);
    selectParts('acc', 0);
    selectParts('bg', 0);
    selectParts('clothes', 0);
}

const randomBtn = document.getElementById('random-btn');
randomBtn.onclick = () => {
    selectParts('head', randRange(0,10));
    selectParts('hat', randRange(0,20));
    selectParts('acc', randRange(0,15));
    selectParts('bg', randRange(0,20));
    selectParts('clothes', randRange(0,18));
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'cock.png';
    link.href = canvas.toDataURL()
    link.click();
}

//head left and right buttons
const headLeftBtn = document.getElementById('head-left');
const headLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const headLefttranslateStep = -200; // Adjust the step size as needed

headLeftBtn.onclick = () => {
    let headLeftcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    headLeftcurrentTranslateX -= headLefttranslateStep;
    if (headLeftcurrentTranslateX > headLeftmaxTranslateX) {
        headLeftcurrentTranslateX = headLeftmaxTranslateX;
    }
    headList.style.transform = `translateX(${headLeftcurrentTranslateX}px)`;
}

const headRightBtn = document.getElementById('head-right');
const headRightmaxTranslateX = -410; // Adjust the maximum translation as needed
const headRighttranslateStep = 200; // Adjust the step size as needed

headRightBtn.onclick = () => {
    let headRightcurrentTranslateX = parseInt(headList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    headRightcurrentTranslateX -= headRighttranslateStep;
    if (headRightcurrentTranslateX < headRightmaxTranslateX) {
        headRightcurrentTranslateX = headRightmaxTranslateX;
    }
    headList.style.transform = `translateX(${headRightcurrentTranslateX}px)`;
}

//head left and right buttons
const hatLeftBtn = document.getElementById('hat-left');
const hatLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const hatLefttranslateStep = -200; // Adjust the step size as needed

hatLeftBtn.onclick = () => {
    let hatLeftcurrentTranslateX = parseInt(hatList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    hatLeftcurrentTranslateX -= hatLefttranslateStep;
    if (hatLeftcurrentTranslateX > hatLeftmaxTranslateX) {
        hatLeftcurrentTranslateX = hatLeftmaxTranslateX;
    }
    hatList.style.transform = `translateX(${hatLeftcurrentTranslateX}px)`;
}

const hatRightBtn = document.getElementById('hat-right');
const hatRightmaxTranslateX = -1290; // Adjust the maximum translation as needed
const hatRighttranslateStep = 200; // Adjust the step size as needed

hatRightBtn.onclick = () => {
    let hatRightcurrentTranslateX = parseInt(hatList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    hatRightcurrentTranslateX -= hatRighttranslateStep;
    if (hatRightcurrentTranslateX < hatRightmaxTranslateX) {
        hatRightcurrentTranslateX = hatRightmaxTranslateX;
    }
    hatList.style.transform = `translateX(${hatRightcurrentTranslateX}px)`;
}


//top left and right buttons

const topLeftBtn = document.getElementById('top-left');
const topLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const topLefttranslateStep = -200; // Adjust the step size as needed

topLeftBtn.onclick = () => {
    let topLeftcurrentTranslateX = parseInt(topList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    topLeftcurrentTranslateX -= topLefttranslateStep;
    if (topLeftcurrentTranslateX > topLeftmaxTranslateX) {
        topLeftcurrentTranslateX = topLeftmaxTranslateX;
    }
    topList.style.transform = `translateX(${topLeftcurrentTranslateX}px)`;
}

const topRightBtn = document.getElementById('top-right');
const topRightmaxTranslateX = -930; // Adjust the maximum translation as needed
const topRighttranslateStep = 200; // Adjust the step size as needed

topRightBtn.onclick = () => {
    let topRightcurrentTranslateX = parseInt(topList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    topRightcurrentTranslateX -= topRighttranslateStep;
    if (topRightcurrentTranslateX < topRightmaxTranslateX) {
        topRightcurrentTranslateX = topRightmaxTranslateX;
    }
    topList.style.transform = `translateX(${topRightcurrentTranslateX}px)`;
}

//clothes left and right buttons

const clothesLeftBtn = document.getElementById('clothes-left');
const clothesLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const clothesLefttranslateStep = -200; // Adjust the step size as needed

clothesLeftBtn.onclick = () => {
    let clothesLeftcurrentTranslateX = parseInt(clothesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    clothesLeftcurrentTranslateX -= clothesLefttranslateStep;
    if (clothesLeftcurrentTranslateX > clothesLeftmaxTranslateX) {
        clothesLeftcurrentTranslateX = clothesLeftmaxTranslateX;
    }
    clothesList.style.transform = `translateX(${clothesLeftcurrentTranslateX}px)`;
}

const clothesRightBtn = document.getElementById('clothes-right');
const clothesRightmaxTranslateX = -840; // Adjust the maximum translation as needed
const clothesRighttranslateStep = 200; // Adjust the step size as needed

clothesRightBtn.onclick = () => {
    let clothesRightcurrentTranslateX = parseInt(clothesList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    clothesRightcurrentTranslateX -= clothesRighttranslateStep;
    if (clothesRightcurrentTranslateX < clothesRightmaxTranslateX) {
        clothesRightcurrentTranslateX = clothesRightmaxTranslateX;
    }
    clothesList.style.transform = `translateX(${clothesRightcurrentTranslateX}px)`
}

//bg left and right buttons

const bgLeftBtn = document.getElementById('bg-left');
const bgLeftmaxTranslateX = 0; // Adjust the maximum translation as needed
const bgLefttranslateStep = -200; // Adjust the step size as needed

bgLeftBtn.onclick = () => {
    let bgLeftcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    bgLeftcurrentTranslateX -= bgLefttranslateStep;
    if (bgLeftcurrentTranslateX > bgLeftmaxTranslateX) {
        bgLeftcurrentTranslateX = bgLeftmaxTranslateX;
    }
    bgList.style.transform = `translateX(${bgLeftcurrentTranslateX}px)`;
}

const bgRightBtn = document.getElementById('bg-right');
const bgRightmaxTranslateX = -1300; // Adjust the maximum translation as needed
const bgRighttranslateStep = 200; // Adjust the step size as needed

bgRightBtn.onclick = () => {
    let bgRightcurrentTranslateX = parseInt(bgList.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    bgRightcurrentTranslateX -= bgRighttranslateStep;
    if (bgRightcurrentTranslateX < bgRightmaxTranslateX) {
        bgRightcurrentTranslateX = bgRightmaxTranslateX;
    }
    bgList.style.transform = `translateX(${bgRightcurrentTranslateX}px)`;
}



