


function CreateContact2() {

const relationships = ['friend', 'colleague', 'family', 'Business'];

//USE STATES
const [contact, setContact] = useState

//CREATE FETCH REQUEST
getRequest = async () => {
    try {
   const response = await fetch(`http://localhost:3000/api/contact`)
        if(!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        setContact(result);
    }catch(err) {
       console.error(err);
    }

};

useEffect(() => {
    getRequest();
},[]);






  return (
    <div>
      
    </div>
  )
}

export default CreateContact2
