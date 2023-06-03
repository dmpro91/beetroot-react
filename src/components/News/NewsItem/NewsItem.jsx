import { Card } from "react-bootstrap";


// Exemple of data response
// {
//     "source": {
//     "id": "cnn",
//     "name": "CNN"
//     },
//     "author": "Issy Ronald, CNN",
//     "title": "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
//     "description": "\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.",
//     "url": "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
//     "publishedAt": "2022-05-05T10:06:14Z",
//     "content": "(CNN)\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag… [+2830 chars]"
// }

export const NewsItem = ({urlToImage, content, title}) => <Card className="mb-4">
<Card.Img variant="top" src={urlToImage} />
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>
    {content}
  </Card.Text>
</Card.Body>
</Card>