import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';


//
// Auto-suggest text box styles
//
const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing.unit * 1.5,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class BrandStyleIntegrationAutosuggest extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputValue: "", //this.props.value,
      // we added this part, this suggestions array is where our data from the axios call gets pushed.  There was already a suggestions array but we modified our in order to conform to the code we had already written.
    //   suggestions: [],
    };
  }

  onChange(e) {
      this.setState({
        inputValue: {
            [e.target.name]: e.target.value
        }
      })
  }

  render () {
    const {classes, autosuggestProps} = this.props;

    return (
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          label: this.props.label,
          placeholder: this.props.placeholder,
        //   value: this.state.inputValue,
        //   onChange: this.props.handleChange ('inputValue'),
        //   value: this.props.value,
        //   value: this.props.value[this.props.name],
          value: this.state.inputValue,
          onChange: this.props.onChange,
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    );
  }
}

BrandStyleIntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (BrandStyleIntegrationAutosuggest);
