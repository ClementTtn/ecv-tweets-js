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

const tweetsList = document.getElementById('tweets-list');

// Mise en place d'une boucle forEach sur le tableau tweets
// tweet représente l'objet parcouru dans le tableau par la boucle
tweets.forEach(tweet => {
  const liTweet = document.createElement('li');
  liTweet.classList.add('tweet');

  const pContent = document.createElement('p');
  pContent.classList.add('content');
  // firstTweet.content -> tweet.content ('content' de l'objet parcouru)
  pContent.textContent = 'Contenu du tweet : ' + tweet.content;

  const pLikes = document.createElement('p');
  pLikes.classList.add('likes');
  // firstTweet.likes -> tweet.likes ('likes' de l'objet parcouru)
  pLikes.textContent = 'Nombre de likes : ' + tweet.likes;


  const pAuthor = document.createElement('p');
  pAuthor.classList.add('author');
  // firstTweet.author -> tweet.author ('author' de l'objet parcouru)
  pAuthor.textContent = 'Auteur : ' + tweet.author;

  liTweet.appendChild(pContent);
  liTweet.appendChild(pLikes);
  liTweet.appendChild(pAuthor);
  tweetsList.appendChild(liTweet);
});
