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

    const deadline = 'January 24 2022 10:00:00 UTC+7';
    // const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('countDown', deadline);
  }

  function countDownLaunch() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

      return {
        total,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endTime) {
      if (document.getElementById(id)) {
        const clock = document.getElementById(id);
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          const t = getTimeRemaining(endTime);

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

    /*    const schedule = [
          ['January 24 2022 10:00:00 UTC+7', 'January 25 2022 10:00:00 UTC+7']
        ];

        for (var i = 0; i < schedule.length; i++) {
          var startDate = schedule[i][0];
          var endDate = schedule[i][1];

          // put dates in milliseconds for easy comparisons
          var startMs = Date.parse(startDate);
          var endMs = Date.parse(endDate);
          var currentMs = Date.parse(new Date());

          // if current date is between start and end dates, display clock
          if (endMs > currentMs && currentMs >= startMs) {
            initializeClock('countDownLaunch', endDate);
          }
        }

        schedule.forEach(([startDate, endDate]) => {
          // put dates in milliseconds for easy comparisons
          const startMs = Date.parse(startDate);
          const endMs = Date.parse(endDate);
          const currentMs = Date.parse(new Date());

          // if current date is between start and end dates, display clock
          if (endMs > currentMs && currentMs >= startMs) {
            initializeClock('countDownLaunch', endDate);
          }
        });*/
    const deadlineLaunch = 'January 24 2022 10:00:00 UTC+7';
    initializeClock('countDownLaunch', deadlineLaunch);
  }

  function bsPopover(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }

  function formValidation(){
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  }

  function init() {
    getBarwidth()
    clearFilter()
    countDownTimer()
    countDownLaunch()
    bsPopover()
    formValidation()
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

})(jQuery)
