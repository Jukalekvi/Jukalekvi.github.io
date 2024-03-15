function tervehdi() {
    alert('Tervetuloa Haaga-Helian musiikkikerhon verkkosivuille!');
    localStorage.setItem('visited', 'true'); // Merkitään, että käyttäjä on käynyt sivulla
}

document.addEventListener('DOMContentLoaded', function() {
    // Tarkistetaan, onko käyttäjä jo käynyt sivulla
    if (!localStorage.getItem('visited')) {
        tervehdi(); // Jos ei ole, tervehditään käyttäjä
    }
});
