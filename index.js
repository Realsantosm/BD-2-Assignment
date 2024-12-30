const express = require('express');
let cors = require('cors');
const { resolve } = require('path');

const app = express();
app.use(cors());
const port = 3000;

let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

app.use(express.static('static'));

// Q1 : Getting the hotels sorted by pricing
function sortHotelOnPrice(price1, price2, pricing) {
  if (pricing === 'low-to-high') {
    return price1.price - price2.price;
  } else if (pricing === 'high-to-low') {
    return price2.price - price1.price;
  } else {
    return 0;
  }
}
app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let results = hotels.sort((price1, price2) =>
    sortHotelOnPrice(price1, price2, pricing)
  );
  res.json({ hotels: results });
});

// Q2 : Get the hotels sorted based on their Ratings
function sortHotelOnRatings(rate1, rate2, rating) {
  if (rating === 'low-to-high') {
    return rate1.rating - rate2.rating;
  } else if (rating === 'high-to-low') {
    return rate2.rating - rate1.rating;
  } else {
    return 0;
  }
}
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let results = hotels.sort((rate1, rate2) =>
    sortHotelOnRatings(rate1, rate2, rating)
  );
  res.json({ hotels: results });
});

//Q3 : Sort based on Reviews
function sortHotelOnReviews(review1, review2, reviews) {
  if (reviews === 'least-to-most') {
    return review1.reviews - review2.reviews;
  } else if (reviews === 'most-to-least') {
    return review2.reviews - review1.reviews;
  } else {
    return 0;
  }
}
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let results = hotels.sort((review1, review2) =>
    sortHotelOnReviews(review1, review2, reviews)
  );
  res.json({ hotels: results });
});

//Q4 : Filter Hotels based on amenity
function filterByAmenity(amnty, amenity) {
  return amnty.amenity.toLowerCase() === amenity;
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  let results = hotels.filter((amnty) => filterByAmenity(amnty, amenity));
  res.json({ hotels: results });
});

// Q5 : Filter Hotels based on the selected country.
function filterByCountry(countries, country) {
  return countries.country.toLowerCase() === country;
}
app.get('/hotels/filter/country', (req, res) => {
  // /hotels/filter/country?country=india
  let country = req.query.country;
  let results = hotels.filter((countries) =>
    filterByCountry(countries, country)
  );
  res.json({ hotels: results });
});

// Q6 : Filter the Hotels based on the selected Category.
function filterByCategory(categories, category) {
  return categories.category.toLowerCase() === category;
}
app.get('/hotels/filter/category', (req, res) => {
  // /hotels/filter/category?category=family
  let category = req.query.category;
  let results = hotels.filter((categories) =>
    filterByCategory(categories, category)
  );
  res.json({ hotels: results });
});

// Q7 : Send all hotels

app.get('/hotels', (req, res) => {
  let results = hotels;
  res.json({ hotels: results });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
