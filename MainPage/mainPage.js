document.addEventListener("DOMContentLoaded", function () {
 
  //------------------ OPEN & CLOSE DROPDOWN MENU-------------------------
  const openMenu = document.querySelector('.headerMenuButton');
  const menuContainer = document.querySelector('.mainDropdownMenuContainer');
  const closeMenu = menuContainer.querySelector('.mainDropdownMenuClose');

  openMenu.addEventListener('click', function () {
    menuContainer.classList.remove('mainHidden');
  });

  closeMenu.addEventListener('click', function () {
    menuContainer.classList.add('mainHidden');
  });
  //------------------END OPEN & CLOSE DROPDOWN MENU------------------------

  //------------------START ADD TAG CHIPS (NOT FINISHED)------------------------
  
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
      { opacity: '0.8' },
      { opacity: '0.6' },
      { opacity: '0.4' }
    ];
    const tagButtons = document.getElementsByClassName('needAnimation');
    Array.from(tagButtons).forEach(function(button) {
      const duration = 100000;
      let position = button.getBoundingClientRect().x;
      let windowWidth  = document.documentElement.clientWidth;
      if (position < windowWidth && position > 0 ) {
        if (position > windowWidth*0.15 && position <= windowWidth*0.3) {
          button.animate([
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
           duration: duration*0.2,
         });
          
        } else if (position > windowWidth*0.7 && position <= windowWidth*0.85) {
          button.animate([
            { opacity: '0.6' },
            { opacity: '0.8' },
            { opacity: '1.0' },
            { opacity: '1.0' },
            { opacity: '1.0' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
            duration: duration*0.8,
          });
        } else if (position > windowWidth*0.3 && position <= windowWidth*0.4) {
          button.animate([
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
           duration: duration*0.35,
         });
          
        } else if (position > windowWidth*0.6 && position <= windowWidth*0.7) {
          button.animate([
            { opacity: '0.8' },
            { opacity: '1.0' },
            { opacity: '1.0' },
            { opacity: '1.0' },
            { opacity: '0.8' },
            { opacity: '0.6' },
            { opacity: '0.4' }
          ], {
           duration: duration*0.75,
         });
        } else if (position > windowWidth*0.4 && position <= windowWidth*0.6) {
            button.animate([
              { opacity: '1.0' },
              { opacity: '1.0' },
              { opacity: '0.8' },
              { opacity: '0.6' },
              { opacity: '0.4' }
            ], {
             duration: duration*0.5,
           });
        }
      };
      setInterval(function() {
        let position = button.getBoundingClientRect().x;
        let windowWidth  = document.documentElement.clientWidth;
        let startAnimation = windowWidth - windowWidth*0.15;
        let endAnimation = windowWidth*0.15;
        if (position < windowWidth  && position >= startAnimation ) {
          button.classList.remove('needAnimation');
          button.animate(opacityFull, {
            duration: duration,
          });
        } else if (position > 0  && position < endAnimation ) {
          button.classList.add('needAnimation');
        }
      }, 1000);
    });
    
       
    // const opacityFull = [
    //   { opacity: '0.4' },
    //   { opacity: '0.6' },
    //   { opacity: '0.8' },
    //   { opacity: '1.0' },
    //   { opacity: '1.0' },
    //   { opacity: '1.0' },
    //   { opacity: '1.0' },
    //   { opacity: '0.8' },
    //   { opacity: '0.6' },
    //   { opacity: '0.4' }
    // ];

    // const tagButtons = document.getElementsByClassName('needAnimation');

    // Array.from(tagButtons).forEach(button => {
    //   const duration = 100000;
    //   let position = button.getBoundingClientRect().x;
      
    //   if (position < windowWidth && position > 0 ) {
    //     if (position > windowWidth*0.15 && position <= windowWidth*0.25) {
    //       button.animate([
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //       duration: duration*0.125,
    //     });
          
    //     } else if (position > windowWidth*0.75 && position <= windowWidth*0.85) {
    //       button.animate([
    //         { opacity: '0.6' },
    //         { opacity: '0.8' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '0.8' },
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //         duration: duration*0.9,
    //       });
    //     } else if (position > windowWidth*0.25 && position <= windowWidth*0.35) {
    //       button.animate([
    //         { opacity: '0.8' },
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //       duration: duration*0.25,
    //     });
          
    //     } else if (position > windowWidth*0.65 && position <= windowWidth*0.75) {
    //       button.animate([
    //         { opacity: '0.8' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '0.8' },
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //       duration: duration*0.875,
    //     });     
    //     } else if (position > windowWidth*0.35 && position <= windowWidth*0.45) {
    //       button.animate([
    //         { opacity: '1.0' },
    //         { opacity: '0.8' },
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //       duration: duration*0.375,
    //       });
    //     } else if (position > windowWidth*0.65 && position <= windowWidth*0.55) {
    //       button.animate([
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '1.0' },
    //         { opacity: '0.8' },
    //         { opacity: '0.6' },
    //         { opacity: '0.4' }
    //       ], {
    //       duration: duration*0.75,
    //       });
    //     } else if (position > windowWidth*0.45 && position <= windowWidth*0.55) {
    //         button.animate([
    //           { opacity: '1.0' },
    //           { opacity: '1.0' },
    //           { opacity: '0.8' },
    //           { opacity: '0.6' },
    //           { opacity: '0.4' }
    //         ], {
    //         duration: duration*0.625,
    //       });
    //     }
    //   };
    //   setInterval(() => {
    //     let position = button.getBoundingClientRect().x;
    //     let windowWidth  = document.documentElement.clientWidth;
    //     let startAnimation = windowWidth*0.85;
    //     let endAnimation = windowWidth*0.15;
    //     if (position < windowWidth  && position >= startAnimation && button.classList.contains('needAnimation')) {
    //       button.classList.remove('needAnimation');
    //       button.animate(opacityFull, {
    //         duration: duration,
    //       });
    //     } else if (position > 0  && position < endAnimation ) {
    //       button.classList.add('needAnimation');
    //     }
    //   }, 1000);
    // });
  }
  //------------------END ANIMATE OPACITY (NOT FINISHED)------------------------

});
