document.addEventListener("DOMContentLoaded", function () { 
  const TAGS = ['JavaScipt', 'Performance', 'Xamarin', 'API Integration', 'React', 'React Native', 'Flutter', 'Development', 'Flutter', 'React', 'React Native', 'Flutter', 'Development', 'Flutter'];
  const moveSpeed = 7; // px/1s
  let moveAnimationDuration;

  const windowWidth  = document.documentElement.clientWidth;
  let rowsAmount;
  
  if (windowWidth > 631) {
    rowsAmount =  2;
  } else {
    rowsAmount =  3;
  }

  let heah = document.documentElement.clientHeight;
  console.log(heah, windowWidth);

  let k = Math.floor(TAGS.length / rowsAmount);
  
  let tagList1;
  let tagList2;
  let tagList3;

  if(rowsAmount === 2) {
    tagList1 = TAGS.slice(0, k);
    tagList2 = TAGS.slice(k, TAGS.length-1);
  } else {
    tagList1 = TAGS.slice(0, k);
    tagList2 = TAGS.slice(k, 2*k);
    tagList3 = TAGS.slice(2*k, TAGS.length-1);
  }

  const container = document.querySelector('.headerInnerContainer');
  let headerChipsContainer = container.querySelector('.headerChipsContainer');
  
  if (headerChipsContainer) {
    createTagBlocks();
    if (windowWidth > 631)  {
      animateOpacity ();
    };
  }

  const headerChipsLine = document.querySelectorAll('.headerChipsLine');
  const headerChipsBlock = headerChipsLine[0].querySelector('.headerChipsBlock');
  blockWidth = headerChipsBlock.getBoundingClientRect().width;
  console.log(blockWidth);
  let linePosition = headerChipsLine[0].getBoundingClientRect().left;
  // console.log(headerChipsLine[0].getBoundingClientRect().left);
  // console.log(headerChipsLine[0].getBoundingClientRect().width);
  
  // jQuery(function() {

  //   $('.headerChipsLine').draggable({
  //     containment: "parent"
  // }).filter('.headerChipsLine').draggable("option", "axis", "x");

  $( ".headerChipsLine" ).draggable({
    axis: "x",
    drag: function( event, ui ) {
      
      ui.position.left = Math.min( blockWidth, ui.position.left );
      ui.position.left = Math.max( -blockWidth, ui.position.left );
      console.log(ui.position.left);
      // console.log(ui.position.left);
      // ui.position.right = Math.max( lineWidth, ui.position.right );
    },
    
    // stop: function( event, ui ) {
    //   if (ui.position.left < 0) {
    //     // let line=$( ".headerChipsLine" );
    //     blockToEnd(this);
    //   }

    //   if (ui.position.left > 0) {
    //     // let line=$( ".headerChipsLine" );
    //     blockToStart(this);
    //   }
    // }
  });
 
  // function blockToEnd (line) {
  //   let block = line.querySelectorAll('.headerChipsBlock');
  //   let newBlock = block[0].cloneNode(true);
  //   newBlock.style.animationDuration = moveAnimationDuration + 's';
  //   block[0].remove();
  //   line.append(newBlock);
  // }

  // function blockToStart (line) {
  //   let block = line.querySelectorAll('.headerChipsBlock');
  //   let newBlock = block[0].cloneNode(true);
  //   newBlock.style.animationDuration = moveAnimationDuration + 's';
  //   block[block.length-1].remove();
  //   line.prepend(newBlock);
  // }

  function createTagBlocks () {
    let listApplied;
    if (windowWidth > 631)  {
      rowsAmount = 2;
      listApplied = [tagList1, tagList2];
    } else {
      rowsAmount = 3;
      listApplied = [tagList1, tagList2, tagList3];
    }
    for (let i = 0; i < rowsAmount; i++) {
      let chipsLine = document.createElement('div');
      chipsLine.classList.add('headerChipsLine');
      headerChipsContainer.appendChild(chipsLine);
      let block1 = createChips (listApplied[i], chipsLine);
      let blockWidth = block1.getBoundingClientRect().width;
      moveAnimationDuration = blockWidth / moveSpeed;
      block1.style.animationDuration = moveAnimationDuration + 's';
      let block2 = block1.cloneNode(true);
      block2.style.animationDuration = moveAnimationDuration + 's';
      chipsLine.appendChild(block2);
      let block3 = block1.cloneNode(true);
      block3.style.animationDuration = moveAnimationDuration + 's';
      chipsLine.appendChild(block3);
      let block4 = block1.cloneNode(true);
      block4.style.animationDuration = moveAnimationDuration + 's';
      chipsLine.appendChild(block4);
      let block5 = block1.cloneNode(true);
      block5.style.animationDuration = moveAnimationDuration + 's';
      chipsLine.appendChild(block5);
      
    }
  }

  function createChips (list, line) {
    let headerChipsBlock;
    headerChipsBlock = document.createElement('div');
    headerChipsBlock.classList.add('headerChipsBlock');
    for (let k = 0; k < list.length; k++) {
      let tagChip = document.createElement('span');
      tagChip.classList.add('headerChip');
      tagChip.classList.add('needAnimation');
      tagChip.textContent = list[k];
      headerChipsBlock.appendChild(tagChip);
      line.appendChild(headerChipsBlock);
    }
    if (headerChipsBlock.getBoundingClientRect().width < windowWidth*1.1) {
      addMoreChips(headerChipsBlock, list);
    }
    return headerChipsBlock;
  }

  function addMoreChips (block, list) {
    for (let k = 0; k < list.length; k++)  {
      let tagChip = document.createElement('span');
      tagChip.classList.add('headerChip');
      tagChip.classList.add('needAnimation');
      tagChip.textContent = list[k];
      block.appendChild(tagChip);
      if (block.getBoundingClientRect().width > windowWidth*1.1) {
        return block;
      }
    }
    if (block.getBoundingClientRect().width < windowWidth) {
      addMoreChips(block, list);
    }
  };
  
  //------------------END ADD TAG CHIPS (NOT FINISHED)------------------------

  //------------------START ANIMATE OPACITY (NOT FINISHED)------------------------
  
  
  function animateOpacity () {
    const opacityFull = [
      { opacity: '0.4' },
      { opacity: '0.6' },
      { opacity: '0.8' },
      { opacity: '1.0' },
      { opacity: '1.0' },
      { opacity: '1.0' },
      { opacity: '1.0' },
      { opacity: '0.8' },
      { opacity: '0.6' },
      { opacity: '0.4' }
    ];
    
    const tagButtons = document.getElementsByClassName('headerChip');
    setInterval(function() {
      let windowWidth  = document.documentElement.clientWidth;
      const opacityDuration = windowWidth / moveSpeed * 1000;
      for (let i = 0; i < tagButtons.length; i++)  {  
        let button = tagButtons[i];
        let position = button.getBoundingClientRect().left;
        if ((position < windowWidth && position > 0) && button.classList.contains('needAnimation')) {
          button.classList.remove('needAnimation');
          let opacity;
          let duration;
          if (position > windowWidth*0.1 && position <= windowWidth*0.2) {
            opacity = [
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration = {duration: opacityDuration*0.2};
          } else if (position > windowWidth*0.2 && position <= windowWidth*0.3) {
          opacity = [
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration = {duration: opacityDuration*0.3};
          } else if (position > windowWidth*0.3 && position <= windowWidth*0.4) {
          opacity = [
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration = {duration: opacityDuration*0.4};
          } else if (position > windowWidth*0.4 && position <= windowWidth*0.5) {
            opacity = [
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration = {duration: opacityDuration*0.5};
          } else if (position > windowWidth*0.5 && position <= windowWidth*0.6) {
            opacity = [
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration = {duration: opacityDuration*0.6};
          } else if (position > windowWidth*0.6 && position <= windowWidth*0.7) {
            opacity = [
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ];
            duration =  {duration: opacityDuration*0.7};
          } else if (position > windowWidth*0.7 && position <= windowWidth*0.8) {
            opacity = [
              { opacity: '0.8' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ]; 
            duration = {
              duration: opacityDuration*0.8,
            };
          } else if (position > windowWidth*0.8 && position <= windowWidth*0.9) {
            opacity = [
              { opacity: '0.6' },
              { opacity: '0.8' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '1' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ]; 
            duration = {
              duration: opacityDuration*0.9,
            };
          } else if (position > windowWidth*0.9 && position <= windowWidth) {
            opacity = opacityFull;
            duartion = {
              duration: opacityDuration,
            };
          }
          let animateOpacity = button.animate(opacity, duration);
          animateOpacity.onfinish = function() {
            button.classList.add('needAnimation');
          }
        }
      };
    }, 1000);
  }  
});
//------------------END ANIMATE OPACITY (NOT FINISHED)------------------------

