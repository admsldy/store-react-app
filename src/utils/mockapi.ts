export const API_URL: string = 'https://69613291e7aa517cb7985598.mockapi.io/products'

export const API_ITEMS_PER_PAGE_LIMIT = 12;

export function createUrl(
  page: string | number,
  name: string = '',
  sort?: string,
  order?: string
): string {

    const urlObj: URL = new URL(API_URL);
    urlObj.searchParams.append('page', `${page}`);
    urlObj.searchParams.append('limit', `${API_ITEMS_PER_PAGE_LIMIT}`);
    void (name && urlObj.searchParams.append('name', `${name}`));
    void (sort && urlObj.searchParams.append('sortBy', `${sort}`));
    void (order && urlObj.searchParams.append('order', `${order}`));

    return urlObj.toString();
}


