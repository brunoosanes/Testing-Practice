const analyzeArray = function (arr) {
  const array = arr;

  const average = () => {
    const sum = array.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum / array.length;
  };

  const min = () => {
    const min = array.reduce((accumulator, current) => {
      return accumulator > current ? current : accumulator;
    });

    return min;
  };

  const max = () => {
    const max = array.reduce((accumulator, current) => {
      return accumulator > current ? accumulator : current;
    });

    return max;
  };

  const length = array.length;

  return { average, min, max, length };
};

module.exports = analyzeArray;
