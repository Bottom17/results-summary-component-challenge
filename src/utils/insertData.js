fetch("../src/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    const averageScoreElement = document.querySelector(
      ".app__result-circle-total"
    );
    const descriptionElement = document.querySelector(
      ".app__result-description"
    );
    averageScoreElement.innerHTML += 0;
    descriptionElement.innerHTML +=
      "The JSON file couldn't be read. Something went wrong, check console for more information.";
    console.log("error: " + err);
  });

function appendData(data) {
  var averageScore = 0;

  for (let i = 0; i < data.length; i++) {
    averageScore += data[i].score;

    switch (data[i].category) {
      case "reaction":
        const reactionScoreElement = document.querySelector(
          ".app__summary-reaction-score1"
        );
        const reactionScore = document.createTextNode(data[i].score);
        reactionScoreElement.appendChild(reactionScore);
        break;
      case "memory":
        const memoryScoreElement = document.querySelector(
          ".app__summary-memory-score1"
        );
        const memoryScore = document.createTextNode(data[i].score);
        memoryScoreElement.appendChild(memoryScore);
        break;
      case "verbal":
        const verbalScoreElement = document.querySelector(
          ".app__summary-verbal-score1"
        );
        const verbalScore = document.createTextNode(data[i].score);
        verbalScoreElement.appendChild(verbalScore);
        break;
      case "visual":
        const visualScoreElement = document.querySelector(
          ".app__summary-visual-score1"
        );
        const visualScore = document.createTextNode(data[i].score);
        visualScoreElement.appendChild(visualScore);
        break;
    }
  }
  const subtitleElement = document.querySelector(".app__result-subtitle");
  const descriptionElement = document.querySelector(".app__result-description");

  averageScore /= data.length;

  if (averageScore >= 90) {
    subtitleElement.innerHTML += "Outstanding";
    descriptionElement.innerHTML +=
      "Congratulations! You scored higher than 95% of the people who have taken these tests.";
  } else if (averageScore >= 70) {
    subtitleElement.innerHTML += "Superior";
    descriptionElement.innerHTML +=
      "Well done! You scored higher than 65% of the people who have taken these tests.";
  } else if (averageScore >= 50) {
    subtitleElement.innerHTML += "Satisfactory";
    descriptionElement.innerHTML += "You passed the test by a thin margin.";
  } else if (averageScore >= 30) {
    subtitleElement.innerHTML += "Low Failure";
    descriptionElement.innerHTML += "You failed!";
  } else {
    subtitleElement.innerHTML += "Low Failure";
    descriptionElement.innerHTML +=
      "You will have to work a lot harder next time!";
  }

  const averageScoreElement = document.querySelector(
    ".app__result-circle-total"
  );

  if (averageScore === 0 || averageScore === null || averageScore > 100) {
    averageScoreElement.innerHTML += 0;
  } else {
    averageScoreElement.innerHTML += Math.round(averageScore);
  }
}
