import Card from 'react-bootstrap/Card';

    const BibleCard = (props) => {
    
        return (
          <div className={"bible-section"}>
            <Card>     
                                                            
            <Card.Body><div className='book-text'>{props.verses.book_name}</div></Card.Body>
            <Card.Body><div className='answer-section'>{props.verses.chapter}</div></Card.Body>
          
            
            </Card>
          </div>
        );
      };
    
    export default BibleCard;



