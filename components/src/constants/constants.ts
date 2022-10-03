export const NavigationList = [
  { href: '/', text: 'Main' },
  { href: '/about', text: 'About Us' },
];

export const ImdbId = ['tt0944947', 'tt13624526', 'tt0816692', 'tt0319262'];

export const getMovies = async function <T>(id: string): Promise<T> {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=bac3fe50`);
  return response.json();
};
