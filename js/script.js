// Anim Morph

var morphing = anime({
  targets: '.morph',
	points: [
        //Debut
        { value: '460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036' },
        //Fin
        { value: '460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph2',
	points: [
        //Debut
        { value: '108.040017 24.8652344 168.780251 0 460.677372 125.296036' },
        //Fin
        { value: '112.758683 38.9677241 184.146186 0 460.677372 157.296036' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph3',
	points: [
        //Debut
        { value: '75.3147561 38.1354167 460.677372 125.296036 0 68.5184024' },
        //Fin
        { value: '78.250435 57.8044647 460.677372 157.296036 0 100.518402' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});






// Copy to Clipboard
// Sources : https://alligator.io/js/copying-to-clipboard/

const ctcMail = document.querySelectorAll('.contact');

ctcMail.forEach(mail => {
  mail.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(mail);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      mail.getElementsByClassName('mail')[0].dataset.status = 'Copied!';
      mail.classList.add('success');

      setTimeout(() => {
        mail.classList.remove('success');
        mail.getElementsByClassName('mail')[0].dataset.status = 'Click to Copy';
      }, 1200);
    } catch(e) {}
  });
});











