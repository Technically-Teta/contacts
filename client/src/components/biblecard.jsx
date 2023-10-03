/* eslint-disable react/prop-types */


    const BibleCard = (props) => {
    
        return (
          <div className={"bible-section"}>
               
                                                            
             <div className='book-text'>{props.verses.book_name}</div>
             <div className='answer-section'>{props.verses.chapter}</div>
          
            
           
          </div>
        );
      };
    
    export default BibleCard;
