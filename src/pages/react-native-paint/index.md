---
title: Making easily themeable React Native StyleSheets
date: "2017-07-12T17:12:33.962Z"
---

While applying a theme via inline styles makes theming a React Native app easy, the performance benefits provided by StyleSheets would be lost. A simple day/night theme implementation for a component using StyleSheets might look like the following.

```javascript
const day = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  text: {
    color: "black",
    fontSize: 14
  }
});

const night = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  text: {
    color: "white",
    fontSize: 14
  }
});

const Component = ({ theme }) => {
  const styles = theme === "day" ? day : night;
  // and so on...
};
```

But this quickly becomes tedious when applied across any significant number of components. Another minor gripe with this scenario is only one of the two StyleSheets will be in use at any given time. It would help if StyleSheets were created as a function of a theme and then created at runtime instead when the theme is changed.

That’s where [react-native-paint](https://github.com/brankeye/react-native-paint) comes in. Here’s the previous scenario re-implemented with the module.

```javascript
import Paint, { StylesConsumer, withStyles } from 'react-native-paint';

const paint = Paint.create((theme) => ({
  container: {
    backgroundColor: theme.backgroundColor,
  },
  text: {
    color: theme.color,
    fontSize: 14,
  },
}));

// with consumer
const Component = (props) => (
  <StylesConsumer paint={paint}>
    {(styles) => (
      // and so on...
    )}
  </StylesConsumer>
);

// or hoc
const Component = withStyles(paint)(({ styles }) => (
  // and so on...
));
```

All that’s needed now is to supply the theme to the StylesProvider and an id to determine which theme is currently applied. Whenever we want to change the theme, we just supply the provider with a new theme and id.

```javascript
import * as React from "react";
import { Button } from "react-native";
import { StylesProvider } from "react-native-paint";

const day = {
  name: "day",
  backgroundColor: "white",
  color: "black"
};

const night = {
  name: "night",
  backgroundColor: "black",
  color: "white"
};

class App extends React.Component {
  state = {
    theme: day
  };

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme.name === "day" ? night : day
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <StylesProvider id={theme.name} theme={theme}>
        // can now toggle theme with a button
      </StylesProvider>
    );
  }
}
```

Additionally, the Paint object comes with all of the same helper methods and properties asStyleSheet (with the create method renamed to sheet which creates a StyleSheet directly). That’s it!

Thanks for stopping by! Here are some helpful links.

[GitHub](https://github.com/brankeye/react-native-paint)

[npm](https://www.npmjs.com/package/react-native-paint)

[Expo Live Demo](https://expo.io/@brankeye/themed-app) with [source](https://github.com/brankeye/react-native-paint/tree/master/samples/themed-app)
