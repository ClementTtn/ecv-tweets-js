const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
]

// Récupération dans le HTML de l'élément parent (ici ul avec la classe 'tweets-list')
const tweetsList = document.getElementById('tweets-list');
// Récupération du premier tweet (premier élément du tableau 'tweets')
const firstTweet = tweets[0];


// Création du template
// Création de la balise li, et on lui ajoute la classe 'tweet'
const liTweet = document.createElement('li');
liTweet.classList.add('tweet');


// Création de la balise p, et on lui ajoute la classe 'content'
const pContent = document.createElement('p');
pContent.classList.add('content');
// Contenu de la balise à afficher
pContent.textContent = 'Contenu du tweet : ' + firstTweet.content;


// Création de la balise p, et on lui ajoute la classe 'likes'
const pLikes = document.createElement('p');
pLikes.classList.add('likes');
// Contenu de la balise à afficher
pLikes.textContent = 'Nombre de likes : ' + firstTweet.likes;


// Création de la balise p, et on lui ajoute la classe 'author'
const pAuthor = document.createElement('p');
pAuthor.classList.add('author');
// Contenu de la balise à afficher
pAuthor.textContent = 'Auteur : ' + firstTweet.author;


// Ajout des 3 éléments enfants dans leur élément parent (Content + likes + author -> tweet)
liTweet.appendChild(pContent);
liTweet.appendChild(pLikes);
liTweet.appendChild(pAuthor);

// Ajout de liTweet à son parent -> tweets-list défini directement dans le HTML
tweetsList.appendChild(liTweet);

