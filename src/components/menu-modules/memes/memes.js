import Axios from "axios";
import React, { Component } from "react";

export default class Memes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme_images: [],
      meme_top_text: "",
      meme_bottom_text: "",
    };
  }

  componentWillMount() {
    let config = {
      headers: {
        "x-rapidapi-key": "cc7f0a8e62mshb0d63d2f889eb6ap1f101fjsn2bf59726e12a",
        "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
        useQueryString: true,
      },
    };

    Axios.get("https://rapidapi.p.rapidapi.com/images", config).then((res) => {
      this.setState({ meme_images: this.getRandom(res.data, 10) });
    });
  }

  getRandom(array, n) {
    var result = new Array(n),
      len = array.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = array[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  render() {
    const meme_image_names = this.state.meme_images.map((meme, index) => (
      <h5 key={index}>{meme}</h5>
    ));
    return (
      <div>
        <h1>Memes</h1>
        {meme_image_names}
      </div>
    );
  }
}
