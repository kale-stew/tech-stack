import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    // initialie a dataSource for listView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    // very boilerplate - this.props.libraries is the most custom code
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    // actually render the dataSource
    return <ListItem library={library} />; // makes more sense to create a new component for a single row, then call it
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// this calls the function connect and returns another function
// the function then calls LibraryList
export default connect(mapStateToProps)(LibraryList);
