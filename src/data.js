import image1 from './images/tour-1.jpeg'
import image2 from './images/tour-2.jpeg'
import image3 from './images/tour-3.jpeg'
import image4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text:'Home'},
    {id:2, href:'#about', text:'About'},
    {id:3, href:'#services', text:'Services'},
    {id:4, href:'#tours', text:'Tours'},
]

export const mediaLinks = [
    {id:1, href:"https://www.twitter.com", icon:'fab fa-twitter'},
    {id:2, href:"https://www.facebook.com", icon:'fab fa-facebook'},
    {id:3, href:"https://www.squarespace.com", icon:'fab fa-squarespace'},
]


export const tours = [
{   id:1,
    images: image1, 
    title:"Tibet Adventure",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"China",
    duration:"6",
    cost:"2100",
},
{   id:2,
    images:image2, 
    title:"Best Of Java",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"Indonesia",
    duration:"11",
    cost:"1400",
},
{   id:3,
    images:image3, 
    title:"Best Of Java",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:"Indonesia",
    duration:"18",
    cost:"1300",
},
{   id:4,
    images:image4, 
    title:"Kenya Highlights",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location:" Kenya",
    duration:"20",
    cost:"3300",
},
]
