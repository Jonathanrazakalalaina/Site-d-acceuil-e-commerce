function darkMode(){
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('body').style.color = '#fff';
    document.querySelector('#about').style.backgroundColor = '#686565';
    document.querySelector('header').style.backgroundColor = '#000';
    document.querySelector('header').style.boxShadow = '0 5px 10px 0 rgba(0, 0, 0, 0.1), 0 8px 20px 0 rgba(0, 0, 0, 0.1)';
    document.querySelector('.overlays').style.backgroundColor = 'rgba(37, 36, 36, 0.5)';
    document.querySelector('h2').style.color = '#fff';
    document.querySelector('h1').style.color = '#fff';
    document.querySelector('#firstArticle').style.backgroundColor = '#838181';
    document.querySelector('#secondArticle').style.backgroundColor = '#838181';
    document.querySelector('#thirdArticle').style.backgroundColor = '#838181';
    document.querySelector('.secondH').style.color = '#fff';
    document.querySelector('.secondH').style.borderColor = '#fff';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    document.querySelector('#s-overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    document.querySelector('#t-overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    document.querySelector('.overlay').style.fontWeight = 'bold';
    document.querySelector('#s-overlay').style.fontWeight = 'bold';
    document.querySelector('#t-overlay').style.fontWeight = 'bold';

}
function notDarkMode(){
    document.querySelector('body').style.backgroundColor = '#fff'
    document.querySelector('body').style.color = '#000';
    document.querySelector('#about').style.backgroundColor = '#eeeeee';
    document.querySelector('header').style.backgroundColor = '#fff';
    document.querySelector('header').style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 15px 0 rgba(0, 0, 0, 0.10)';
    document.querySelector('.overlays').style.backgroundColor = 'rgba(37, 36, 36, 0)';
    document.querySelector('h2').style.color = '#0671ec';
    document.querySelector('h1').style.color = '#0671ec';
    document.querySelector('#firstArticle').style.backgroundColor = '#eeeeee';
    document.querySelector('#secondArticle').style.backgroundColor = '#eeeeee';
    document.querySelector('#thirdArticle').style.backgroundColor = '#eeeeee';
    document.querySelector('.secondH').style.color = '#0671ec';
    document.querySelector('.secondH').style.borderColor = '#0671ec';
    document.querySelector('.overlay').style.fontWeight = 'normal';
    document.querySelector('#s-overlay').style.fontWeight = 'normal';
    document.querySelector('#t-overlay').style.fontWeight = 'normal';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    document.querySelector('#s-overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    document.querySelector('#t-overlay').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

}