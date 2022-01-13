/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {

}

(function ($) {
  'use strict'

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    // console.log(scrollbarWidth);
    return scrollbarWidth
  }

  function clearFilter() {
    function uncheckAll() {
      document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
    }

    // let clearBtn = document.getElementById('clearFilter')
    if (document.getElementById('clearFilter')) {
      document.getElementById('clearFilter').addEventListener('click', uncheckAll)
    }
    // $('#clearFilter').on('click', uncheckAll)
  }

  function countDownTimer() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endTime) {
      if (document.getElementById(id)) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          const t = getTimeRemaining(endTime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }

        updateClock();
        const timeInterval = setInterval(updateClock, 1000);
      }
    }

    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('countDown', deadline);

  }

  /*  function countDownTimer() {
      function getTimeRemaining(endTime) {
        const total = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }

      function initializeClock(endTime) {
        const daysSpan = $('.days');
        const hoursSpan = $('.hours');
        const minutesSpan = $('.minutes');
        const secondsSpan = $('.seconds');

        function updateClock() {
          const t = getTimeRemaining(endTime);

          daysSpan.html(t.days);
          hoursSpan.html(('0' + t.hours).slice(-2))
          minutesSpan.html(('0' + t.minutes).slice(-2))
          secondsSpan.html(('0' + t.seconds).slice(-2))

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }

        updateClock();
        const timeInterval = setInterval(updateClock, 1000);
      }

      const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);


      initializeClock(deadline);

    }*/


  function init() {
    getBarwidth()
    clearFilter()
    countDownTimer()
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

})(jQuery)
