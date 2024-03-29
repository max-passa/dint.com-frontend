import { fetchEvents } from 'frontend/redux/slices/event';
import { dispatch } from 'frontend/redux/store';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import PublicEventList from './PublicEventList';

const PublicEvents = () => {
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <>
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="Dint Events, buy event tickets. Use your digital assets to create event tickets"
        />
      </Helmet>
      <div id="events">
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="header">
            <h1>Events</h1>
          </div>
        </div>

        <Container>
          <Row xs={1} md={3} className="g-4">
            <PublicEventList />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default PublicEvents;
