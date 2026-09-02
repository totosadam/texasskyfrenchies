/* =====================================================================
   TEXAS SKY FRENCHIES — EDIT THIS FILE TO UPDATE THE WEBSITE
   ---------------------------------------------------------------------
   Everything below can be changed safely. Rules:
     - Keep the quotes "like this" around text.
     - Keep the commas at the end of each line.
     - status can only be: "Available", "Reserved" or "Sold"
     - photo must match a filename inside the images/ folder
   ===================================================================== */

window.SITE = {

  /* ---- PHONE NUMBER (shows everywhere, and powers the call buttons) ---- */
  phone: "(972) 213-2152",

  /* ---- TOP YELLOW-BAR ANNOUNCEMENT (set to "" to hide the bar) ---- */
  announcement: "Now booking our 2026 litters — call or text to join the waitlist.",


  /* =====================================================================
     AVAILABLE PUPPIES
     Add a puppy: copy one { ... }, block and paste it below, then edit.
     Remove a puppy: delete its whole { ... }, block.
     ===================================================================== */
  puppies: [
    {
      name:   "Male · Lilac Merle Fluffy",
      note:   "AKC registered",
      status: "Available",
      photo:  "puppy-lilac-merle-male.jpeg",
    },
    {
      name:   "Female · Chocolate Merle Fluffy",
      note:   "AKC registered",
      status: "Available",
      photo:  "puppy-choc-merle-female-1.jpeg",
    },
    {
      name:   "Female · Chocolate Merle Fluffy",
      note:   "AKC registered",
      status: "Available",
      photo:  "puppy-choc-merle-female-2.jpeg",
    },
    {
      name:   "Female · Chocolate Fluffy",
      note:   "AKC registered",
      status: "Reserved",
      photo:  "puppy-chocolate-female.jpeg",
    },
    {
      name:   "Female · Black Fluffy",
      note:   "AKC registered",
      status: "Sold",
      photo:  "puppy-black-female.jpeg",
    },
  ],


  /* ---- "A RAINBOW OF FRENCHIE COLORS" GALLERY (filenames only) ---- */
  colorsGallery: [
    "image1.jpeg",
    "image6.jpeg",
    "image16.jpeg",
    "image12.jpeg",
    "image10.jpeg",
    "image7.jpeg",
    "image17.jpeg",
    "image18.jpeg",
  ],


  /* ---- "MOMENTS FROM OUR HOME" PHOTO ALBUM (filenames only) ---- */
  albumGallery: [
    "image3.jpeg",
    "image17.jpeg",
    "image5.jpeg",
    "image7.jpeg",
    "image2.jpeg",
    "image10.jpeg",
  ],


  /* ---- BIG FEATURE PHOTOS around the page ---- */
  photos: {
    logo:   "logo.jpg",        // small round logo in the top bar
    hero:   "image18.jpeg",    // big photo at the very top
    breed:  "image16.jpeg",    // "Big personality, perfect size."
    social: "image1.jpeg",     // "See our latest pups on social"
    about:  "image8.jpeg",     // "A little family kennel in Dallas."
    gohome: "image12.jpeg",    // "What comes home with every pup"
  },


  /* ---- SOCIAL LINKS ---- */
  instagram: "https://www.instagram.com/Texas_sky_frenchies_2",
  facebook:  "https://www.facebook.com/profile.php?id=61584418839744",


  /* ---- CUSTOMER REVIEWS ---- */
  testimonials: [
    { quote: "Our Frenchie came home so calm and social — you can tell she was raised with love.", name: "The Morales Family · Dallas" },
    { quote: "They answered every question and sent photos the whole way. Truly a family, not a business.", name: "Ashley R. · Fort Worth" },
    { quote: "Healthiest, happiest little guy. We couldn't have asked for a better experience.", name: "James & Priya · Plano" },
  ],

};
