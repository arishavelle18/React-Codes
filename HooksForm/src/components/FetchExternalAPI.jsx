const FetchExternalAPI = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export default FetchExternalAPI;
