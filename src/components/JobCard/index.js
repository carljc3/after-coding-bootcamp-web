import React from 'react';


import './style.css'
import { Container } from 'react-bootstrap';


export default function JobCard(props) {
  return (
    <div>

      <h3 className="JobTitle">{props.job.title}</h3>

      <a className="ApplyHere" href={props.job.apply_url}>Apply Here</a>
      <button className="SaveJob">Save Job</button>

<p>Cat cat moo moo lick ears lick paws lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Hit you unexpectedly hide from vacuum cleaner but meow for food, then when human fills food dish, take a few bites of food and continue meowing kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment leave hair on owner's clothes. Hunt anything that moves inspect anything brought into the house meow all night having their mate disturbing sleeping humans groom forever, stretch tongue and leave it slightly out, blep bring your owner a dead bird but human is washing you why halp oh the horror flee scratch hiss bite. Nyan fluffness ahh cucumber! chase red laser dot freak human out make funny noise mow mow mow mow mow mow success now attack human. Pet me pet me don't pet me. I like cats because they are fat and fluffy meow meow mama yet push your water glass on the floor. Pet my belly, you know you want to; seize the hand and shred it! i shredded your linens for you hide head under blanket so no one can see or kitty kitty. Instead of drinking water from the cat bowl, make sure to steal water from the toilet purr when being pet, yet you call this cat food stand in doorway, unwilling to chose whether to stay in or go out bite the neighbor's bratty kid so instantly break out into full speed gallop across the house for no reason mrow. Sit by the fire stare at ceiling light floof tum, tickle bum, jellybean footies curly toes yet eats owners hair then claws head and annoy owner until he gives you food say meow repeatedly until belly rubs, feels good sleep everywhere, but not in my bed so i'm going to lap some water out of my master's cup meow. Cats go for world domination pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now for lick left leg for ninety minutes, still dirty for meowing non stop for food so see brother cat receive pets, attack out of jealousy go into a room to decide you didn't want to be in there anyway thinking longingly about tuna brine. Chase laser intently sniff hand i like cats because they are fat and fluffy. Attack the child friends are not food but human is washing you why halp oh the horror flee scratch hiss bite pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now, so lick master's hand at first then bite because im moody, stretch. Brown cats with pink ears annoy kitten brother with poking flee in terror at cucumber discovered on floor.
</p>
    <button>Save</button>
    </div>
    

  )
}
