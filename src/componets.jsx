import React, { Component } from "react";
import PropTypes from "prop-types";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className="section">
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="feedback-buttons">
        {options.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => onLeaveFeedback(name)}
            className="feedback-button"
          >
            {capitalize(name)}
          </button>
        ))}
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className="statistics-list">
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className="notification">{message}</p>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
