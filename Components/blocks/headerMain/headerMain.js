//------------------START ADD TAG CHIPS ------------------------
document.addEventListener("DOMContentLoaded", function () { 
  const tagList1 = ['React Native', 'Flutter', 'Development', 'Flutter', 'Cross-Platform', 'React', 'Development', 'Flutter', 'Development', 'Flutter', 'Cross-Platform', 'React', 'Performance', 'Xamarin', ];
  const tagList2 = ['JavaScipt', 'Performance', 'Xamarin', 'API Integration', 'React', 'React Native', 'Flutter', 'Development', 'Flutter', 'React', 'React Native', 'Flutter', 'Development', 'Flutter'];
  const tagList3 = ['Flutter', 'Development', 'Flutter', 'React', 'React Native', 'Flutter', 'Development', 'Flutter', 'JavaScipt', 'Performance', 'Xamarin', 'API Integration', 'React', 'React Native',];
  const headerChipsContainer = document.querySelector('.headerChipsContainer');
  let windowWidth  = document.documentElement.clientWidth;

  if (headerChipsContainer) {
    createTagBlocks();
    if (windowWidth > 631)  {
      animateOpacity ();
    };
  }

  function createTagBlocks () {
    let listApplied;
    let rowsAmount;
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
      for (let j = 0; j < 3; j++) {
        let headerChipsBlock = document.createElement('div');
        headerChipsBlock.classList.add('headerChipsBlock');
        createChips(headerChipsBlock, listApplied[i]);
        chipsLine.appendChild(headerChipsBlock);
      }
      headerChipsContainer.appendChild(chipsLine);
    }
  }

  function createChips (chipsBlock, list) {
    for (let k = 0; k < list.length; k++) {
      let tagChip = document.createElement('span');
      tagChip.classList.add('headerChip');
      tagChip.classList.add('needAnimation');
      tagChip.textContent = list[k];
      chipsBlock.appendChild(tagChip);
    }
  }
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
    const tagButtons = document.querySelectorAll('.needAnimation');
    // console.log(tagButtons);
    Array.from(tagButtons).forEach(function(button) {
      const duration = 200000;
      let position = button.getBoundingClientRect().x;
      let windowWidth  = document.documentElement.clientWidth;
      if (position < windowWidth && position > 0 ) {
        button.classList.remove('needAnimation');
        if (position > windowWidth*0.1 && position <= windowWidth*0.2) {
          button.animate([
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.2,
          });
        } else if (position > windowWidth*0.2 && position <= windowWidth*0.3) {
          button.animate([
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.3,
          });
        } else if (position > windowWidth*0.3 && position <= windowWidth*0.4) {
          button.animate([
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.4,
          });
        } else if (position > windowWidth*0.4 && position <= windowWidth*0.5) {
          button.animate([
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.5,
          });
        } else if (position > windowWidth*0.5 && position <= windowWidth*0.6) {
          button.animate([
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.6,
          });
        } else if (position > windowWidth*0.6 && position <= windowWidth*0.7) {
          button.animate([
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.7,
          });
        } else if (position > windowWidth*0.7 && position <= windowWidth*0.8) {
          button.animate([
            { opacity: '0.8' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.8,
          });
        } else if (position > windowWidth*0.8 && position <= windowWidth*0.9) {
          button.animate([
            { opacity: '0.6' },
            { opacity: '0.8' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '1' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.9,
          });
        } else if (position > windowWidth*0.9 && position <= windowWidth) {
          button.animate(opacityFull, {
            duration: duration,
          });
        }
      };

      // button.classList.add('needAnimation');
      // button.onanimationend = function (e) {
      //   console.log('transition finished');
      //   console.log(e);
      //   // button.classList.add('needAnimation');
      // }
      // addEventListener('animationstart', function (e) {
      //   console.log('transition finished');
      //   console.log(e);
      //   button.classList.add('needAnimation');
      // });
      setInterval(function() {
        if (button.classList.contains('needAnimation')) {
          let position = button.getBoundingClientRect().x;
          let windowWidth  = document.documentElement.clientWidth;
          if (position < windowWidth && position > 0) {
            button.classList.remove('needAnimation');
            button.animate(opacityFull, {
              duration: duration,
            });
          }
        }
      }, 1000);
      
    });
  }  
});
//------------------END ANIMATE OPACITY (NOT FINISHED)------------------------
