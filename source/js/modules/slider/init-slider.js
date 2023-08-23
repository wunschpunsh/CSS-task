import noUiSlider from '../../vendor/nouislider';

const initSlider = () => {
  const slider = document.querySelector('#slider');
  const sliderValue = document.querySelector('.custom-slider__number');
  noUiSlider.create(slider, {
    start: [75],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.noUiSlider.on('update', (value, handle) => {
    sliderValue.textContent = Math.floor(value[handle]);
  });
};

export {initSlider};
