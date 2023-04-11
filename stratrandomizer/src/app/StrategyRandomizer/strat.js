import PropTypes from 'prop-types'

const strats = [
  'Rush A',
  'Rush B',
  'Rush C',
  'Default',
  'Split Mid',
  'Contact',
  'Fake A, Go B',
  'Fake B, Go A',
  'Fake C, Go A',
  'Mid to B',
  'Utility dump',
];

// const strategyObject = {
//   id: "",
//   description: "",
//   viableMaps: ['mapid-1'],
//   agents: ['agentid-1']
// }

function getRandomInt(min, max, props) {
  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const RandomStrat = () => {
  const findLengthAndReturnIndex = (array) => {
    let index;
    const length = array.length;

    index = getRandomInt(0, length);

    return index;
  };

  const i = findLengthAndReturnIndex(strats);

  return <div>{strats[i]}</div>;
};

export default RandomStrat;
