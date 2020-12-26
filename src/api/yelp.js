import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KQVugut2UJeuYzIxFlsDMxlNVNhvjAqpwNjIZ_-g6_oxkUdnEC5ptotVQEiKGYLxCC8OXjXqpkjWinXJUOsHleY82tQaYqq03xq62xgqV1B1TJvg9tRTYYBR--jaX3Yx",
  },
});
