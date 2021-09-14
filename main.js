  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#scena1'
  })
  .setClassToggle('#scena1', 'fade-in')
  .addTo(controller);
;

var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#scena2'
})
.setClassToggle('#scena2', 'fade-in')
.addTo(controller);
;

var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#scena3'
})
.setClassToggle('#scena3', 'fade-in')
.addTo(controller);
;

var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#res1'
})
.setClassToggle('#res1', 'fade-in')
.addTo(controller);
;

var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#alb1'
})
.setClassToggle('#alb1', 'fade-in')
.addTo(controller);
;
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#alb2'
})
.setClassToggle('#alb2', 'fade-in')
.addTo(controller);
;
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '#alb3'
})
.setClassToggle('#alb3', 'fade-in')
.addTo(controller);
;

var controller = new ScrollMagic.Controller();
var revealElements = document.getElementsByClassName("eve1");
		for (var i=0; i<revealElements.length; i++) {
			new ScrollMagic.Scene({
								triggerElement: revealElements[i],
								offset: 50,
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible")

							.addTo(controller);
		};

    var controller = new ScrollMagic.Controller();
    var revealElements = document.getElementsByClassName("eve2");
    		for (var i=0; i<revealElements.length; i++) {
    			new ScrollMagic.Scene({
    								triggerElement: revealElements[i],
    								offset: 50,
    								triggerHook: 0.9,
    							})
    							.setClassToggle(revealElements[i], "visible")

    							.addTo(controller);
    		};


var textWrapper = document.querySelector('.ml1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
          .add({
            targets: '.ml1 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
          }).add({
            targets: '.ml1 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
          });


var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
                    .add({
                      targets: '.ml2 .letter',
                      translateX: [40,0],
                      translateZ: 0,
                      opacity: [0,1],
                      easing: "easeOutExpo",
                      duration: 1200,
                      delay: (el, i) => 500 + 30 * i
                    }).add({
                      targets: '.ml2 .letter',
                      translateX: [0,-30],
                      opacity: [1,0],
                      easing: "easeInExpo",
                      duration: 1100,
                      delay: (el, i) => 100 + 30 * i
                    });

                    var textWrapper = document.querySelector('.ml2');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                                      anime.timeline({loop: true})
                                        .add({
                                          targets: '.ml2 .letter',
                                          translateX: [40,0],
                                          translateZ: 0,
                                          opacity: [0,1],
                                          easing: "easeOutExpo",
                                          duration: 1200,
                                          delay: (el, i) => 500 + 30 * i
                                        }).add({
                                          targets: '.ml2 .letter',
                                          translateX: [0,-30],
                                          opacity: [1,0],
                                          easing: "easeInExpo",
                                          duration: 1100,
                                          delay: (el, i) => 100 + 30 * i
                                        });




var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                  anime.timeline({loop: true})
                    .add({
                      targets: '.ml3 .letter',
                      translateX: [40,0],
                      translateZ: 0,
                      opacity: [0,1],
                      easing: "easeOutExpo",
                      duration: 1200,
                      delay: (el, i) => 500 + 30 * i
                    }).add({
                      targets: '.ml3 .letter',
                      translateX: [0,-30],
                      opacity: [1,0],
                      easing: "easeInExpo",
                      duration: 1100,
                      delay: (el, i) => 100 + 30 * i
                    });

                  var textWrapper = document.querySelector('.ml4');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                  anime.timeline({loop: true})
                    .add({
                      targets: '.ml4 .letter',
                      translateX: [40,0],
                      translateZ: 0,
                      opacity: [0,1],
                      easing: "easeOutExpo",
                      duration: 1200,
                      delay: (el, i) => 500 + 30 * i
                    }).add({
                      targets: '.ml4 .letter',
                      translateX: [0,-30],
                      opacity: [1,0],
                      easing: "easeInExpo",
                      duration: 1100,
                      delay: (el, i) => 100 + 30 * i
                    });
  var textWrapper = document.querySelector('.ml5');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                  anime.timeline({loop: true})
                    .add({
                      targets: '.ml5 .letter',
                      translateX: [40,0],
                      translateZ: 0,
                      opacity: [0,1],
                      easing: "easeOutExpo",
                      duration: 1200,
                      delay: (el, i) => 500 + 30 * i
                    }).add({
                      targets: '.ml5 .letter',
                      translateX: [0,-30],
                      opacity: [1,0],
                      easing: "easeInExpo",
                      duration: 1100,
                      delay: (el, i) => 100 + 30 * i
                    });

                  var textWrapper = document.querySelector('.ml6');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                  anime.timeline({loop: true})
                    .add({
                      targets: '.ml6 .letter',
                      translateX: [40,0],
                      translateZ: 0,
                      opacity: [0,1],
                      easing: "easeOutExpo",
                      duration: 1200,
                      delay: (el, i) => 500 + 30 * i
                    }).add({
                      targets: '.ml6 .letter',
                      translateX: [0,-30],
                      opacity: [1,0],
                      easing: "easeInExpo",
                      duration: 1100,
                      delay: (el, i) => 100 + 30 * i
                    });












  window.onload = function() {
  var elements = document.querySelectorAll( '.demo-image' );
  Intense( elements );
  }
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  window.cancelRequestAnimFrame = ( function() {
      return window.cancelAnimationFrame          ||
          window.webkitCancelRequestAnimationFrame    ||
          window.mozCancelRequestAnimationFrame       ||
          window.oCancelRequestAnimationFrame     ||
          window.msCancelRequestAnimationFrame        ||
          clearTimeout
  } )();


  var Intense = (function() {

      'use strict';

      var KEYCODE_ESC = 27;


      var mouse = { xCurr:0, yCurr:0, xDest: 0, yDest: 0 };

      var horizontalOrientation = true;


      var looper;


      var lastPosition, currentPosition = 0;

      var sourceDimensions, target;
      var targetDimensions = { w: 0, h: 0 };

      var container;
      var containerDimensions = { w: 0, h:0 };
      var overflowArea = { x: 0, y: 0 };


      var overflowValue;


      function extend( target, source ) {

          for ( var key in source )

              if ( !( key in target ) )

                  target[ key ] = source[ key ];

          return target;
      }


      function applyProperties( target, properties ) {

        for( var key in properties ) {
          target.style[ key ] = properties[ key ];
        }
      }


      function getFit(

        source ) {

        var heightRatio = window.innerHeight / source.h;

        if( (source.w * heightRatio) > window.innerWidth ) {
          return { w: source.w * heightRatio, h: source.h * heightRatio, fit: true };
        } else {
          var widthRatio = window.innerWidth / source.w;
          return { w: source.w * widthRatio, h: source.h * widthRatio, fit: false };
        }
      }



      function startTracking( passedElements ) {

        var i;


        if ( passedElements.length ) {


          for( i = 0; i < passedElements.length; i++ ) {
            track( passedElements[ i ] );
          }

        } else {
            track( passedElements );
        }
      }

      function track( element ) {


        if( element.getAttribute( 'data-image') || element.src ) {
          element.addEventListener( 'click', function() {
            init( this );
          }, false );
        }
      }

      function start() {
        loop();
      }

      function stop() {
        cancelRequestAnimFrame( looper );
      }

      function loop() {
          looper = requestAnimFrame(loop);
          positionTarget();
      }


      function lockBody() {

        overflowValue = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }


      function unlockBody() {
        document.body.style.overflow = overflowValue;
      }

      function createViewer( title, caption ) {


        var containerProperties = {
          'backgroundColor': 'rgba(0,0,0,0.8)',
          'width': '100%',
          'height': '100%',
          'position': 'fixed',
          'top': '0px',
          'left': '0px',
          'overflow': 'hidden',
          'zIndex': '999999',
          'margin': '0px',
          'webkitTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'MozTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'transition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
          'opacity': '0'
        }
        container = document.createElement( 'figure' );
        container.appendChild( target );
        applyProperties( container, containerProperties );

        var imageProperties = {
          'cursor': 'url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IyNDI3M0FFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IyNDI3NEFFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQjI0MjcxQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDQjI0MjcyQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+soZ1WgAABp5JREFUeNrcWn9MlVUY/u4dogIapV0gQ0SUO4WAXdT8B5ULc6uFgK3MLFxzFrQFZMtaed0oKTPj1x8EbbZZK5fNCdLWcvxQ+EOHyAQlBgiIVFxAJuUF7YrQ81zOtU+8F+Pe78K1d3s5537f+fE8nPec7z3vOSpJIRkbGwtEEgtdBdVCl0AXQr2hKqgJeg16BdoCrYNWqVSqbif7VQT8YqgB2jTmuDSJNoIcJUJVOVg5EsmH0Oehaj4bGRkZ6uvra2xvb29oamrqbGxs7K2vrx/s7Oy8yffBwcFzdTqdb0REhF9YWFhwSEhIpEajifDw8PAWzY5Cj0GzMUoNUx0R1RQJaJAcgKaw7ujo6O2urq7qysrKioyMjHNDQ0OjU2nP29tbnZ+fv1qv18cFBQWtU6vVs9gN9BvobhDqU5wIKryA5CuoLwj83dzc/NOePXuOlpSUXFNijiUlJS3ct2/fiytWrHgOhGbj0SD0dZD5UREiKOiJJA+axt9Go7F2165deUeOHOmVXCBbt271y8nJyfD3939aPCqCZoCQ2WEiKOQj7HYjzejUqVNFcXFxJdI0SEVFRdKGDRtShbmd5HwEGZM9IupJSHiJBjaazebr2dnZmdNFgsK+2Cf7JgZiEZhsimoSc/oZqh8eHjamp6fvPnTo0O/SDMiOHTsWFRQUHPDy8vLnQEGflZvZpKaFl4WcE7du3epPTU19+/Dhwz3SDMr27dsDioqKcufMmfM45wyIpD3QtPBiC0lgTowcPHgwa6ZJUIiBWIgJP1OB8aVJTQsFnkDSxCUWk60gPj6+VHIjKS8vT8TcSRdLcxhG5g+bpoWH3yF5ube3tw7L33uSGwqW/8/8/Pzoz30PItvuMy080HEZx/CZDQZDgeSmQmzESKwC870jgodcWhPhJx0LDw8vlNxYLl269Cb8Nfp5NP2kuyMiPM8EfvTodkhuLsQoJn4C/VG5ab3CfHd3d41SvpMrhRiBtVrgf01OZBv/nIRID4nIsG6xzBGxs7vK/YSvr2/SVF3xiYL55bVgwYJZp0+f/nOycuvXr38E+xczvOibjvTDLcDg4OBx7GfoD4ZwRPR8gUYbnCUBF3wuHMtPy8rKcmJjY33tleM7lqmpqdnPOo70RazAfNHapFrssaWOjo6Lzg43vj2zPT09febNm7ektLT0C1tk+IzvWIZlWcfR/oC5UWSjSCSUudbW1qvOEqmqqhrcvHnzOzdu3Lhii4ycBMuwLOs42t/ly5etmLUkEsJcbW3tbwq5ETbJ2CLBss70dfbsWSvmpZzsnJTzo6KiEhoaGoaVWlXkwE0mkyXk4+PjE6gUCUpMTMz86urq48gOkIjFWYHfEqf0EkkyJ06cyCMB/iah5OTkTCVIUDQajQf8wl+QNaune/2/c+eOS9olkb+YiYyM9FJ6NGhaHA2OBJV5e6uZI6LVaq2YTSTSz9zatWsfc8X84JzYtGlTJtXeauaorFy5cr7IXieRdubWrFnzpCtIJCYmWpZYKvNKksE/34q5g0RamQsNDV3sKhLy74ySZJYtW2bF3EIidZaFeOnSp5wl0t/fb4aYbJGwRYZlWcfR/mSYL8idRhOcxuTpdBoHBgZuY5Pk0LfrPqdRnE8080Fubm60Aru34QeRoLCMoyQoxCpItFnnCIVBB2kj5GHZj8iw/iDfWJHIaGBgYAyj4u5OghiBdZ00fqby9V0iMK8rSMoYMGZo392JECOwehAztHNipPFjxiGw0UnYuXPnInclQWzEKI0fCH1kL9JoCdAZjcZzAQEB77sjkZ6env3YjK22G6AT8i7DkSzI8KS7kSAmQWJQYL3HabwrjKVK4mQKX9w0g8EQ6i4k9u7dqyUm8TNNYJVsmpbMxL5EkuouxwopKSn+xcXFeeJYoRgkUmVYJyXirgc9ldBnbB302NxYiYJcGc6wgcLCwvysrCztTJgT+xYkzhCTvUPR//9hqBgZkxiZYjao1+vf4vLH4XalKbEP9iVIFIuRME2K9b92MOHCAEOdZS66MJAAAp5iiX0DBI4+ANfUiIhKvMLxOfRVSXaFA2ZQnpmZWefIFY68vLxVMNf4CVc4vuV3wiVXOCZUjkLygXTvpRoTL9Uw9NrS0tJVX1/fc/78+ettbW2WIPXy5cvnRkdHP6rT6QK0Wm0QNkXhGo0mUrjikvTvpZpPQODCFLA4bw6ya06/OnHNqXnGrjnZIyWNXzyjC0GPYIk0fvHM+h+XXzxjnOCcNH7x7KqT/VrSfwQYAOAcX9HTDttYAAAAAElFTkSuQmCC" ) 25 25, auto'
        }
        applyProperties( target, imageProperties );


        var captionContainerProperties = {
          'fontFamily': 'EB Garamond, serif;',
          'position': 'fixed',
          'bottom': '0px',
          'left': '0px',
          'padding': '20px',
          'color': '#fff',
          'wordSpacing': '0.2px',
          'webkitFontSmoothing': 'antialiased',
          'textShadow': '-1px 0px 1px rgba(0,0,0,0.4)'
        }
        var captionContainer = document.createElement( 'figcaption' );
        applyProperties( captionContainer, captionContainerProperties );


        if ( title ) {
          var captionTitleProperties = {
            'margin': '0px',
            'padding': '0px',
            'fontWeight': 'normal',
            'fontSize': '40px',
            'letterSpacing': '0.5px',
            'lineHeight': '35px',
            'textAlign': 'left'
          }
          var captionTitle = document.createElement( 'h1' );
          applyProperties( captionTitle, captionTitleProperties );
          captionTitle.innerHTML = title;
          captionContainer.appendChild( captionTitle );
        }

        if ( caption ) {
          var captionTextProperties = {
            'margin': '0px',
            'padding': '0px',
            'fontWeight': 'normal',
            'fontSize': '20px',
            'letterSpacing': '0.1px',
            'maxWidth': '500px',
            'textAlign': 'left',
            'background': 'none',
            'marginTop': '5px'
          }
          var captionText = document.createElement( 'h2' );
          applyProperties( captionText, captionTextProperties );
          captionText.innerHTML = caption;
          captionContainer.appendChild( captionText );
        }

        container.appendChild( captionContainer );

        setDimensions();

        mouse.xCurr = mouse.xDest = window.innerWidth / 2;
        mouse.yCurr = mouse.yDest = window.innerHeight / 2;

        document.body.appendChild( container );
        setTimeout( function() {
          container.style[ 'opacity' ] = '1';
        }, 10);
      }

      function removeViewer() {

        unlockBody();
        unbindEvents();
        document.body.removeChild( container );
      }

      function setDimensions() {

      
        var imageDimensions = getFit( sourceDimensions );
        target.width = imageDimensions.w;
        target.height = imageDimensions.h;
        horizontalOrientation = imageDimensions.fit;

        targetDimensions = { w: target.width, h: target.height };
        containerDimensions = { w: window.innerWidth, h: window.innerHeight };
        overflowArea = {x: containerDimensions.w - targetDimensions.w, y: containerDimensions.h - targetDimensions.h};

      }

      function init( element ) {

        var imageSource = element.getAttribute( 'data-image') || element.src;
        var title = element.getAttribute( 'data-title');
        var caption = element.getAttribute( 'data-caption');

        var img = new Image();
        img.onload = function() {

          sourceDimensions = { w: img.width, h: img.height }; // Save original dimensions for later.
          target = this;
          createViewer( title, caption );
          lockBody();
          bindEvents();
          loop();
        }

        img.src = imageSource;
      }

      function bindEvents() {

        container.addEventListener( 'mousemove', onMouseMove,   false );
        container.addEventListener( 'touchmove', onTouchMove,   false );
        window.addEventListener(    'resize',    setDimensions, false );
        window.addEventListener(    'keyup',     onKeyUp,       false );
        target.addEventListener(    'click',     removeViewer,  false );
      }

      function unbindEvents() {

        container.removeEventListener( 'mousemove', onMouseMove,   false );
        container.removeEventListener( 'touchmove', onTouchMove,   false);
        window.removeEventListener(    'resize',    setDimensions, false );
        window.removeEventListener(    'keyup',     onKeyUp,       false );
        target.removeEventListener(    'click',     removeViewer,  false )
      }

      function onMouseMove( event ) {

        mouse.xDest = event.clientX;
        mouse.yDest = event.clientY;
      }

      function onTouchMove( event ) {

        event.preventDefault(); // Needed to keep this event firing.
        mouse.xDest = event.touches[0].clientX;
        mouse.yDest = event.touches[0].clientY;
      }

      // Exit on excape key pressed;
      function onKeyUp( event ) {

        event.preventDefault();
        if ( event.keyCode === KEYCODE_ESC ) {
          removeViewer();
        }
      }

      function positionTarget() {

        mouse.xCurr += ( mouse.xDest - mouse.xCurr ) * 0.05;
        mouse.yCurr += ( mouse.yDest - mouse.yCurr ) * 0.05;

        if ( horizontalOrientation === true ) {

          // HORIZONTAL SCANNING
          currentPosition += ( mouse.xCurr - currentPosition );
          if( mouse.xCurr !== lastPosition ) {
            var position = parseFloat( currentPosition / containerDimensions.w );
            position = overflowArea.x * position;
            target.style[ 'webkitTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            target.style[ 'MozTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            target.style[ 'msTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
            lastPosition = mouse.xCurr;
          }
        } else if ( horizontalOrientation === false ) {

          // VERTICAL SCANNING
          currentPosition += ( mouse.yCurr - currentPosition );
          if( mouse.yCurr !== lastPosition ) {
            var position = parseFloat( currentPosition / containerDimensions.h );
            position = overflowArea.y * position;
            target.style[ 'webkitTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            target.style[ 'MozTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            target.style[ 'msTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
            lastPosition = mouse.yCurr;
          }
        }
      }

      function main( element ) {

        // Parse arguments

        if ( !element ) {
          throw 'You need to pass an element!';
        }

        startTracking( element );
      }

      return extend( main, {
          resize: setDimensions,
          start: start,
          stop: stop
      });

  })();


  new TypeIt(".element", {
  strings: "Brunner grew up in a rural area which is often named as a source of his inspiration. Besides the environment and the Lower Bavarian landscape, the population is also a direct influence to his work. This is true for the artist in general and for his alias Recondite in particular.",
  speed: 30,
  loop: false
}).go();


new TypeIt(".element2", {
strings: "In this surrounding Brunner created his first tracks in a small home studio. Following this early musical creative period, the young producer moved to Berlin in 2009. Brunner founded Plangent Records in 2011 and published tracks under the name Recondite. Already the first four-track EP (PLAN 001) received very positive national and international feedback.In the same year Recondite got his first gig at Panorama Bar/Berghain in Berlin.",
speed: 30,
loop: false
}).go();

new TypeIt(".element3", {
strings: "With his second long-player Hinterland, released in 2013 on the US label Ghostly International, Recondite became a worldwide-booked live act. Since then he has constantly been seen on stages in Europe, America, Asia, and Australia. Among other shows, he performed live between Sven Väth and Richie Hawtin on the Time Warp Festival 2014. In the very same year he became a Resident-DJ of Richie Hawtin's ENTER.Ibiza 2014. Recondite does major events such as Melt!, Amsterdam Dance Event and Time Warp just as club shows in smaller and mid-sized venues with correspondingly more intimate atmosphere.",
speed: 30,
loop: false
}).go();




function previewImages() {
  /* CONFIG */

  xOffset = 200;
  yOffset = 80;

  // these 2 variable determine popup's distance from the cursor
  // you might want to adjust to get the right result

  /* END CONFIG */

  $("a.screenshot").hover(function(e) {

      var $this = $(this); // caching $(this)

      $this.data('initialText', $this.text());
      $this.text("Listen").delay(1200); // Set text

      $("body").append("<div id='previewImage'><img src='" + this.rel + "' alt='rens preview image' />" + "</div>");

      $("#previewImage")
        .css("top", (e.pageY - xOffset) + "px")
        .css("left", (e.pageX + yOffset) + "px")
        .fadeIn("fast");
    },
    function() {

      var $this = $(this); // caching $(this)
      $this.text($this.data('initialText'));

      $("#previewImage").remove();
    });

  $("a.screenshot").mousemove(function(e) {

    $("#previewImage")
      .css("top", (e.pageY - xOffset) + "px")
      .css("left", (e.pageX + yOffset) + "px");

  });
};

  previewImages();




  var textWrapper = document.querySelector('.nl');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.nl .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    }).add({
      targets: '.nl',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
