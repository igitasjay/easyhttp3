/**
 * EasyHTTP Library
 *
 * @version 3.0.0
 * @author Jay
 * @license MIT
 *
 **/

class EasyHTTP {
  // Create a GET request method
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make a POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  // Make a PUT request
  async put(url, data) {
    const response = fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  // Make a DELETE request
  async delete(url) {
    const response = fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await response.json();
    return resData;
  }
}
