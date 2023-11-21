const TICKETS_ROOT = 'https://aviasales-test-api.kata.academy/';

export async function getSearchId() {
  try {
    const request = await fetch(TICKETS_ROOT + 'search');
    const response = await request.json();
    const { searchId } = response;
    localStorage.setItem('searchId', searchId);
  } catch (err) {
    throw new Error('Error: ' + err);
  }
}
