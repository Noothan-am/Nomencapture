export const addUserToSpreadsheet = async () => {
  const userData = await JSON.parse(localStorage.getItem("userDetails") || "");
  const { name, email } = userData.user;
  try {
    await fetch(
      "https://sheetdb.io/api/v1/9njehnbkbt0z9?sheet=feedback-sheet",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              "How aligned are you on our Observation": null,
              Comments: null,
              "Hear it First - Voice One": null,
              "Hear it First - Voice Two": null,
              "Hear it First - Voice Three": null,
              Elaborate: null,
              "Name set One Rating": null,
              "Name set Two Rating": null,
              "Name set Three Rating": null,
              "Name Set One - Suggestion/Feedback": null,
              "Name Set Two - Suggestion/Feedback": null,
              "Name Set Three - Suggestion/Feedback": null,
              "Which naming set you like the most": null,
              "Do you prefer another round?": null,
              "Are you completely satisfied with the name?": null,
            },
          ],
        }),
      }
    )
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          return Boolean(data.length);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
