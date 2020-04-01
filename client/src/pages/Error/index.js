import React from "react";

//Components
import View from "../../components/View";
import Hero from "../../components/Hero";

//Style
import "./style.css";

function Error() {
  return (
    <View>
      <Hero>
          <h1 className="display-3">ERROR 404</h1>
          <p className="lead">Oops! What you're looking for doesn't appear to be here.</p>
          <p>Navigate {<a href="/">Home</a>}</p>
      </Hero>
    </View>
  );
}

export default Error;
