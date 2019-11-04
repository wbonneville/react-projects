import React from 'react';

import './App.css';

const App = () => <PersonList />;

// people array = to people objects
const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'Wesley',
      job: 'Actual Programmer',
    },
    {
      img: 32,
      name: 'Douglas',
      job: 'artist',
      head: 'Latrine Cleaner',
    },
    {
      img: 12,
      name: 'Elliot',
      job: 'Cook',
    },
    {
      img: 2,
      name: 'Hiroki',
      job: 'Tech Expert',
    },
  ];

  return (
    // person component recieves person prop with a specific index for the person
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </Person>
      <Person person={people[2]} />
      <Person person={people[3]} />
    </section>
  );
};

// person component recieves props
// each person recieves img, name, job, head props
const Person = props => {
  const { img, name, job, head } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h4>{head}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
