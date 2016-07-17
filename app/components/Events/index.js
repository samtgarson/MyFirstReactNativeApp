import { connect } from 'react-redux';
import { addTimelineEvent, hideTimelineEvent } from './actions'
import Timeline from '../Timeline'

const filterEvents = (events) => {
  return events
    .sort((a, b) => { return b.createdAt - a.createdAt })
    .filter((event) => {return !event.hidden})
}

const mapStateToProps = (state) => {
  return {
    events: filterEvents([...state.get('events').values()])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideTimelineEvent: (id) => {
      dispatch(hideTimelineEvent(id))
    },
    addTimelineEvent: () => {
      dispatch(addTimelineEvent({text: 'Hello!'}))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
