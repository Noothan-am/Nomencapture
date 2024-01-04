export const addUserToSpreadsheet = async () => {
  try {
    await fetch(`https://sheetdb.io/api/v1/58f61be4dda40/search?name=Tom`)
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
