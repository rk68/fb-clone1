import React from 'react';
import Story from './Story';
import "./StoryReel.css";


function StoryReel() {
  return (
  
  <div className='storyReel'>

    <Story
      image="http://www.thedetroitbureau.com/wp-content/uploads/2018/05/Elon-Musk-speaking.jpg"
      profileSrc="http://www.thedetroitbureau.com/wp-content/uploads/2018/05/Elon-Musk-speaking.jpg"
      title="Elon Musk"
    />

    <Story
      image="https://www.sciencefriday.com/wp-content/uploads/2017/06/amazon-1024x768.jpg"
      profileSrc="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2018/09/14/jeff-bezos.jpg"
      title="Jeffrey Bezos"
    />

    <Story
      image="https://media.glassdoor.com/o/8f/86/85/9a/apple-store.jpg"
      profileSrc="https://www.ilounge.com/wp-content/uploads/2019/05/Tim-Cook.jpg"
      title="Tim Apple"
    />


  </div>
  );
}

export default StoryReel;
