let ansJoke = (joke) => {
    return {
      saySetup: function () {
        return joke.setup;
      },
      sayPunchLine: function () {
        return joke.punchLine;
      },
    };
  };

function sayJoke(apiUrl, jokeId) {
  // use mocked `fetch(url)`
  return fetch(apiUrl)
    .then((responce) => responce.json())
    .then((data) => {
      return new Promise((res, req) => {
        if (!data.jokes) {
            console.log('in url', data);
          req(new Error(`No jokes at url: ${apiUrl}`));
        } else {
          let joke = data.jokes.find((j) => j.id === jokeId);
          if (!joke) {
            req(new Error(`No jokes at url: ${apiUrl}`));
          } else {
            res(ansJoke(joke));
          }
        }
      });
    });
}

sayJoke()
