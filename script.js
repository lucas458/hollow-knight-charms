function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};

var CURRENT_CHARM_LIST = [];
const charmList = document.getElementById('charmList');
const slotUsedList = document.getElementById('slotUsedList');


function generateCharmList(){
    charmList.innerHTML = '';
    let charmIndex = 0;
    
    for (let i = 0; i < 4; i++){
        const charmRow = document.createElement('div');
        charmRow.classList.add('charmRow');

        for (let j = 0; j < 10; j++, charmIndex++){
            const charm = document.createElement('div');
            charm.classList.add('charm');
            charm.style.backgroundImage = `url("${CHARM_LIST[charmIndex].icon}")`;
            charm.setAttribute('charm-name', CHARM_LIST[charmIndex].name);
            
            if ( CHARM_LIST[charmIndex].name == 'Void_Heart' ){
                charm.classList.add('charmUsed');
            }

            charmRow.appendChild(charm);
                
        }
        charmList.appendChild(charmRow);
    }

    // SELECT FIRST CHARM (DEFAULT)
    document.querySelector('.charm').classList.add('selectorActive');
    moveSelectorToCurrentSelection();
    document.querySelectorAll('.charm, .currentCharmSlotUsed').forEach(e => onMouseEvents(e) );
}



function onMouseEvents( e ){
    e.onclick = () => {
        removeSelector();
        e.classList.add('selectorActive');
        moveSelectorToCurrentSelection(); 
        generateCharmContentByName(e.getAttribute('charm-name'));


    };

    e.ondblclick = () => { 
        toggleCharmByName(e.getAttribute('charm-name'));
    };
}


function removeSelector(){
    document.querySelectorAll('.selectorActive').forEach(e => e.classList.remove('selectorActive'));
}

function removeOverloadedCharmStatus(){
    slotUsedList.querySelectorAll('.slotStatusOverloaded').forEach(e => e.remove());
}

function generateOverloadedCharmStatusByAmount( qty = 1 ){
    while (qty-- > 0){
        const slotStatusOverloaded = document.createElement('div');
        slotStatusOverloaded.classList.add('slotStatus', 'slotStatusUsed', 'slotStatusOverloaded');
        slotUsedList.appendChild(slotStatusOverloaded);
    }
}


function generateCharmStatusByAmount( qty = 0 ){
    removeOverloadedCharmStatus();
    const listSlotStatus = slotUsedList.querySelectorAll('.slotStatus');
    
    for (let i = 0; i < 11; i++){
        listSlotStatus[i].classList.toggle('slotStatusUsed', i < qty);
    }
    generateOverloadedCharmStatusByAmount(qty - 11); 
    currentCharmList.classList.toggle('currentCharmListFull', qty >= 11);
}


function moveSelectorToCurrentSelection(){
    const e = document.querySelector('.selectorActive');
    const centerBox = {
        x: e.offsetLeft + e.offsetWidth/2 - selector.offsetWidth/2,
        y: e.offsetTop + e.offsetHeight/2 - selector.offsetHeight/2
    };
    selector.style.left = centerBox.x + 'px';
    selector.style.top = centerBox.y + 'px';
    selector.style.visibility = 'visible';
    generateCharmContentByName(e.getAttribute('charm-name'));

    const selectorActive = document.querySelector('.selectorActive');
    contentRight.style.display = ( selectorActive.classList.contains('currentCharmSlot') && !selectorActive.classList.contains('currentCharmSlotUsed') )? 'none' : '';
}


function generateCharmContentByName( charmName ){
    const charmObject = CHARM_LIST.find(e => e.name == charmName);
    if ( charmName == null ) return;

    charmLabel.innerHTML = charmObject.label;
    charmImage.style.backgroundImage = `url("${charmObject.icon}")`;
    charmDescription.innerHTML = charmObject.description;
    charmWeightList.innerHTML = '';
    charmWeightWrapper.style.visibility = charmObject.weight > 0 ? 'visible' : 'hidden';

    for (let i = 0; i < charmObject.weight; i++){
        const slotWeightElement = document.createElement('div');
        slotWeightElement.classList.add('slotStatus', 'slotStatusUsed');
        charmWeightList.appendChild(slotWeightElement);
    }

    if ( charmName == "Grimmchild" ){
        const grimmFireList = document.createElement('div');
        grimmFireList.id = "grimmFireList";

        for (let i = 0; i < charmObject.fireLevel; i++){
            grimmFireList.appendChild( document.createElement('div') );
        }
        charmDescription.appendChild(grimmFireList);
    }

}



function toggleCharmByName( charmName ){
    if ( charmName == "Void_Heart" ) return;
    const charmObject = CHARM_LIST.find(e => e.name == charmName);
    const selectorActive = document.querySelector('.selectorActive');
    const newSelectIndex = CURRENT_CHARM_LIST.indexOf(charmName); 
    const charmElement = document.querySelector(`.charm[charm-name="${charmName}"]`);

    // REMOVE CHARM
    if ( CURRENT_CHARM_LIST.indexOf(charmName) >= 0 ){
        charmAnimation.style.backgroundImage = `url("${charmObject.icon}")`;
        CURRENT_CHARM_LIST.splice( CURRENT_CHARM_LIST.indexOf(charmName) , 1);

        const newPositionElement = document.querySelector(`.currentCharmSlot[charm-name="${charmName}"]`); 
        charmAnimation.style.left = newPositionElement.offsetLeft + 'px';
        charmAnimation.style.top = newPositionElement.offsetTop + 'px';
        
        setTimeout(()=>{
            charmAnimation.style.transition = '200ms';
            charmAnimation.style.left = charmElement.offsetLeft + 'px';
            charmAnimation.style.top = charmElement.offsetTop + 'px';
        }, 5);

        charmElement.classList.remove('charmUsed');
    }
    // ADD CHARM
    else if ( getAmountSlotsUsed() < 11 ){
        charmAnimation.style.backgroundImage = `url("${charmObject.icon}")`;
        CURRENT_CHARM_LIST.push(charmName);

        charmAnimation.style.left = charmElement.offsetLeft + 'px';
        charmAnimation.style.top = charmElement.offsetTop + 'px';
        
        const newPositionElement = document.querySelector('#currentCharmList .currentCharmSlot:last-child');

        setTimeout(()=>{
            charmAnimation.style.transition = '200ms';
            charmAnimation.style.left = newPositionElement.offsetLeft + 'px';
            charmAnimation.style.top = newPositionElement.offsetTop + 'px';
        }, 5);
        
    }


    setTimeout(()=>{
        charmAnimation.style.backgroundImage = '';
        charmAnimation.style.transition = '';

        generateCurrentCharmByList();
        generateCharmStatusByAmount( getAmountSlotsUsed() );

        if ( selectorActive.classList.contains('charm') ) return;

        setTimeout(()=>{
            const currentCharmSlotList = document.querySelectorAll('.currentCharmSlot');
            currentCharmSlotList[newSelectIndex+1].classList.add('selectorActive');

            if ( !currentCharmSlotList[newSelectIndex+1].classList.contains('currentCharmSlotUsed') ){
                removeSelector();
                currentCharmSlotList[newSelectIndex].classList.add('selectorActive');
            }
            moveSelectorToCurrentSelection();

        }, 100);

    }, 200);


}



function generateCurrentCharmByList(){

    currentCharmList.innerHTML = '';

    for (let i = 0; i < CURRENT_CHARM_LIST.length + 2; i++){

        const currentCharmSlot = document.createElement('div');
        currentCharmSlot.classList.add('currentCharmSlot');
        currentCharmSlot.innerHTML = '<div class="currentCharmImage"></div>';

        if ( i == 0 ){ 
            currentCharmSlot.classList.add('currentCharmSlotUsed', 'currentCharmLocked');
            currentCharmSlot.setAttribute('charm-name', 'Void_Heart');
            onMouseEvents(currentCharmSlot);
        }else if ( i <= CURRENT_CHARM_LIST.length ){
            const name = CURRENT_CHARM_LIST[i-1];
            const charmObject = CHARM_LIST.find(e => e.name == name);
            currentCharmSlot.classList.add('currentCharmSlotUsed');
            currentCharmSlot.setAttribute('charm-name', charmObject.name);
            currentCharmSlot.querySelector('.currentCharmImage').style.backgroundImage = `url("${charmObject.icon}")`;
            
            document.querySelector(`.charm[charm-name="${name}"]`).classList.add('charmUsed');
            
            onMouseEvents(currentCharmSlot); 
        }else{
            currentCharmSlot.innerHTML = '<div class="charmSlotNext"></div>';
        }

        currentCharmList.appendChild(currentCharmSlot);
        
    }

}


function getAmountSlotsUsed(){
    let total = 0;
    CURRENT_CHARM_LIST.forEach(charmName => {
        const charmObject = CHARM_LIST.find(e => e.name == charmName);
        total += charmObject.weight;
    });
    return total;
}




const CONTROLLER = {

    ArrowLeft: () => {
        const selectorActive = document.querySelector('.selectorActive');

        if ( selectorActive.previousElementSibling == null ) return;

        removeSelector();
        selectorActive.previousElementSibling.classList.add('selectorActive');
        moveSelectorToCurrentSelection();
    },


    ArrowRight: () => {
        const selectorActive = document.querySelector('.selectorActive');

        if ( selectorActive.nextElementSibling == null ) return;

        removeSelector();
        selectorActive.nextElementSibling.classList.add('selectorActive');
        moveSelectorToCurrentSelection();
    },


    ArrowUp: () => {
        const selectorActive = document.querySelector('.selectorActive');
        const x = Array.from(selectorActive.parentElement.children).indexOf(selectorActive);

        if ( !selectorActive.classList.contains('charm') ) return;

        removeSelector();

        if ( selectorActive.parentElement.previousElementSibling != null ){
            selectorActive.parentElement.previousElementSibling.children[x].classList.add('selectorActive');
        }else{
            const currentCharmSlotUsed = document.querySelectorAll('.currentCharmSlotUsed');
            currentCharmSlotUsed[ Math.clamp(x, 0, currentCharmSlotUsed.length - 1) ].classList.add('selectorActive');
        }
        moveSelectorToCurrentSelection(); 
        
    },


    ArrowDown: () => {
        const selectorActive = document.querySelector('.selectorActive');
        const x = Array.from(selectorActive.parentElement.children).indexOf(selectorActive);

        if ( selectorActive.classList.contains('charm') ){
            if ( selectorActive.parentElement.nextElementSibling != null ){
                removeSelector();
                selectorActive.parentElement.nextElementSibling.children[x].classList.add('selectorActive');
            }
        }else{
            removeSelector();
            document.querySelectorAll('.charm')[ Math.clamp(x, 0, 9) ].classList.add('selectorActive');
        }
        moveSelectorToCurrentSelection(); 
    },


    Enter: () => {
        const selectorActive = document.querySelector('.selectorActive');

        if ( selectorActive.classList.contains('currentCharmSlot') && !selectorActive.classList.contains('currentCharmSlotUsed') ){
            return;
        }

        toggleCharmByName(selectorActive.getAttribute('charm-name') );
    }

};



onkeydown = (event) => {
    if ( CONTROLLER[event.key] != null && !event.repeat ){
        CONTROLLER[event.key]();
    }
};


onmousemove = (event) => {
    cursor.style.left = (event.clientX - 3) + 'px';
    cursor.style.top  = (event.clientY - 2) + 'px';
};


onload = () => {
    generateCurrentCharmByList();
    generateCharmList();
    update();
};



function update(){
    
    document.querySelectorAll('.currentCharmSlotUsed').forEach((e, i) => {
        angle = getRandomInt(0, 361) * Math.PI / 180;
        const x = Math.sin(angle) * 2;
        const y = Math.cos(angle) * 2;
        
        e.style.transform = (getAmountSlotsUsed() > 11)? `translate(${x}px, ${y}px)` : '';
    });

    requestAnimationFrame(update);

}