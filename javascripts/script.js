/* Author: Harrison Massey

*/

jQuery(function($) {
  var sliders = $('.slider')
  if(sliders.slider) {
    sliders.slider({
      value: 1,
      min: 0,
      max: 4,
      step: 1,
      range: "min"
    })
  }
})
