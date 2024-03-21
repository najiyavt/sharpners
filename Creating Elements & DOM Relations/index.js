const sub = document.createElement('h3');

const subText = document.createTextNode('Buy high quality organic fruits online');

sub.appendChild(subText);
sub.style.fontStyle = 'italic'

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];

firstDiv.appendChild(sub);

