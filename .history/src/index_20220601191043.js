const navItems = document.querySelectorAll('.nav-item-container')
let progress = document.querySelectorAll('.progress')
let progressValueContainer = document.querySelectorAll('.progress__value-container')

// Progress
progressValue.forEach((item) => {
  item = 0
  
})
progressEndValue.forEach((item) => {
  item = 20
  
})
progressValue.forEach((item) => {
  item = 0
  
})
let speed = 1000

let progressInterval = setInterval(() => {
  progressValue++
  progressValueContainer.textContent = `${progressValue}%`
  progress.style.background = 'red'
  if (progressValue == progressEndValue) {
    clearInterval(progressInterval) 
  }
}, speed)

// progressInterval()

// Select nav items
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((disabledItems) => {
      disabledItems.classList.remove('nav-item-container-active')
    })
    item.classList.add('nav-item-container-active')
  })
})

// Calendar
var app = {
  settings: {
    container: $('.calendar'),
    calendar: $('.front'),
    days: $('.weeks span'),
    form: $('.back'),
    input: $('.back input'),
    buttons: $('.back button')
  },

  init: function() {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function(currentSide, desiredSide) {
    settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

  },

  bindUIActions: function() {
    settings.days.on('click', function(){
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on('click', function(){
      instance.swap(settings.form, settings.calendar);
    });
  }
}

app.init();