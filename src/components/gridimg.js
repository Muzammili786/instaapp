import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/640X309/mt-15-2-062e4b1493f453.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cache4.pakwheels.com/ad_pictures/5174/chinese-bikes-other-2021-51747395.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cache4.pakwheels.com/ad_pictures/6464/chinese-bikes-lifan-2022-64646770.jpg" />
      </Card>
    </CardGroup>
  );
}

export default GroupExample;