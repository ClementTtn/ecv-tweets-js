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

tweets.forEach(tweet => {
  const liTweet = document.createElement('li');
  liTweet.classList.add('tweet');

  const pContent = document.createElement('p');
  pContent.classList.add('content');
  pContent.textContent = 'Contenu du tweet : ' + tweet.content;

  const pLikes = document.createElement('p');
  pLikes.classList.add('likes');
  pLikes.textContent = 'Nombre de likes : ' + tweet.likes;
  // Si le tweet possède plus de 10 likes, ajout de la classe 'favorite'
  if (tweet.likes > 10) {
    liTweet.classList.add('favorite');
  }

  const pAuthor = document.createElement('p');
  pAuthor.classList.add('author');
  pAuthor.textContent = 'Auteur : ' + tweet.author;

  liTweet.appendChild(pContent);
  liTweet.appendChild(pLikes);
  liTweet.appendChild(pAuthor);
  tweetsList.appendChild(liTweet);
});
