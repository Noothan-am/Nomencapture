export const sendMailFromUser = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/send-mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: "Noothan",
          userEmail: "amnoothan@gmail.com",
        }),
      }
    );
    if (response.ok) {
      console.log("Mail sent successfully");
    } else {
      console.log("Mail not sent");
    }
  } catch (err) {
    console.log(err);
  }
};
