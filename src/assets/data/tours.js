import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";
import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "200 Westminster Bridge Road, London, SE1 7UT, United Kingdom.",
    price: 110,
    duration: "3 Nights / 4 Days",
    hotel: "Park Plaza London Waterloo",
    flight: "IndiGo",
    maxGroupSize: 10,
    desc: "The oldest structure in London, Westminster Bridge, is located in the heart of the bustling city of London. The bridge overlooks the tranquil waters of the River Thames, with the County Hall on one side and the London Eye on the other. The main attraction of its beauty is its seven graceful arches. One can take a lovely morning stroll when the city is quiet and the view is unhindered.",
    place:
      "Houses of Parliment, St. James's Park, Tate Modern, British Museum, The Pall Mall, Museum of Freemasonry.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali",
    city: "Indonesia",
    distance: 400,
    address: "Kawasan Wisata Nusa Dua BTDC Bali, Indonesia.",
    price: 150,
    duration: "5 Nights / 6 Days",
    hotel: "Gravity Boutique Hotel",
    flight: "Air India",
    maxGroupSize: 8,
    desc: "Bali is one of the most popular tourist destinations in Indonesia. Whether you want to explore the beaches, are a wildlife enthusiast, or are a lover of art, Bali is ready to give you the ultimate treat. We spent a few weeks exploring the best that Bali has to offer. While it’s not the exotic destination it once was, it still has a lot to offer visitors, and there are plenty of things to know before visiting Bali.",
    place:
      "Uluwatu Temple, Bali Zoo, Campuhan Ridge, Mount Batur, Tirta Empul Temple, Nusa Dua Beach, Jatiluwih Green Land, Tirta Gangga.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains",
    city: "Thailand",
    distance: 500,
    address:
      "286 Snowy Mountains Highway, Cooma, New South Wales 2630 Australia.",
    price: 120,
    duration: "7 Nights / 8 Days",
    hotel: "The Canal Garden Resort",
    flight: "Alliance Air",
    maxGroupSize: 8,
    desc: "“The Snowies” are a vast region containing some of the highest peaks in Australia and serve as a veritable adventure playground all-year-round as during the winter months they are home to some of the country's best ski and snow activities, while in the summer they offer numerous opportunities for off-road adventures from 4WDing, mountain biking, fishing and much more. It's an area that changes its character drastically between the seasons, yet has no less to see and do from one to the next and remains as untouched and pure a part of Australia as still remains.",
    place:
      "Pattaya Floating Market, Chao Phraya River, Safari World Zoo, Sanctuary of Truth, Simon Cabaret Show.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    photo1: tourImg02,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise",
    city: "Thailand",
    distance: 500,
    address:
      " 55/104 moo.5 T.Makhamtia Mueang Suratthani, 84000 Suratthani, Thailand.",
    price: 210,
    duration: "3 Nights / 4 Days",
    hotel: "Cotswold Lodge",
    flight: "Vistara",
    maxGroupSize: 8,
    desc: "Sunrise is a time when there is calm and quiet, the atmosphere is pure and fresh and there is no dust, no smoke, and no noise. We can inhale a lot of pure oxygen. A man who goes out for a long walk at sunrise never falls ill. The rising sun gives us light and warmth. It gives new life to withering plants and a new lease of life .to all living creatures. That is why even the gods worship the rising sun.",

    place: "James Bond Island, Phi Phi Islands, Krabi, Khao Lak, Chiang Mai.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida Bali",
    city: "Indonesia",
    distance: 500,
    address: "Klungkung Regency, Bali, Indonesia.",
    price: 170,
    duration: "4 Nights / 5 Days",
    hotel: "BB Resort Villa and Spa",
    flight: "SpiceJet",
    maxGroupSize: 8,
    desc: "Nusa Lembongan is the most popular – and has the most going on. It’s always where I choose to stay in the Nusa Islands, and where I recommend anyone planning a Bali honeymoon to. Nusa Penida is arguably the most beautiful – but the most raw, and remote. If you want to completely disconnect, this is a natural, gorgeous island to do so. And Nusa Ceningan is the smallest, but is very up and coming. Since there is less going on than Nusa L in terms of restaurants, bars, etc. But, that’s changing by the day! Nusa Penida is definitely getting more popular and there are more options popping up in terms of restaurants and hotels.",
    place:
      "Nusa Penida Island, Kelingking Beach, Pasih Uug Beach, Atuh Beach, Crystal Bay, Angel's Billabong.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Ueno Park, Tokyo.",
    price: 220,
    duration: "2 Nights / 3 Days",
    hotel: "Uno Hotel",
    flight: "Go First",
    maxGroupSize: 8,
    desc: "Cherry blossoms are a symbolic flower of the spring, a time of renewal, and the fleeting nature of life. Their life is very short. After their beauty peaks around two weeks, the blossoms start to fall. During this season in Japan, people like to have cherry blossom parties with colleagues, friends, and family. A cherry blossom makes people merry. They enjoy eating, drinking, and barbecuing underneath the cherry blossoms. We call this custom hanami. Hanami literally means “watching blossoms,” and the tradition can be traced back at least a thousand years. We bring cooked meals, alcohol, snacks, and sweets, like a potluck party. Schools and offices hold welcome parties during hanami, a chance for people to bond and meet new friends.",
    place:
      "Washington D.C, Paris, France, Vancouver, Bonn, Jerte Valley, Stockholm, Sweden.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: "Flathaugen 36, 8392 Sørvågen, Norway.",
    price: 320,
    duration: "5 Nights / 6 Days",
    hotel: "The Tide Hotel",
    flight: "Qatar Airways",
    maxGroupSize: 8,
    desc: "Lofoten is a mecca for hiking, climbing, fishing, kayaking, skiing, Arctic surfing (in the summer AND winter), and cycling. The tourism scene there has a very young vibe, with lots of budget accommodation, and even the luxury accommodation markets itself towards adventure seekers.",
    place:
      "Reinebringen, Haukland Beach, Lofoten Krigsminne Museum, Lofotr Viking Museum, Kvalvika Beach,Uttakleiv Beach.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Tower Bridge",
    city: "London",
    distance: 500,
    address: "Tower Bridge Rd, London SE1 2UP, UK.",
    price: 310,
    duration: "8 Nights / 9 Days",
    hotel: "Novotel London Tower Bridge",
    flight: "IndiGo",
    maxGroupSize: 8,
    desc: "The Tower Bridge is a combined bascule and suspension bridge in London constructed over the River Thames. The bridge offers gorgeous panoramic views of the city. One can also experience the amazing view from the high-level walkway and notice the wealth of museums and historic buildings surrounding the Thames. It is close to the Tower of London and is an iconic symbol of the city nowadays. The Tower Bridge exhibition lets you know the history of the bridge, how and why it was built through various interactive videos and displays about the landmark. It has a glass floor walkway that provides a unique experience for the visitors. One may also get a spectacular panoramic view over the river. Bascule bridge refers to those bridges which are lifted in order to allow the boats and the barges to pass.",
    place:
      "St.Paul's Cathedral, The Shard, London Eye, Borough Market, Sky Garden, London Bridge, The National Gallery, Buckingham Palace, The Crown Jewels, Millennium Bridge",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Ooty",
    city: "Tamil Nadu",
    distance: 800,
    address: "Nilgiris, Ooty.",
    price: 255,
    duration: "3 Nights / 4 Days",
    hotel: "Western Valley Resorts",
    flight: "AirAsia India",
    maxGroupSize: 8,
    desc: "Ooty is one of the most frequented holiday destinations for tourists from Tamil Nadu, Kerala and Karnataka. Given the fact that the southern part of India gets too hot during the summer season, a trip to Ooty offers the much-needed respite from the heat. This picturesque and serene hill station is also a popular honeymoon destination among couples. Ooty offers stunning views of the Nilgiri Hills and lush green landscapes dotted with alpine woods, clear lakes, emerald green tea estates and colourful blossoms. The hill station also houses the popular Nilgiri Mountain Railway which was declared a UNESCO World Heritage Site in 2005.",
    place:
      "Ooty Botanical Gardens, Dolphin’s Nose, Rose Garden, Avalanche Lake, Doddabetta Peak, St Stephan’s Church, Thread Garden, Kalhatti Falls, Annamalai Temple, Kamraj Sagar Lake, Catherine Falls.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Lonavala and Khandala",
    city: "Pune",
    distance: 600,
    address: "Pune, Maharastra, India.",
    price: 115,
    duration: "4 Nights / 5 Days",
    hotel: "Hilton Shillim Estate Retreat and Spa",
    flight: "TruJet",
    maxGroupSize: 8,
    desc: "Perched at a height of 622 metres above sea level, Lonavala and Khandala are twin hill stations in the state of Maharashtra. Thanks to their pleasant weather conditions and proximity to Mumbai and Pune, the hill stations are frequented by Mumbaikars and Punekars year-round. Both Lonavala and Khandala come to life during the monsoon season when lush greenery, sparkling lakes and milky-white waterfalls add to the beauty of the landscape. Besides being a nature lover’s delight, the hill stations are quite popular among adventure enthusiasts.",
    place:
      "Tiger’s Leap, Rajmachi Fort, Aamby Valley, Lohagad Fort, Bhushi Dam, Sunil’s Celebrity Wax Museum, Visapur Fort, Tikona Fort, Narayani Dham Temple.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Shillong",
    city: "Meghalaya",
    distance: 500,
    address: "East Khasi Hills, Meghalaya, India.",
    price: 220,
    duration: "6 Nights / 7 Days",
    hotel: "The Loft Executive Inn",
    flight: "Air India",
    maxGroupSize: 8,
    desc: "Known for pleasant weather conditions and picturesque locations, Shillong in Meghalaya is one of the most cliched yet highly frequented tourist destinations in India. The hill station is popularly known as Scotland of the East, thanks to the rolling hills, gushing waterfalls and lovely landscape that reminded European colonists of stunning Scotland. Shillong also boasts crystal-clear lakes, high mountain peaks and amazing golf courses, museums and cafes. What’s more, the distinct culture, delectable local cuisines and amazing shopping hubs promise a fun-filled vacation every time.",
    place:
      "Umiam Lake, Elephant Waterfalls, Shillong Peak, Cathedral of Mary Help of Christians, Police Bazaar, Don Bosco Museum, Sweet Falls, Phan Nonglait Park, Spread Eagle Falls, Lady Hydari Park, Sohpetbneng.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "Gangtok",
    city: "Sikkim",
    distance: 550,
    address: "Gangtok, Sikkim.",
    price: 270,
    duration: "5 Nights / 6 Days",
    hotel: "Denzong Shangrila",
    flight: "Air India Express",
    maxGroupSize: 8,
    desc: "A jewel in the north-eastern part of India, Sikkim is one of the most beautiful and serene holiday destinations you will ever find. Although a vacation in Sikkim sounds cliched, the hill station is a popular choice among nature enthusiasts and peace seekers. From snow-capped mountains and colourful meadows to thick woodlands and exotic flowers, there are so many things that add a distinctive charm to this hill station. And that’s not all, the town also houses some pretty monasteries, stupas and Hindu shrines that make it a religiously significant place for the Hindus and Buddhists.",
    place:
      "Gangtok, Nathula Pass, Tsomgo Lake, Kanchenjunga Base Camp, Pelling, Zuluk, Gurudongmar Lake, Rumtek Monastery, Namchi, Jawaharlal Nehru Botanical Garden.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
];

export default tours;
