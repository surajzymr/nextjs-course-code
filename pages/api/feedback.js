import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "alldata.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const descText = req.body.text;
    const newDescription = {
      id: new Date().toISOString(),
      email: email,
      text: descText,
    };
    // now to store the above information in the inbuilt json file
    // 1) we create a path for the data to be connected
    
    const filePath = buildFeedbackPath();
    // 2) we want to read the above file
    const data = extractFeedback(filePath)
      // 3) we need to read the data now in the desired json format
    data.push(newDescription);
        // 4) now we nened ot write the above data
    fs.writeFileSync(filePath, JSON.stringify(data));
    // 5) now we need to pass a status message stating that it got updated.
    res.status(201).json({ message: "Success", feedback: newDescription });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath)

    res.status(200).json({ feedback: data  });
  }
}

export default handler;
