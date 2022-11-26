function getEmotionFromList(text) {
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn("python", [text]);

  pythonProcess.stdout.on("data", (data) => {
    try {
      // Happy, Angry, Surprise, Sad, Fear
      pythonProcess.stdout.on("data", (data) => {
        try {
          let a = data.toString("utf8");
          a = a.split(",");

          for (var i = 0; i < a.length; i++) {
            a[i] = a[i].replace("\r", "");
            a[i] = a[i].replace("\n", "");
            a[i] = parseFloat(a[i]);
          }

          return a; 

        } catch {
          console.log("some error inside catch rn");
        }

        return null
      });
    } catch {
      console.log("some error inside catch rn");
    }
  });
}

export {getEmotionFromList}