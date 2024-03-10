import { useParams } from 'react-router-dom';
import EventLayoutPage from './EventLayoutPage';

const EventLayoutWrapper = () => {
  const { eventId, layoutId } = useParams<{ eventId: string; layoutId?: string }>();

  if (!eventId) {
    return <div>Event ID is required</div>;
  }

  return <EventLayoutPage eventId={eventId} layoutId={layoutId} />;
};

export default EventLayoutWrapper;
