// import faker from 'faker';
// utils
// import { mockImgCover } from '../utils/mockImages';

import axios from 'axios';

const TITLES = [];
const URLS = [];
const INGRS = [];
const NURT = [];
const ID = [];

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
  'Designify Agency Landing Page Design',
  '✨What is Done is Done ✨',
  'Fresh Prince',
  'Six Socks Studio',
  'vincenzo de cotiis’ crossing over showcases a research on contamination',
  'Simple, Great Looking Animations in Your Project | Video Tutorial',
  '40 Free Serif Fonts for Digital Designers',
  'Examining the Evolution of the Typical Web Design Client',
  'Katie Griffin loves making that homey art',
  'The American Dream retold through mid-century railroad graphics',
  'Illustration System Design',
  'CarZio-Delivery Driver App SignIn/SignUp',
  'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
  'Tylko Organise effortlessly -3D & Motion Design',
  'RAYO ?? A expanded visual arts festival identity',
  'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
  'Inside the Mind of Samuel Day',
  'Portfolio Review: Is This Portfolio Too Creative?',
  'Akkers van Margraten',
  'Gradient Ticket icon',
  'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
  'How to Animate a SVG with border-image'
];

const getBlogsData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/recipes");
    console.log("working")
      console.log(res['data'])
      for(let i =0; i<10; i++){
        console.log(res['data'][i])
        TITLES.push(res['data'][i]['recipe_name'])
        URLS.push(res['data'][i]['image_url'])
        INGRS.push(res['data'][i]['ingredients'])
        NURT.push(res['data'][i]['nutritions'])
        ID.push(res['data'][i]['recipe_id'])
      }
      console.log(TITLES)
      const posts = [...Array(10)].map((_, index) => ({
  id: ID[index + 1],
  cover: URLS[index + 1],
  title: TITLES[index + 1],
  createdAt: null,
  view: 23,
  comment: null,
  share: 343,
  favorite: 32,
  author: {
    name: "Harshith",
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
  }));
      console.log(posts)
      return posts;


  } catch(err) {
    throw {};

  }

}

export default getBlogsData;
